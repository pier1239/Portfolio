
//const express = require('express')
//const path = require('path')
//const PORT = process.env.PORT || 5000

//express()
  //.use(express.static(path.join(__dirname, '/views')))
  //.set('views', path.join(__dirname, '/views'))
  //.set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('index'))
 
  //.listen(PORT, () => console.log(`Listening on ${ PORT }`))

var express = require("express");
const ejs = require("ejs")
var app = express();
var path    = require("path");
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, '/views')))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/',function(req,res){
res.render('index');
});


app.post('/',function(req,res){

require('env2')('sendgrid.env');    // loads all entries into process.env

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDMAIL_KEY);
const msg = {
to: 'piertest1239@gmail.com',
from: 'piertest1239@gmail.com',
//from: req.body.email,
subject:  req.body.subject,
text: 'email portfolio',
html:  req.body.email + ' ' + req.body.name + ' ' + req.body.message,
//html:  req.body.email + ' ' + req.body.name + ' ' + req.body.message,
};
sgMail.send(msg);

res.redirect('/');
    

  



});



app.listen(process.env.PORT || 5000);

