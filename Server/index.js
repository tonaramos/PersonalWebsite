const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

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
  transporter.sendMail({
    to: 'tona@tonatiuhramos.com',
    from: req.body.email,
    message: req.body.message,
    subject: `Message from your website - ${req.body.name}!`,
  });
  res.status(200).json({
    message: 'POST request - Tempting to send a new message!',
    body: req.body,
  });
});
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
//   console.log('Hellow from the server');
// });

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port >>> ${port}`));
