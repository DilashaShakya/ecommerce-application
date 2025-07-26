const mongoose = require("mongoose");
const { type } = require("os");


const AuthSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    tokens:{
        accessToken:String,
        refreshToken:String
    },

    device:{
        type: String,
        enum: ["web", "mobile", "other"],
        default: "other",
    },
    detail: String
},{
    timestamps: true,
    autoIndex: true,
    autoCreate: true
});

const AuthModel = mongoose.model("Session", AuthSchema);
module.exports = AuthModel;