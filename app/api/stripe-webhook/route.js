import Stripe from 'stripe';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  // 1. Guard: webhook secret must be configured
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('[stripe-webhook] STRIPE_WEBHOOK_SECRET is not set.');
    return Response.json(
      { error: 'Webhook secret is not configured on this server.' },
      { status: 500 }
    );
  }

  // 2. Read raw body before any parsing — Stripe verifies signatures against exact bytes.
  // App Router uses the Web Request API so request.text() returns the raw string.
  const rawBody = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig) {
    return Response.json(
      { error: 'Missing Stripe-Signature header.' },
      { status: 400 }
    );
  }

  // 3. Verify signature and parse event
  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('[stripe-webhook] Signature verification failed:', err.message);
    return Response.json(
      { error: `Webhook signature invalid: ${err.message}` },
      { status: 400 }
    );
  }

  // 4. Handle events
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const bookingId = session.metadata?.booking_id ?? null;

    const paymentRow = {
      stripe_session_id:        session.id,
      stripe_payment_intent_id: session.payment_intent          ?? null,
      amount_total:             session.amount_total             ?? null,
      currency:                 session.currency                 ?? null,
      status:                   session.payment_status           ?? null,
      customer_email:           session.customer_email
                                  ?? session.customer_details?.email
                                  ?? null,
      service_title:            session.metadata?.serviceTitle   ?? null,
      booking_id:               bookingId,
    };

    try {
      const supabaseAdmin = getSupabaseAdmin();

      // Upsert payment record
      const { error: paymentError } = await supabaseAdmin
        .from('payments')
        .upsert(paymentRow, { onConflict: 'stripe_session_id' });

      if (paymentError) {
        console.error('[stripe-webhook] Payment upsert error:', paymentError);
        return Response.json({ error: 'Database write failed.' }, { status: 500 });
      }

      console.log('[stripe-webhook] Payment recorded:', session.id);

      // Update booking status to confirmed
      if (bookingId) {
        const { error: bookingError } = await supabaseAdmin
          .from('bookings')
          .update({
            status:            'confirmed',
            stripe_session_id: session.id,
          })
          .eq('id', bookingId);

        if (bookingError) {
          console.error('[stripe-webhook] Booking update error:', bookingError);
          // Do not return 500 — payment is already recorded; booking update failure
          // should not cause Stripe to retry the entire webhook.
        } else {
          console.log('[stripe-webhook] Booking confirmed:', bookingId);
        }
      }
    } catch (dbErr) {
      console.error('[stripe-webhook] Unexpected database error:', dbErr);
      return Response.json({ error: 'Database error.' }, { status: 500 });
    }
  }

  // Acknowledge all other event types without processing them.
  return Response.json({ received: true });
}

// Reject every other HTTP method explicitly.
export function GET()    { return Response.json({ error: 'Method not allowed.' }, { status: 405 }); }
export function PUT()    { return Response.json({ error: 'Method not allowed.' }, { status: 405 }); }
export function DELETE() { return Response.json({ error: 'Method not allowed.' }, { status: 405 }); }
export function PATCH()  { return Response.json({ error: 'Method not allowed.' }, { status: 405 }); }
