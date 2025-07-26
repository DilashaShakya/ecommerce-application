const bcrypt = require('bcryptjs');
const cloudinaryService = require('../../services/cloudinary.service');
const { Status } = require('../../config/constants');
const randomStringGenerator = require('../../utilities/helpers');
const AuthModel = require('./auth.model');
const {AppConfig} = require('../../config/config');
const jwt = require('jsonwebtoken');
const userSvc = require('../users/user.service');

class AuthService {
    async transformToRegisteredUser(req) {
        try {
            const data = { ...req.body };

            // Hash password
            if (data.password) {
                data.password = bcrypt.hashSync(data.password, 12);
            }

            // Upload image if present
            if (req.file) {
                const uploaded = await cloudinaryService.fileUpload(req.file.path, '/users');
                data.image = uploaded;
            }

            // Activation fields
            data.status = Status.INACTIVE;
            data.activationToken = randomStringGenerator();
            data.expiryTime = new Date(Date.now() + 86400000); // 24 hours from now

            return data;
        } catch (exception) {
            throw exception;
        }
    }

    async storeSession(userDetails){
        try{
            const accessToken = jwt.sign({sub: userDetails._id, typ:"Bearer"}, AppConfig.jwtSecret, {
                expiresIn:"1h"
            });
            const refreshToken = jwt.sign({sub: userDetails._id, typ: "Refresh"}, AppConfig.jwtSecret, {
                expiresIn:"24h"
            });
            //session store logic here
            const payload = {
                user: userDetails._id,
                tokens:{
                    accessToken: accessToken,
                    refreshToken: refreshToken
                },
                device: "web"
            }

            const session = new AuthModel(payload);
            await session.save();
            return payload;
        }catch(exception){
            throw exception
        }
    }
}
const authSvc = new AuthService();
module.exports = authSvc;