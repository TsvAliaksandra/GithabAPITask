const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();

app.use(express.static(path.join(__dirname, './public/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routers/index')(app);

const port = process.env.PORT || 3030;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () =>
  console.log(`Server is listening: http://localhost:${app.get('port')}`));
