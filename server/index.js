const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

const rooms = require('./rooms.js');
const images = require('./images.js');

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/rooms/:listingId/', express.static(__dirname + '/../client/dist'));

app.use('/rooms', rooms);
app.use('/images', images);

app.listen(port);
console.log('Listening on port', port);