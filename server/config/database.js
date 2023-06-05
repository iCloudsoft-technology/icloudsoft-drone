const mongoose = require("mongoose");
require('dotenv').config();
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        });



};

module.exports = connectDatabase;

// const mongoose = require("mongoose");

// const db = "mongodb+srv://anilKadam:anilKadam178@cluster0.fadvnyl.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(db,

//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }
//     )
//     .then(() => {
//         console.log("Connected to Mongodb", `Mongodb connected with server: ${data.connection.host}`);
//     })
//     .catch((err) => {
//         console.log("Not Connected to Mongodb", err);
//     })


// module.exports = mongoose;