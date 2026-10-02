const mongoose = require('mongoose');


function connectDB(){
    mongoose.connect("mongodb://localhost:27017/feastly")
    .then(() => {
        console.log("MongoDB Connected!");
    })
        .catch((err) => {
            console.log("mongoDB connection error:", err);
        })
}
module.exports = connectDB;