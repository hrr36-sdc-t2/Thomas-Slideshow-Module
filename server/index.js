const express = require('express');
const app = express();

const rooms = require('./rooms.js');

const port = process.env.PORT || 3001;

app.use('/rooms/:listingId/', express.static(__dirname + '/../client/dist'));
app.use('/favicon.ico', express.static(__dirname + '/../client/dist/favicon.ico'));

app.use('/rooms', rooms);

app.listen(port);
console.log('Listening on port', port);