const dotenv = require('dotenv');
dotenv.config()
const stripe = require('stripe')(process.env.STRIPE_KEY);


exports.checkout = async (req, res, next) => {
    try {
        const charge = await stripe.charges
            .create({
                amount: req.body.amount,
                currency: 'eur',
                source: req.body.token.id,
                description:
                    'My First Test Charge (created for API docs at https://www.stripe.com/docs/api)',
            })
        res.status(200).json(charge)
    } catch (error) {
        console.log('Error', error);
        res.status(500).json(error);
    }
};
