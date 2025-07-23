const mongoose = require("mongoose");
const { MongodbConfig } = require("./config");

// IIFE functions

(async()=>{
    try{
        await mongoose.connect(MongodbConfig.url, {
            dbName: MongodbConfig.name,
            autoCreate: true,
            autoIndex: true
        })
        console.log("*** MongoDb server connected succesfully ******");
    }
    catch(exception){
        console.log("****MongoDb Server connection error")
        console.error(exception)
    }
})();