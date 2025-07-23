const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug:{
        type: String,
        unique: true
    },
    logo:{
        id: String,
        publicUrl: String,
        optimizedUrl: String
    },
    status:{
        type: String,
        enum :['active', 'inactive'],
        default:"inactive"
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    },
    updatedBy:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    },
    createdAt: Date, 
    updatedAt:Date
})

const BrandModel = mongoose.model("Brand", BrandSchema);
module.exports = BrandModel; 