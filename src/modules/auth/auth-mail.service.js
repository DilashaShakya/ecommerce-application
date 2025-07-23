const MailService = require("../../services/mail.services");

class AuthMailService extends MailService {
    async sendActivationEmail(user) {
        try {
            return await this.sendEmail({
                to: user.email,
                sub: "Activate your account!!",
                body: `
<div style="background-color:#1a3c36;color:#e0f7fa;font-family:'Segoe UI',Arial,sans-serif;padding:40px 24px;border-radius:12px;max-width:600px;margin:auto;box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
    <div style="font-size:2em;font-weight:bold;color:#26a69a;margin-bottom:20px;text-align:center;">
        Welcome to BinCommerce!
    </div>
    
    <div style="font-size:1.1em;margin-bottom:24px;">
        Dear ${user.name},<br><br>
        Thank you for registering with us! We're excited to have you join the vibrant BinCommerce community.<br><br>
        Your journey with us begins here, and we're committed to supporting your growth every step of the way.<br>
        By activating your account, you'll gain access to exclusive features, personalized recommendations, and a network of passionate individuals.<br><br>
        We believe in empowering our users to achieve their goals, and your presence strengthens our platform.<br><br>
        
        <span style="font-weight:bold;">Please click the button below to activate your account and start exploring:</span>
        <br><br>
        
        <a href="http://localhost:5173/activate/${user.activationToken}" style="display:inline-block;background-color:#26a69a;color:#fff;padding:16px 36px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:1.1em;margin-bottom:24px;text-align:center;transition:background 0.3s ease;">
            Activate Your Account
        </a>
        
        <br><br>
        <span style="font-style:italic;">If the button above doesn't work, copy and paste the link below into your browser:</span><br>
        <span style="color:#26a69a;font-weight:bold;">http://localhost:5173/activate/${user.activationToken}</span>
    </div>
    
    <div style="font-size:0.95em;color:#b2dfdb;margin-top:32px;text-align:center;">
        Thank you once again for choosing BinCommerce.<br>
        We look forward to seeing you thrive on our platform!<br>
        If you have any questions or need assistance, our support team is always here to help.<br><br>
        
        Warm regards,<br>
        <strong>System Admin</strong><br>
        <a href="mailto:noreply@bincommerce.com" style="color:#b2dfdb;text-decoration:none;">noreply@bincommerce.com</a>
    </div>
</div>

`
            })
        } catch (exception) {
            throw exception
        }
    }

    async sendWelcomeEmail(user){
        try{

        }catch(exception){
            throw exception
        }
    }
}

const authMailSvc = new AuthMailService()
module.exports = authMailSvc;
