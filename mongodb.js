var mongoose = require('mongoose')
mongoose.Promise= require('bluebird')
mongoose.connect('mongodb://localhost:27017/todosdb')

var schema1 = new mongoose.Schema({
	 admin : String,
     text : String,
     completed : Boolean 
});

var schema2 = new mongoose.Schema({
	password : String,
	email: String
});

var Todos = mongoose.model('Todos', schema1);
var Accounts = mongoose.model('Accounts', schema2);

module.exports = {
	Todos,
	Accounts
}
