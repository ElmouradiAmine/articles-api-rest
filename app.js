//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const url = "mongodb://localhost:27017/wikiDB";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({
  extended: false
}));

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model('Article', articleSchema);

app.route('/articles')

.get(function(req, res) {
  Article.find({}, function(err, foundArticles) {
    if (err) {
      res.send(err);
    }
    res.send(foundArticles);
  });
})

.post(function(req, res) {

  const article = new Article({
    title: req.body.title,
    content: req.body.content,
  });

  article.save(function(err) {
    if (err) {
      res.send({
        error: true,
        message: err,
      });
    } else {
      res.send(article);
    }
  });

})

.delete(function(req, res) {
  Article.deleteMany({}, function(err) {
    if (err) {
      res.send({
        error: true,
        message: err,
      });
    } else {
      res.send({
        error: false,
        message: 'All articles have been deleted',
      });
    }
  });
});

app.route('/articles/:articleId')

.get(function(req,res){
  const articleId = req.params.articleId;

  Article.findOne({_id: articleId}, function(err, foundArticle){
    if( foundArticle){
      res.send(foundArticle);
    } else {
      res.send({
        error: true,
        message: 'Article not found.',
      });
    }


  });
})

.put(function(req, res){
  const articleId = req.params.articleId;
  const title = req.body.title;
  const content = req.body.content;

  Article.update({_id: articleId},{title: title, content: content}, {overwrite: true},function(err){
    if(err){
      res.send({
        error: true,
        message: error,
      });
    } else {
      res.send({
        error: false,
        message: 'Article successfuly updated.',
      });
    }
  });
})

.patch(function(req,res){
  const articleId = req.params.articleId;


  Article.update({_id: articleId}, {$set: req.body},function(err){
    if(err){
      res.send({
        error: true,
        message: error,
      });
    } else {
      res.send({
        error: false,
        message: 'Article successfuly updated.',
      });
    }
  });
})

.delete(function(req, res){
  const articleId = req.params.articleId;

  Article.deleteOne({_id: articleId}, function(err){
    if (err){
      res.send({
        error: true,
        message: error,
      });
    } else {
      res.send({
        error: false,
        message: "Article successfuly deleted.",
      });
    }
  });
});



const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server listening into port ' + port);
});
