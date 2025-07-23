// const cookie = require('cookie')

const AuthService = require("./auth.service");
const userSvc = require("../users/user.service");
const authMailSvc = require("./auth-mail.service");
const { Status } = require("../../config/constants");
const randomStringGenerator = require("../../utilities/helpers");

class AuthController{
    register = async( req, res, next) =>{
        const authSvc = new AuthService();
        try{
            const data = await authSvc.transformToRegisteredUser(req)

            //db integration
            const user = await userSvc.createData(data)

        

            //todo: email registered user
            await authMailSvc.sendActivationEmail(user)


            //todo: cleanup
            res.json({
                data:user,
                message: "User Registered",
                status: "SUCCESS"
            })

        }
        catch(exception){
            next(exception)
        }
        // const data = cookie.parse(req.headers.cookie || "")

        // res.cookie('userID', 12323,{
        //     httpOnly: true,
        //     secure:false,
        //     maxAge: 864000,
        //     sameSite:'lax'
        // })
        // res.json({
        //     data: "New Register request",
        //     message: "New User Registered",
        //     // cookie: data,
        //     status: "Success",
        //     body:req.body,
        //     file: req.file
        // })
    }

    activateNewRegisteredUser = async(req, res, next) => {
        try{
            const token = req.params.token;
            let userDetails = await getSingleRowByFilter({
                activationToken: token,    
            })

            if (!userDetails){
                return next({
                    code: 404,
                    message: "User does not exist or is already activated",
                    status: "ERR_USER_NOT_FOUND"
                })
            }
            const expiryTime = userDetails.expiryTime.getTime();
            if (expiryTime < Date.now()){
                return next({
                    code: 400,
                    message: "Activation link expired",
                    status: "ERR_ACTIVATION_LINK_EXPIRED"
                })
            }

            async function getSingleRowByFilter(filter){
                try{
                    const response = await UserModel.findOneAndUpdate(filter, {$set:data}, {new:true})
                    return response
                }catch(exception){
                    throw exception 
                }
            }

            const activateData ={
                status: Status.ACTIVE,
                activationToken: null,
                expiryTime: null
            }
            //user update:
            userDetails = await userSvc.updateSingleRowByFilter({_id: userDetails._id}, activateData)
            
            //inform user: 
            await authMailSvc.sendWelcomeEmail(userDetails)

            //todo:  login hit
            //accessToke
            //refresh Token

            res.json({
                data: {
                    accessToken:"",
                    refreshToken: "",
                },
                message: "Your profile has been activated succesfully!",
                status:"PROFILE_ACTIVATED"
            }

            )

        }catch(exception){
            next(exception)
        }
    }

    login = (req , res, next) => {
        res.json({
            data: "User login details",
            message: "login Details",
            status: "Success"
        })
    }

    forgetPassword = (req, res, next) => {
        res.json({
            data:"Forget password request",
            message: "Forgot password",
            status: "success"
        })
    }

    resetPassword = (req, res, next) => {
        res.json({
            data:"Reset password request",
            message: "Reset password sucessful",
            status: "success"
        })
       
    }

    getLogout = (req, res, next) =>{
        res.json({
            data:"Logout request",
            message: "Logout sucessful",
            status: "success"
        })
    }

    updateProfile = (req, res, next) =>{
        res.json({
            data: "Profile Update Request",
            message: "Profile Updated",
            ststus: "Success"
        })
    }

    loggedInUserProfile = (req, res, next) =>{
        res.json({
            data: "logged in user request",
            message: "Logged in user success",
            status: "Success"
        })
    }
}

const authCtrl = new AuthController();
module.exports = authCtrl