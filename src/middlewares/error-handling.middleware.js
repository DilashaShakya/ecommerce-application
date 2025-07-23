const errorHandling=(error, req, res, next)=>{
    console.log(error);
    let code = error.code || 500;
    let detail = error.detail || error.details || null;
    let message = error.message || "Internal server error...";
    let status = error.status || "SERVER_ERR";


    if (error.name === "MongoServerError"){
        code = 400;
        message = "Database validation error";
        status = "DB_ERR_VALIDATION";
        detail = {}
        if (+error.code === 11000){
            Object.keys(error.keyValue).map((field)=>{
                detail[field] = `${field} should be unique`
            })
    }
}

    res.status(404).json({
        error:detail,
        message:message,
        status:status
    })
}

module.exports = errorHandling;