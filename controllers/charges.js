const keys = require('../config/keys');
const stripe = require('stripe')(keys.STRIPE_SK);

const createCharge = async (req, res, next) => {

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 2000,
        currency: 'usd',
        payment_method_data: {
            type: "card",
            card: {
                token: req.body.token.id
            }
        },
        confirm: true,
        return_url: "http://localhost:3000/"
    });

    console.log(paymentIntent)

    res.send(paymentIntent);
};

module.exports.createCharge = createCharge;