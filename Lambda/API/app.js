const Sequelize = require('sequelize');

// Database
const sequelize = new Sequelize(readKey('database.key'));

// Model
class Article extends Sequelize.Model {}
Article.init({
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

// API
var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();
module.exports = api;

api.get('/get', function () {
  
  articles = Article.findAll();
	console.log('articles');
	  return articles;
});

api.post('/post', function (request) {

		const title = request.body.title;
		const article = request.body.article;

		Article
  			.create({ title: title, article: article })
  			.then(function(article) {
    		console.log(article.get('title')); 
    		console.log(article.get('article')); 
 		})
		.then(() => api.sendStatus(200));

	});