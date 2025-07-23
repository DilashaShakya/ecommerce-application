

const validateData = (rules) => {
 
    return async (req, res, next)=>{
        try{
            const data = req.body

            if (!data){
                throw{
                    code:422,
                    message:"Data not set",
                    status: "DATA_NOT_SET_ERR"
                }
            }
            await rules.validateAsync(data, {abortEarly:false});
            next()
        }
        //rules, validate, success => next step, fail => error handling
        catch(exception){
            console.log(exception)
            let errObj = {

            };
            if(exception.details){
                exception.details.map((error)=>{
                    errObj[error.path.pop()] = error.message;
                })
            }
            next({
                code:exception.code || 400,
                message: exception.message || "Validation Failed",
                status: exception.status || "ERR_VALIDATION_FAILED",
                detail:errObj,
            })
        }
        

    }

}
 
module.exports = validateData;