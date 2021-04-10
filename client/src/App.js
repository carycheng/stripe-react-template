import React from "react";
import './public/styles/Landing.css';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/CheckoutForm";
import Header from './components/Header';

const keys = require('./config/keys');

const stripePromise = loadStripe(keys.STRIPE_PK);

class App extends React.Component {

  render() {
    return (
      <div className="App background-landing">
        <Header />
        <div className="product">
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm/>
            </Elements>
          </div>
        </div>
      </div>
    );
  }
};

export default App;