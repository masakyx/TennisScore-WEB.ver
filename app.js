 var express = require('express'),
    app = express(),
    logger = require('morgan'),
    json = require('body-parser'),
    post = require('./routes/post'),
    methodoverride = require('method-override');


app.set('views',__dirname + '/views');
app.set('view engine','ejs');

//middleware
app.use(json());
app.use(methodoverride());
app.use(logger('dev'));

//routing

app.get('/',post.index);
app.get('/posts/:id([0-9]+)',post.show);
app.get('/posts/new',post.new);
app.post('/posts/create',post.create);
app.get('/posts/:id([0-9]+)/edit',post.edit);
app.put('/posts/:id',post.update);
app.delete('/posts/:id',post.destroy);   



app.listen(3000);
console.log("server starting");     
