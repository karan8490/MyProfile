'use strict';
const nodemailer = require('nodemailer');
var config = require('configfilepath');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'karan1.verma@one97.net',
        pass: 'ckkgcaffgzagyfeh'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Client-Mail" <karansoft8@gmail.com>', // sender address
    to: 'karansoft8@gmail.com', // list of receivers
    subject: 'CHK', // Subject line
    text: 'Hello world K', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
