const joi = require("joi")
const passwordExp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).(?=.*[a-zA-Z]).{8,}$/
module.exports={
    registerationSchema : joi.object().keys({
        name:joi.string().min(3).max(30).required().error(new Error("name is required")),
        email:joi.string().email().min(3).max(30).required().error(new Error("email is required")),
        password:joi.string().regex(passwordExp).required().error(new Error("password is required")),
        adresse:joi.string().min(3).max(30).required().error(new Error("name is required")),
        nationalId:joi.number().min(14).max(14).required().error(new Error("name is required")),
        phone:joi.number().min(3).max(30).required().error(new Error("name is required")),
    })
}