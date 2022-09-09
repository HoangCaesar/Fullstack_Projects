const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;
dotenv.config();

const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET, // Client Secret
    'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
});
const accessToken = oauth2Client.getAccessToken();

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            // host: process.env.HOST,
            service: process.env.SERVICE,
            // port: 465,
            // secure: true,
            auth: {
                type: 'OAuth2',
                user: process.env.USER,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: process.env.ACCESS_TOKEN,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            // text: text,
            generateTextFromHTML: true,
            html: `<h1>Please verify your email address<h1/>
            Hi,
            <br/>
            Please verify your email by clicking the link below <a href="${text}">here.</a>
            <br/>
            Happy prime!
            `,
        });
        console.log('Email sent sucessfully');
    } catch (err) {
        console.log(err);
        console.log('Email not send');
    }
};

module.exports = sendEmail;
