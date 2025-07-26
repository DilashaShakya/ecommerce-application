const UserModel = require("./user.model");

class UserService{
    async createData(data){
        try{
            const userObj = new UserModel(data);
            return await userObj.save();
        }catch(exception){
            throw exception
        }
    }

    async getUserByActivationToken(token){
        try{
            const data = await UserModel.findOne({
                activationToken: token,
            })
            return data;
        }catch(exception){
            throw exception
        }
    }

    async getSingleRowByFilter(filter){
        try{
            const data = await UserModel.findOne(filter);
            return data;        
        }catch(exception){
            throw exception
        }   
    }

    async updateSingleRowByFilter(filter, updateData) {
    try {
        const data = await UserModel.findOneAndUpdate(filter, { $set: updateData }, { new: true });
        return data;
    } catch (exception) {
        throw exception;
    }
}

}

const userSvc = new UserService()
module.exports = userSvc;