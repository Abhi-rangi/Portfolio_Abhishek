// test-token.js
import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

const oAuth2 = new google.auth.OAuth2(
  process.env.GMAIL_OAUTH_CLIENT_ID,
  process.env.GMAIL_OAUTH_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);
oAuth2.setCredentials({ refresh_token: process.env.GMAIL_OAUTH_REFRESH_TOKEN });

async function test() {
  try {
    const at = await oAuth2.getAccessToken();
    console.log("SUCCESS, got access token:", at.token?.slice(0, 10) + "…");
  } catch (e) {
    console.error("STILL FAILING:", e);
  }
}
test();
