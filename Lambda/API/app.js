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
  article: Sequelize.TEXT
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

var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();

module.exports = api;

api.get('/get', function () {
  
console.log('logging');
  articles = Article.findAll();
  //articles = articles.reverse();
	console.log('articles');
	  return articles;

  
});

api.post('/post', function (request) {
  
	console.log('logging');
	  //articles = articles.reverse();
		console.log(request.body);
		return request.body;
	
	  
	});