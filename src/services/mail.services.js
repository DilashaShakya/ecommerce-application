const nodemailer = require("nodemailer");
const { SMTPConfig } = require("../config/config");

class MailService{
    #transport;
    constructor(){
        try{
            this.#transport = nodemailer.createTransport({
                host: SMTPConfig.host,
                port: SMTPConfig.port,
                service: "gmail",
                auth: {
                    user: SMTPConfig.user,
                    pass: SMTPConfig.password
                }

            })
            console.log('****SMTP Server Connected****')
        }catch(exception){
            throw{
                code: 422,
                message: "SMTP Connection Failed",
                status: "SMTP_CONNECTION_ERR"
            }
        }
    }

    async sendEmail({to, sub, body, attachments = null, cc=null, bcc=null}){
        try{
            let messageConfig = {
                to:to,
                subject:sub,
                from:SMTPConfig.from,
                html: body,
                // cc:"",
                // bcc:"",
                // attachments:""
            }
            if (cc){
                messageConfig['cc'] = cc
            }

            if (bcc){
                messageConfig['bcc'] = bcc
            }

            if (attachments){
                messageConfig['attachments'] = attachments
            }
            this.#transport.sendMail(messageConfig)
        }catch(exception){
            //console.log(exception) for debugging
            throw{
                code: 500,
                message:"Error sending email.." + exception.message,
                status: "EMAIL_SEND_ERR"
            }
        }
    }
}

module.exports = MailService;