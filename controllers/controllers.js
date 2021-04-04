const keys = require('../config/keys');
const stripe = require('stripe')(keys.STRIPE_SK);

const saySomething = async (req, res, next) => {
    console.log(req.body);

    const charge = await stripe.charges.create({
        amount: 2000,
        currency: 'usd',
        source: req.body.token.id,
        description: 'My First Test Charge (created for API docs)',
    });

    console.log(charge);

    res.status(200).json({
        body: 'Hello from the server!'
    });
};

module.exports.saySomething = saySomething;