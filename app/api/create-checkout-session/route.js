import Stripe from 'stripe';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  httpClient: Stripe.createFetchHttpClient(),
});

export async function POST(request) {
  try {
    const {
      serviceTitle,
      customerName,
      customerEmail,
      customerPhone,
      mode,
      date,
      time,
      notes,
      amount,
    } = await request.json();

    if (!serviceTitle || !customerName || !customerEmail || !amount || typeof amount !== 'number' || amount <= 0) {
      return Response.json(
        { error: 'serviceTitle, customerName, customerEmail, and a positive numeric amount are required.' },
        { status: 400 }
      );
    }

    // ── 1. Insert booking record before creating Stripe session ──────────────
    const supabase = getSupabaseAdmin();
    const { data: bookingData, error: bookingError } = await supabase
      .from('bookings')
      .insert({
        service_title:  serviceTitle,
        customer_name:  customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone || null,
        mode:           mode          || null,
        preferred_date: date          || null,
        preferred_time: time          || null,
        notes:          notes         || null,
        status:         'pending',
      })
      .select('id')
      .single();

    if (bookingError || !bookingData) {
      console.error('[create-checkout-session] Booking insert error:', bookingError);
      return Response.json(
        { error: 'Could not save your booking. Please try again.' },
        { status: 500 }
      );
    }

    const bookingId = bookingData.id;
    const siteUrl   = process.env.NEXT_PUBLIC_SITE_URL;

    // ── 2. Create Stripe Checkout session with booking metadata ──────────────
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      currency: 'usd',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency:     'usd',
            unit_amount:  Math.round(amount * 100),
            product_data: { name: serviceTitle },
          },
        },
      ],
      customer_email: customerEmail,
      metadata: {
        booking_id:   bookingId,
        serviceTitle: serviceTitle,
      },
      success_url: `${siteUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${siteUrl}/payment-cancelled`,
    });

    // ── 3. Write Stripe session ID back to the booking row ───────────────────
    await supabase
      .from('bookings')
      .update({ stripe_session_id: session.id })
      .eq('id', bookingId);

    return Response.json({ url: session.url });
  } catch (err) {
    console.error('[create-checkout-session] error:', {
      message:    err.message,
      type:       err.type,
      code:       err.code,
      statusCode: err.statusCode,
      requestId:  err.requestId,
    });
    return Response.json(
      { error: err.message ?? 'Failed to create checkout session.' },
      { status: 500 }
    );
  }
}

// Reject every other HTTP method.
export function GET()    { return Response.json({ error: 'Method not allowed.' }, { status: 405 }); }
export function PUT()    { return Response.json({ error: 'Method not allowed.' }, { status: 405 }); }
export function DELETE() { return Response.json({ error: 'Method not allowed.' }, { status: 405 }); }
export function PATCH()  { return Response.json({ error: 'Method not allowed.' }, { status: 405 }); }
