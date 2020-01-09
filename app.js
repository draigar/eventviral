const http = require('http');
const Koa = require('koa');
const path = require('path');

const app = new Koa();

// db connection
require('./app/database/connection');
require('./app/routes')(app);
app.listen(3000);