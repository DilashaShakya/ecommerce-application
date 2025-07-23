const express = require("express");
const router = require("./router.config");
const errorHandling = require("../middlewares/error-handling.middleware");

const app = express();
require("./mongo.config");


//global data parser
app.use(express.json({limit: '5mb'}))  //application/json
app.use(express.urlencoded({limit:'5mb'})) //urlencoded- application/x-www-form-urlencoded


app.use("/assets", express.static("./public/"));
app.use("/images", express.static("./public/images/"));

//mounting routes
app.use("/api/v1", router)

//error 404 route

app.use((req, res, next)=>{
    next({code:404, message:"Not Found", status: 
        "ERR_NOT_FOUND"
    })
})

//error handling middlewares
app.use(errorHandling)
module.exports = app; 