// const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// exports.processPayment = catchAsyncErrors(async(req, res, next) => {
//     const myPayment = await stripe.paymentIntents.create({
//         amount: req.body.amount,
//         currency: "INR",
//         metadata: {
//             company: "Ecommerce",
//         },
//     });

//     res
//         .status(200)
//         .json({ success: true, client_secret: myPayment.client_secret });
// });

// exports.sendStripeApiKey = catchAsyncErrors(async(req, res, next) => {
//     res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
// });


// const { instance } = require("../server");
// console.log(instance)
// const Instance = instance.instance

const Razorpay = require("razorpay")
var crypto = require("crypto");
var instance = new Razorpay({
    key_id: "rzp_test_6qNKTSXJ7h7EIQ" || process.env.RAZORPAY_API_KEY,
    key_secret: "9TZVVVbiiY6GhasQPLjf4WY0" || process.env.RAZORPAY_API_SECRET,
});

exports.checkout = async(req, res) => {
    // console.log(req.body)
    const options = {
        amount: Number(req.body.amount * 100),
        // amount: 5000,
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    // console.log(instance, options)
    const order = await instance.orders.create(options, (err, order) => {
        if (err) {
            res.status(5000).json({
                success: false,
                message: "Server Error"
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Order is Created",
                order,
            })
        }
    });;
};


exports.paymentVerify = async(req, res) => {

    console.log(req.body)
        // razorpay_payment_id
    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
    console.log(body)


    var expectedSignature = crypto.createHmac('sha256', "9TZVVVbiiY6GhasQPLjf4WY0")
        .update(body.toString())
        .digest('hex');
    // console.log("sig received ", req.body.response.razorpay_signature);
    // console.log("sig generated ", expectedSignature);
    var response = { "signatureIsValid": "false" }
    if (expectedSignature === req.body.response.razorpay_signature) {
        response = { "signatureIsValid": "true" }
        res.send({ code: 200, success: true, message: "Payment Verification Success", });

    } else {
        res.status(5000).json({
            success: false,
            message: "Server Error"
        })

    }


}