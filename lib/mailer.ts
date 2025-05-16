// mailer.js
import nodemailer, { TransportOptions } from 'nodemailer';
import { google } from 'googleapis';
import dotenv from 'dotenv';
dotenv.config();

const { GMAIL_OAUTH_CLIENT_ID, GMAIL_OAUTH_CLIENT_SECRET, GMAIL_OAUTH_REFRESH_TOKEN, SMTP_FROM } = process.env;

// 1. Set up OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
    GMAIL_OAUTH_CLIENT_ID,
    GMAIL_OAUTH_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground' // redirect URI you used
);
oAuth2Client.setCredentials({ refresh_token: GMAIL_OAUTH_REFRESH_TOKEN });

// 2. Create transporter
async function createTransporter() {
    const accessToken = await oAuth2Client.getAccessToken(); // automatically uses refresh token
    return nodemailer.createTransport({
        pool: true,
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: SMTP_FROM,
            clientId: GMAIL_OAUTH_CLIENT_ID,
            clientSecret: GMAIL_OAUTH_CLIENT_SECRET,
            refreshToken: GMAIL_OAUTH_REFRESH_TOKEN,
            accessToken: accessToken.token,
        },
    } as TransportOptions);
}

// 3. Send mail
export async function sendMail({ to, subject, text, html }: { to: string; subject: string; text?: string; html?: string }) {
    const transporter = await createTransporter();
    const result = await transporter.sendMail({
        from: SMTP_FROM,
        to,
        subject,
        text,
        html,
    });
    return result;
}
