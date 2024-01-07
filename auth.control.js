const User = require("../models/user.model")
const asyncHandler = require("express-async-handler")
const authcontrol = {
    register : asyncHandler(async (req,res)=>{
        const existUser = await User.findOne({email:req.body.email})
        if(existUser) {
         return res.status(409).send({Error:'Email already in use'})
    }
    let newUser = new User(req.body)
    await newUser.save()
    res.status(201).send()
    }),
};
        
module.exports = authcontrol
