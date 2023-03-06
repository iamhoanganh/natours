/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
var stripe = Stripe(
  'pk_test_51MgMzQE1s6U1m5TQ34kb9BHLPmqkBfhNyCAJzO4OmG10hjB1JhGJqsDmppVp86tr0boyR1RI3TuA4ckOu7kmxnC600sAOMzc0u'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://localhost:8000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);
    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
