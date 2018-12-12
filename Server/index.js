require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_KEY);

const app = express();

app.use(bodyParser.json());
// static file serve
app.use(express.static(path.join(__dirname, '../public')));

app.post('/sendMessage', (req, res, next) => {
  const msg = {
    to: 'tona@tonatiuhramos.com',
    from: req.body.email,
    subject: `TonatiuhRamos.com - Message from ${req.body.name}!`,
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
      res.status(400).json({
        message: 'Your message could not be send. Review your entries or try later.',
        reason: err.response.body.errors[0].message,
      });
    });
});

app.use((req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port >>> ${port}`));
