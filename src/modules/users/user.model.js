const mongoose = require("mongoose");
const { Gender, UserRoles, Status } = require("../../config/constants");


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        min:2,
        max:50,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    address:{
        billing: String,
        shipping:String
    },
    phone:{
        type: String
    },
    image:{
        id: String,
        publicUrl: String,
        optimizedUrl: String
    },
    dob: Date,
    gender:{
        type: String,
        enum:Object.values(Gender)
    },
    role:{
        type: String,
        enum:Object.values(UserRoles),
        default: UserRoles.CUSTOMER
    },
    activationToken: String,
    status:{
        type: String,
        enum: Object.values(Status),
        default: Status.INACTIVE
    },
    forgetToken: String,
    expiryTime: Date,
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
},{
    autoCreate:true,
    autoIndex:true,
    timestamps:true
})

const UserModel = mongoose.model("User", UserSchema); // model name -> singular name use
//collection/table => camel case plural version of model name
module.exports = UserModel;

//phone application to record info on some users.
//personal info, skills, area of work, education, employment type: full-time/part-time, phone number.

