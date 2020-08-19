const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const errorController = require('./controller/error');
const mongoConnect = require('./utils/database').mongoConnect;
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const searchRoutes = require('./routes/search');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(searchRoutes);

app.use(errorController.get404);
mongoConnect(() => {
  app.listen(process.env.PORT || '3000');
})
