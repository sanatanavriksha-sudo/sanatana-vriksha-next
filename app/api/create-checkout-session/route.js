import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { serviceTitle, customerEmail, amount } = await request.json();

    if (!serviceTitle || !amount || typeof amount !== 'number' || amount <= 0) {
      return Response.json(
        { error: 'serviceTitle and a positive numeric amount are required.' },
        { status: 400 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      currency: 'usd',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: Math.round(amount * 100), // dollars → cents
            product_data: {
              name: serviceTitle,
            },
          },
        },
      ],
      customer_email: customerEmail || undefined,
      success_url: `${siteUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${siteUrl}/payment-cancelled`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
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
