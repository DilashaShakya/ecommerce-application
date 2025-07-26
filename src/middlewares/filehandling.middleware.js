const multer = require("multer")
const fs = require ("fs")
const uploader = ( dir = "/", type = "image") => {
    const myStorage = multer.diskStorage({
        destination: (req, file, cb)=>{
            const path = "./public/uploads"+dir 
            if (!fs.existsSync(path)){
                fs.mkdirSync(path, {recursive:true})
            }
            cb(null, path)
        },
        filename: (req, file, cb)=>{
            const fileName = Date.now()+"-"+file.originalname
            cb(null, fileName)
        }
    })

    let allowedExts = ['jpg', 'jpeg', 'png', 'svg', 'bmp', 'webp', 'gif'];
    let size = 3 * 1024 * 1024
    if (type === 'doc'){
        allowedExts = ['pdf', 'doc', 'docx', 'json', 'csv', 'odt']
        size = 5* 1024 * 1024
    }
    else if(type === 'audio'){
        allowedExts = ['mp3']
        size = 8 * 1024 * 1024
    }
    const fileFilter = (req, file, cb)=>{
        const ext = file.originalname.split(".").pop()
        if(allowedExts.includes(ext.toLowerCase())){
            cb(null, true)
        }else{
            cb({
                code: 422, 
                message:"File format not supported",
                status: "ERR_INVALID_FILE_FORMAT"
            })
        }


    }
    return multer({
        storage: myStorage,
        fileFilter: fileFilter,
        limits:{
            fileSize: size,
        }
    })

}

module.exports = uploader;
