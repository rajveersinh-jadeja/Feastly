const mongoose = require('mongoose');


const userschema = new mongoose.schema({
    fullName:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,

    }
},
    {
        timestamps: true
    }

    )

const userModel = mongoose.model("User",userschema);
module.exports = userModel;