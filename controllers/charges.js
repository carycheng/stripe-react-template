const keys = require('../config/keys');
const stripe = require('stripe')(keys.STRIPE_SK);

const createCharge = async (req, res, next) => {
    const charge = await stripe.charges.create({
        amount: 2000,
        currency: 'usd',
        source: req.body.token.id,
        description: 'Test Charge',
    });

    res.send(charge);
};

module.exports.createCharge = createCharge;