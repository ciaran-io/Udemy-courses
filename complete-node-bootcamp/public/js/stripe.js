/* eslint-disable */
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51LAX43Bi1W41eI4puEBLEHHnMaWt27in59NAjckHgvtey3NB0ZueIDNfS8z5Iq2lhsPZnuCCbKU6hmvoMCQZxKgH00KxmbYBAc'
  );
  try {
    // 1. Get checkout session fro, API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    // 2. Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err + 'you f up');
    showAlert('error', err);
  }
};
