const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('61926b12c13ee221dd680b67')
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect('mongodb+srv://Rostyslav:node-eng@cluster0.jr5ez.mongodb.net/shop?retryWrites=true&w=majority')
  .then((result) => {
    User.findOne().then((findedUser) => {
      if (!findedUser) {
        const user = new User({
          name: 'Rostyslav',
          email: 'ros@test.com',
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
