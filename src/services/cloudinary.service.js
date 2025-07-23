const { CloudConfig } = require("../config/config");
require('dotenv').config();


const fs = require("fs");

const cloudinary = require("cloudinary").v2;
class CloudinaryService{
    constructor(){
        cloudinary.config({
            cloud_name : CloudConfig.cloud_name,
            api_key : CloudConfig.api_key,
            api_secret: CloudConfig.api_secret
        })
    }

    //optimization
    getOptimizedUrl(public_id, thumb = '1200x1200'){
        const [width, height] = thumb.split('x')
        let transformationObj = [
            {quality: 'auto', fetch_format:'auto'},
            {dpr:'auto', responsive: true, width: width, crop: 'scale', aspect_ratio: "1.0"},
        ]
        const imageUrl = cloudinary.url(public_id, {
            transformation:transformationObj
        });
        return imageUrl

    }

    async fileUpload(filePath, dir='/'){
        try{
            const {public_id, secure_url} = await cloudinary.uploader.upload(filePath,{
                folder:"/api-47"+dir,
                unique_filename: true
            })
            const thumbUrl = this.getOptimizedUrl(public_id);

            //delete from server
            if (fs.existsSync(filePath)){
                fs.unlinkSync(filePath);
            }
            return{
                id: public_id,
                publicUrl: secure_url,
                optimizedUrl: thumbUrl, 
            };
        }
        catch(exception){
            console.log(exception);
            throw {code:422, message: "File Upload Error", status: "CLOUDINARY_FILE_UPLOAD_ERR"}
        }

    }
}

module.exports = new CloudinaryService();