const authRouter =  require('express').Router()
const uploader = require('../../middlewares/filehandling.middleware');
const validateData = require('../../middlewares/validator.middleware');
const authCtrl = require("./auth.controller")

const Joi = require('joi');


const loginRules = Joi.object({ //custom middleware
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(25).required()
});

const RegisterDTO = Joi.object({
    name: Joi.string().min(2).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(25).required(),
    confirmPassword : Joi.ref('password'),
    role: Joi.string().allow('customer', 'seller').default('customer'),
    image: Joi.string().allow(null, "").optional().default(null)
})
//none if file is not required. 
// authRouter.post("/register", uploader('/', 'doc').single('image'), validateData(RegisterDTO), authCtrl.register);
authRouter.post("/register", uploader().single('image'), validateData(RegisterDTO), authCtrl.register);


authRouter.route("/activate/:token")
    .get(authCtrl.activateNewRegisteredUser);
    
authRouter.post("/login", validateData(loginRules),authCtrl.login);

authRouter.route("/forget-request")
    .post(authCtrl.forgetPassword);

authRouter.route("/reset-password")
    .patch(authCtrl.resetPassword);

authRouter.route("/logout")
    .get(authCtrl.getLogout);

authRouter.route("/me")
    .get(authCtrl.loggedInUserProfile)
    .put(authCtrl.updateProfile);

authRouter.get("/resend-token/:token", authCtrl.resendActivationToken);

module.exports = authRouter;