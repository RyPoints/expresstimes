//const axios = require('axios');
const express = require("express");
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

// Web Application
const PORT = 1234;
const app = express();

app.get("/articles", (req, res) => {
	var body = '';
	Article.findAll().then(function(article){
		article.forEach(function(article) {

			body += "<BR>" + article.title + "<BR><BR>" + article.text + "<BR><BR>";

			});
			res.send(body);
	});
	
  });

app.listen(1234, () => {
	console.log("Server is listening on port: 1234");
});




//};