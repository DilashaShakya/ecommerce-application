class AuthController{
    register = ( req, res, next) =>{
        res.json({
            data: "New Register request",
            message: "New User Registered",
            status: "Success",
        })
    }

    getActivation = (req, res, next) => {
        res.json({
            data: req.params.token+ "Get actavation Id",
            message: "Actavation token Id",
            status: "Success"
        })
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