import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@/context/CartContext';
import CheckoutForm from '@/components/CheckoutForm';
import { Card, CardContent } from '@/components/ui/card';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function Checkout() {
  const { cart, cartTotal = 0 } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      
      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="mt-4 space-y-2">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <p className="text-lg mt-4 font-bold">Total: ${cartTotal.toFixed(2)}</p>
          </div>

          <Elements stripe={stripePromise}>
            <CheckoutForm total={cartTotal} />
          </Elements>
        </CardContent>
      </Card>
    </div>
  );
}


// export default function Checkout() {
//   return <h1>Checkout Page</h1>;
// }