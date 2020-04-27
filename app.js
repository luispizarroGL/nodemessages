const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;
const app = express();
const adminRoutes = require('./routes/admin');
const PORT= process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);

mongoConnect(client => {
  app.listen(PORT);
})
