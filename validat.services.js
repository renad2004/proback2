const validate = (schema) => {
    return (req, res, next) => {
        const { Error } = schema.validate(req.body,{abortEarly:false})
        if (Error) {
            let errMsg = Error.details.map((err)=>{
                return {message:err.message,path:err.path}
            })
           return res.status(400).send({Error: errMsg });

        }
        next();

        res.send(Error);
    }
}
module.exports = validate