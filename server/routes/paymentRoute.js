const express = require("express");
// const {processPayment,sendStripeApiKey,} = require("../controllers/paymentController");
const router = express.Router();
// const { isAuthenticatedUser } = require("../middleware/auth");

// router.route("/payment/process").post(isAuthenticatedUser, processPayment);

// router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);



router.route("/checkout").post(require("../controllers/paymentController").checkout)
router.route("/verification").post(require("../controllers/paymentController").paymentVerify)

module.exports = router;