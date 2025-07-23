const http = require('http');
require("dotenv").config();
console.log("🔗 URI being used:", process.env.MONGODB_URL);

const app = require("./src/config/express.config");

const mongoose = require("mongoose");

// MongoDB connection
const mongoURI = process.env.MONGODB_URL 
// Replace <your_password> with your actual password or store it in .env
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("✅ MongoDB connected");

    // Start the server only after DB connection
    const httpServer = http.createServer(app);
    const PORT = 4000;
    const HOST = "127.0.0.1";

    httpServer.listen(PORT, HOST, (err) => {
        if (!err) {
            console.log("🚀 Server is running on port", PORT);
        }
    });

})
.catch(err => {
    console.error("❌ MongoDB connection error:", err);
});
