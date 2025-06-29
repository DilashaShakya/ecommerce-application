const http = require('http');
const app = require("./src/config/express.config")

const httpServer = http.createServer(app) 

const PORT = 3000;
const HOST = "127.0.0.1";

httpServer.listen(PORT, HOST, (err)=>{
    if (!err){
        console.log("Server is running on port", PORT)
   }
})