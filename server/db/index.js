const mongoose = require('mongoose');

const URI =
  'mongodb+srv://eucrieiumaconta:acme00QW@cluster0.89non.mongodb.net/rc-shop-db?retryWrites=true&w=majority';

mongoose.connect(URI, { useNewUrlParser: true });

module.exports = mongoose.connection;
