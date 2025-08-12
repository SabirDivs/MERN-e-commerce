import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import api from '@/lib/api';
// Update these imports:
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CheckoutForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Create payment intent
    const { data } = await api.post('/payment/create-payment-intent', {
      amount: total
    });

    // Confirm card payment
    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Customer Name'
        }
      }
    });

    if (result.error) {
      setError(result.error.message);
      setProcessing(false);
    } else if (result.paymentIntent.status === 'succeeded') {
      // Handle successful payment
      console.log('Payment succeeded!');
      // Clear cart, redirect to success page
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <CardElement className="p-3 border rounded" />
      </div>
      
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      <Button
        type="submit"
        disabled={!stripe || processing}
        className="w-full"
      >
        {processing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
      </Button>
    </form>
  );
};
export default CheckoutForm;  // Ensure default export
