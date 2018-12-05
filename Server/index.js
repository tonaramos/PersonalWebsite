require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_KEY);


// const nodemailer = require('nodemailer');
// const sendgridTransport = require('nodemailer-sendgrid-transport');


const app = express();

app.use(bodyParser.json());

// const transporter = nodemailer.createTransport(sendgridTransport({
//   auth: {
//     api_key: process.env.SENDGRID_KEY,
//   },
// }));

app.use(express.static(path.join(__dirname, '../public')));

app.post('/sendMessage', (req, res, next) => {
  console.log('The Request.Body at the Post handler-> ', req.body);
  const msg = {
    to: 'tona@tonatiuhramos.com',
    from: req.body.email,
    subject: `Message from your website - ${req.body.name}!`,
    text: req.body.message,
    html: `<p>${req.body.message}</p>`,
  };
  sgMail.send(msg)
    .then(() => {
      res.status(200).json({
        message: 'POST request -  a new message!',
        body: req.body,
      });
    }).catch((err) => {
      console.log(err);
    });
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port >>> ${port}`));
