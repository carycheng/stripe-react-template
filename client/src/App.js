import React from "react";
import './styles/CardForm.css';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/CheckoutForm";

const keys = require('./config/keys');

const stripePromise = loadStripe(keys.STRIPE_PK);

const App = () => {
  return (
    <div className="App">
      <div className="product">
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default App;