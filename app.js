const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;
const app = express();
const adminRoutes = require('./routes/admin');


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);

mongoConnect(client => {
  app.listen(80);
})
