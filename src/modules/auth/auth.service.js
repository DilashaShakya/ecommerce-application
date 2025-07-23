const bcrypt = require('bcryptjs');
const cloudinaryService = require('../../services/cloudinary.service');
const { Status } = require('../../config/constants');
const randomStringGenerator = require('../../utilities/helpers');

class AuthService{
    async transformToRegisteredUser(req){
        try{
            const data = req.body;
            data.password = bcrypt.hashSync(data.password, 12)
            if(req.file){
                data.image = await cloudinaryService.fileUpload(req.file.path, '/users')
            }

                //activation process
            data.status = Status.INACTIVE;
            data.activationToken = randomStringGenerator();
            data.expiryTime = new Date(Date.now() + 86400000)

            return data;
        }catch(exception){
            throw exception;
        }
    }
}

const aythSvc = new AuthService()
module.exports = AuthService;