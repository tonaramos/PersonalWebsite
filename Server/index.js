const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
//   console.log('Hellow from the server');
// });

const port = 3100;
app.listen(port, () => console.log(`listening on port ${port}`));
