const { AppConfig } = require("../../config/config");
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
            return await this.sendEmail({
                to: user.email,
                sub: "Welcome to BinCommerce!",
                body: `
<div style="background-color:#f5fafd;color:#263238;font-family:'Segoe UI',Arial,sans-serif;padding:36px 22px;border-radius:10px;max-width:600px;margin:auto;box-shadow:0 2px 8px rgba(38,166,154,0.08);">
    <div style="font-size:2em;font-weight:600;color:#26a69a;margin-bottom:18px;text-align:center;">
        Welcome, ${user.name}!
    </div>
    <div style="font-size:1.1em;margin-bottom:22px;line-height:1.7;">
        Thank you for joining <span style="color:#00897b;font-weight:500;">BinCommerce</span>!<br><br>
        We are thrilled to have you as a part of our growing community. Your registration marks the beginning of an exciting journey where you can connect, collaborate, and thrive.<br><br>
        At BinCommerce, we are dedicated to providing you with innovative tools and a supportive environment to help you achieve your business goals.<br>
        Our platform is designed to empower you with seamless commerce solutions, insightful analytics, and a network of passionate professionals.<br><br>
        We appreciate your trust in us and look forward to supporting your success every step of the way.
    </div>
    <div style="font-size:0.98em;color:#607d8b;margin-top:28px;text-align:center;">
        If you have any questions or need assistance, our support team is always ready to help.<br>
        <strong>Welcome aboard!</strong>
        <br><br>
        Best regards,<br>
        <span style="color:#26a69a;font-weight:500;">The BinCommerce Team</span><br>
        <a href="${AppConfig.frontendUrl}/login" style="color:#00897b;text-decoration:none;">support@bincommerce.com</a>
    </div>
</div>
`
            })
        }catch(exception){
            throw exception
            }
    }

    async sendResendActivationEmail(user) {
        try {
            return await this.sendEmail({
                to: user.email,
                sub: "Resend Activation Link - Activate Your BinCommerce Account",
                body: `
<div style="background-color:#fff3e0;color:#263238;font-family:'Segoe UI',Arial,sans-serif;padding:36px 22px;border-radius:10px;max-width:600px;margin:auto;box-shadow:0 2px 8px rgba(38,166,154,0.08);">
    <div style="font-size:2em;font-weight:600;color:#ef6c00;margin-bottom:18px;text-align:center;">
        Action Required: Activate Your Account
    </div>
    <div style="font-size:1.1em;margin-bottom:22px;line-height:1.7;">
        Hello ${user.name},<br><br>
        We noticed that your BinCommerce account has not been activated yet.<br>
        To enjoy all the features and benefits of our platform, please activate your account by clicking the button below.<br><br>
        <a href="${AppConfig.frontendUrl}/activate/${user.activationToken}" style="display:inline-block;background-color:#ef6c00;color:#fff;padding:14px 32px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:1.1em;margin-bottom:20px;text-align:center;transition:background 0.3s ease;">
            Activate My Account
        </a>
        <br><br>
        <span style="font-style:italic;">If the button above doesn't work, copy and paste this link into your browser:</span><br>
        <span style="color:#ef6c00;font-weight:bold;">http://localhost:5173/activate/${user.activationToken}</span>
    </div>
    <div style="font-size:0.98em;color:#607d8b;margin-top:28px;text-align:center;">
        If you have already activated your account, please ignore this email.<br>
        For any questions or support, feel free to contact us.<br><br>
        Best regards,<br>
        <span style="color:#ef6c00;font-weight:500;">The BinCommerce Team</span><br>
        <a href="mailto:support@bincommerce.com" style="color:#ef6c00;text-decoration:none;">support@bincommerce.com</a>
    </div>
</div>
`
            })
        } catch (exception) {
            throw exception
        }  
}
}

const authMailSvc = new AuthMailService()
module.exports = authMailSvc;
