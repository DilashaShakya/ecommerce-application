// const cookie = require('cookie')

const userSvc = require("../users/user.service");
const authMailSvc = require("./auth-mail.service");
const { Status } = require("../../config/constants");
const randomStringGenerator = require("../../utilities/helpers");
const UserModel = require("../users/user.model");
const authSvc = require("./auth.service");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { AppConfig } = require("../../config/config");

class AuthController{
    register = async( req, res, next) =>{
        // const authSvc = new AuthService();
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

    activateNewRegisteredUser = async (req, res, next) => {
    try {
        const token = req.params.token;

        // Step 1: Get user using the token
        let userDetails = await userSvc.getUserByActivationToken(token);

        // Step 2: If not found
        if (!userDetails) {
            return next({
                code: 404,
                message: "Invalid or expired activation link.",
                status: "ERR_INVALID_ACTIVATION_LINK"
            });
        }

        // Step 3: If already active
        if (userDetails.status === Status.ACTIVE) {
            return next({
                code: 400,
                message: "User account is already activated.",
                status: "ERR_ALREADY_ACTIVATED"
            });
        }

        // Step 4: If token expired
        if (userDetails.expiryTime.getTime() < Date.now()) {
            return next({
                code: 400,
                message: "Activation link expired.",
                status: "ERR_ACTIVATION_LINK_EXPIRED"
            });
        }

        // Step 5: Activate user
        const activateData = {
            status: Status.ACTIVE,
            activationToken: null,
            expiryTime: null
        };

        userDetails = await userSvc.updateSingleRowByFilter({ _id: userDetails._id }, activateData);

        // Step 6: Send welcome email
        await authMailSvc.sendWelcomeEmail(userDetails);

        // Step 7: Response
        res.json({
            data: {
                accessToken: "", // Placeholder
                refreshToken: "" // Placeholder
            },
            message: "Your profile has been activated successfully!",
            status: "PROFILE_ACTIVATED"
        });
    } catch (exception) {
        next(exception);
    }
};

    resendActivationToken = async (req, res, next) => {
    try {
        const token = req.params.token;

        // Step 1: Find user by token
        let userDetails = await userSvc.getUserByActivationToken(token);

        if (!userDetails) {
            return next({
                code: 404,
                message: "Invalid or expired activation link.",
                status: "ERR_INVALID_ACTIVATION_LINK"
            });
        }

        // Step 2: Already activated
        if (userDetails.status === Status.ACTIVE) {
            return next({
                code: 400,
                message: "Account already activated.",
                status: "ERR_ALREADY_ACTIVATED"
            });
        }

        // Step 3: If token hasn't expired yet
        if (userDetails.expiryTime.getTime() > Date.now()) {
            return next({
                code: 400,
                message: "Current activation link is still valid.",
                status: "ERR_ACTIVATION_LINK_VALID"
            });
        }

        // Step 4: Update token and expiry time
        const updateData = {
            activationToken: randomStringGenerator(),
            expiryTime: new Date(Date.now() + 86400000), // 24 hours
            status: Status.INACTIVE
        };

        userDetails = await userSvc.updateSingleRowByFilter({ _id: userDetails._id }, updateData);

        // Step 5: Send email
        await authMailSvc.sendResendActivationEmail(userDetails);

        // Step 6: Respond
        res.json({
            data: null,
            message: "A new activation link has been sent to your email.",
            status: "NEW_ACTIVATION_LINK_SENT"
        });
    } catch (exception) {
        next(exception);
    }
};


    loginUser = async (req, res, next) => {
    try {
        // Extract email and password
        const { email, password } = req.body;

        // Fetch user details
        const userDetails = await userSvc.getSingleRowByFilter({ email });

        // Check if user exists
        if (!userDetails) {
            throw {
                code: 422,
                message: "User not found",
                status: "USER_NOT_FOUND_ERR"
            };
        }

        // Verify password
        if (!bcrypt.compareSync(password, userDetails.password)) {
            throw {
                code: 422,
                message: "Credentials do not match",
                status: "INVALID_PASSWORD_ERR"
            };
        }

        // Check activation
        if (userDetails.status !== Status.ACTIVE || userDetails.activationToken !== null) {
            throw {
                code: 422,
                message: "User account is not activated",
                status: "USER_NOT_ACTIVATED_ERR"
            };
        }

        // Store session and generate JWT (you may want to add real token generation here)
        const session = await authSvc.storeSession(userDetails);
                // Respond
        res.json({
            data: session.tokens,
            message: "User login successful. Welcome onboard!!",
            status: "SUCCESS_LOGIN"
        });

    } catch (exception) {
        next(exception);
    }
};


       

    // forgetPassword = (req, res, next) => {
    //     res.json({
    //         data:"Forget password request",
    //         message: "Forgot password",
    //         status: "success"
    //     })
    // }

    // resetPassword = (req, res, next) => {
    //     res.json({
    //         data:"Reset password request",
    //         message: "Reset password sucessful",
    //         status: "success"
    //     })
       
    // }

    // getLogout = (req, res, next) =>{
    //     res.json({
    //         data:"Logout request",
    //         message: "Logout sucessful",
    //         status: "success"
    //     })
    // }

    // updateProfile = (req, res, next) =>{
    //     res.json({
    //         data: "Profile Update Request",
    //         message: "Profile Updated",
    //         status: "Success"
    //     })
    // }

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