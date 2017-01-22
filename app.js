/**
 * New node file
 */
'use strict'

var express = require('express'),
	posts = require('./mock/posts.json')

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname+ '/templates');

app.get('/',function(req, res){
	res.render('index');
});

app.get('/blog/:title?',function(req, res){
	var param = req.params.title;
	if(!param){
		res.send('This page is not defined');
	}else{
		var post = posts[param];
		res.render('index', {'post': post});
	}
	
});

app.listen(3000,function(){
	console.log("the frontend server server running on 3000");
});
