const express = require ("express")
 const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const routes = require("./routes/index.route")
const morgan = require("morgan")
function dbConnection(){
    const url = process.env.DB_URL
    mongoose.connect(url)
        .then(()=>{
        console.log("DB connected!!");
    })
    .catch((err)=>{
        console.error(err);
        console.log("DB no connected")

    })
}
    app.use(morgan("dev"))
    app.use(express.json())
    app.use("/api",routes)
    
    app.all("*",(req,res)=>{
        res.status(400).send({error})

    })
 
const PORT = process.env.PORT ||5000
app.listen(PORT,()=>{
    dbConnection()
console.log(`server is running ${PORT}`);
})