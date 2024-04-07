var mongoose = require('mongoose');
mongoose.Promise = global.Promise;	

mongoose.connect('mongodb://localhost:27017/to-do-list-db')
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((error) => console.log(error));

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));