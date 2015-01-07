 var express = require('express'),
    app = express(),
    logger = require('morgan'),
    json = require('body-parser'),
    methodoverride = require('method-override');


app.set('views',__dirname + '/views');
app.set('view engine','ejs');

//middleware
app.use(json());
app.use(methodoverride());
app.use(logger('dev'));

//routing





app.listen(3000);
console.log("server starting");     
