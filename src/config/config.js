require("dotenv").config({override: true});

const MongodbConfig={
    url: process.env.MONGODB_URL,
    name: process.env.MONGODB_NAME
}

const CloudConfig = {
    cloud_name :process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET,

}

const SMTPConfig = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    from: process.env.SMTP_FROM_ADDRESS
  
}

const AppConfig={
    frontendUrl: process.env.HOME_URL ,

}

module.exports = {
    MongodbConfig,CloudConfig, SMTPConfig, AppConfig
}

