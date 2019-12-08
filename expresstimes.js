//const axios = require('axios');
const Sequelize = require('sequelize');

// Database
const sequelize = new Sequelize(readKey('database.key'));

// Model
class Article extends Sequelize.Model {}
Article.init({
  id: {
	  primaryKey: true,
	  type:Sequelize.INTEGER
	},
  title: Sequelize.TEXT,
  text: Sequelize.TEXT
}, { sequelize, modelName: 'article' });

function readKey(file) {
	var fs = require('fs');
	try {
		var string = fs.readFileSync(file, 'utf8');
		return string;
	} catch(e) {
	console.log('Error:', e.stack);
	}
}

// To run locally, comment the exports.handler:
//exports.handler = function(event, context) {
	query = '';
	Article.findAll().then(function(article){

		article.forEach(function(article) {

			console.log(article.title);
            console.log(article.text);

		});

	}).catch(function(error){
		console.log(error);
	});

//};