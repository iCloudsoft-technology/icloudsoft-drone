// const app = require("./app");
const app = require("./app")
    // import app from "./app"
const cloudinary = require("cloudinary");
// import Razorpay from "razorpay";
const Razorpay = require("razorpay")
const connectDatabase = require("./config/database");
require('dotenv').config();





exports.instance = new Razorpay({
    key_id: "rzp_test_6qNKTSXJ7h7EIQ" || process.env.RAZORPAY_API_KEY,
    key_secret: "9TZVVVbiiY6GhasQPLjf4WY0" || process.env.RAZORPAY_API_SECRET,
});

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "server/config/config.env" });
}

// Connecting to database
connectDatabase();

cloudinary.config({
    cloud_name: "dyep4umll" || process.env.CLOUDINARY_NAME,
    api_key: "281495341836512" || process.env.CLOUDINARY_API_KEY,
    api_secret: "v3aswar9xXS3mUjGvHp05poO1T0" || process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});