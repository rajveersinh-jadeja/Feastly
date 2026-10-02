const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
    const{name, email, password} = req.body;
    const isUserExists = await userModel.findOne({
        email
    })
    if(isUserExists){
        return res.status(400).json({
            message: 'User already exists'
        })
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 16);

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })
    const token = jwt.sign({
        id: user._id,
    },"d3c8c9e18256597318df3fd6aa33bdb6143b1647b2760a89d0ba83e9")

    res.cookie("token", token, )
    return res.status(201).json({
        mesasage: "success",
        user: user,
        _id: user._id,
    })
}























