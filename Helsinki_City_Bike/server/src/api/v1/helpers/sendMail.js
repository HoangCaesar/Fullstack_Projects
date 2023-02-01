const { google } = require('googleapis');
const nodemailer = require('nodemailer');
require('dotenv').config();

// .env
// eslint-disable-next-line no-undef
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, OAUTH_REFRESH_TOKEN, ADMIN_EMAIL } = process.env;

// config oAuth
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: OAUTH_REFRESH_TOKEN });

// ========================================== SEND EMAIL REGISTER ===============================================
const sendMail = async (email, username, subject, link) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: ADMIN_EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: OAUTH_REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"Helsinki City Bike 👻" ${ADMIN_EMAIL}`, // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            text: 'Hello world?', // plain text body
            generateTextFromHTML: true,
            html: `
            <div style="position: relative; height: 100vh; width: 100%;  background-color: #efefef">
                <div style="padding: 36px 0;width: 100%; text-align: center">
                    <a href="#" style=" font-size: 24px; font-weight: 500; color: #030303; letter-spacing: 1px; text-decoration: none">Prime</a>
                </div>
                    <div
                        style="position: absolute; margin: auto; padding: 25px 50px;  width: 65%;  height: 58%; background-color: white; border-radius: 5px;">
                        <h4 style="font-size: 20px; font-weight: 400; color: #030303; letter-spacing: 0.75px">Hei ${username},</h4>
                        <p style="font-size: 16px; color: #737F8D;">Thanks for registering for an account on Prime! Before we get
                            started, we just need to confirm that this is
                            you. Click below to verify your email address:</p>
                        <div style="margin: 50px; text-align: center;">
                            <a href="${link}"
                            style="padding: 15px; font-size: 16px; color: #030303; background-color: #eaff96; text-decoration: none; border-radius: 5px;">Verify
                            Email.</a>
                        </div>  
                    <div style="margin: 0 0 30px; ; content: ' ' ; display: block; position: absolute; border-bottom: 1px solid lightgray; width: 100%;"></div>

                    <div>
                        <p style="margin: 0; padding: 0; color: #747F8D">Need help? <a href="#">Contact our support team</a> or hit us up on Instagram <a href="#">@prime</a>.
                        </p>
                        <p style="margin: 0; padding: 0; color: #747F8D">Want to give us feedback? Let us know what you think on our <a href="#">feedback site</a>.</p>
                    </div>      
                </div>
                <div style="margin: 20px; text-align: center">
                    <p style="margin: 5px; padding: 0; font-size: 12px; color: #99AAB5">Sent by Prime - <a href="#">check our blog</a> - <a href="#">@prime</a>.
                    </p>
                    <p style="margin: 5px; padding: 0; font-size: 12px; color: #99AAB5">999 Olympia Street, 65200 Vaasa, Finland</p>
                </div>
            </div>
            `,
        });

        console.log(info);
    } catch (error) {
        throw new Error(error);
    }
};

sendMail();
