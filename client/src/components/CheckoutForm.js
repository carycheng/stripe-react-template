import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import axios from 'axios';
import '../public/styles/CardForm.css';
import CardSection from "./CardSection";
import ChargeResult from './ChargeResult';

class CheckoutForm extends React.Component {

  state = {
    charge: null
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    const response = await axios.post('/api/v1/create-charge', {
      token: result.token
    });

    this.setState({charge: response.data})
  };

  render() {
    if (this.state.charge) {
      const result = document.getElementById('outer-box');
      result.classList.remove('product');
      result.classList.add('result-box');

      return <ChargeResult charge={this.state.charge}/>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CardSection />
          <button disabled={!this.props.stripe} className="btn-pay">
            Pay Now
          </button>
        </form>
      </div>
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}