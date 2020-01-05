const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

const makeANiceEmail = text => `
  <div class="email" style="border: 1px solid black; padding: 20px; line-height: 2; font-family: sans-serif; font-size: 20px;">
    <h2>Hello there!</h2>
    <p>${text}</p>

    <p>KDD</p>
  </div>

`;

exports.transport = transport;
exports.makeANiceEmail = makeANiceEmail;
