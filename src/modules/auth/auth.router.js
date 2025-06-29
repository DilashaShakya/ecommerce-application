const authRouter =  require('express').Router()
const authCtrl = require("./auth.controller")


authRouter.route("/register")
    .post(authCtrl.register);

authRouter.route("/activate/:token")
    .get(authCtrl.getActivation);
    
authRouter.route("/login")
    .post(authCtrl.login);

authRouter.route("/forget-request")
    .post(authCtrl.forgetPassword);

authRouter.route("/reset-password")
    .patch(authCtrl.resetPassword);

authRouter.route("/logout")
    .get(authCtrl.getLogout);

authRouter.route("/me")
    .get(authCtrl.loggedInUserProfile)
    .put(authCtrl.updateProfile);

module.exports = authRouter;