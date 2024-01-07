const express = require("express")
const router = express.Router()
const authcontrol = require("../controllers/auth.control")
const {registerationSchema} = require("../validation/auth.validation")
// const {} = require("joi")
const validate = require("../services/validat.services")
router.post("/register",validate(registerationSchema),authcontrol.register)
module.exports = router