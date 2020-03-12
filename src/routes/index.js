const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_NDjmNNjupF5autdBvKDjteJS00Mris7HW2');


router.get('/', (req, res)=> {
    res.render('index');
});

router.post('/checkout', async (req, res) => {
    const customer = await stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    });
    const charge = await stripe.charges.create({
        amount: '3000',
        description: 'Rhum boteila',
        currency: 'usd',
        customer: customer.id
    });
    // Save this charge in your database
    console.log(charge.id);
    // Finally Show a Success View
    res.render('download');
});


module.exports = router