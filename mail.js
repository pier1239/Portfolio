
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
app.use(express.static(path.join(__dirname, '/views')))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')




app.get('/',function(req,res){
res.render('index');
});


app.post('/',function(req,res){

//require('env2')('sendgrid.env');    // loads all entries into process.env

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDMAIL_KEY);
const msg = {
to: 'piertest1239@gmail.com',
from: "per1239@hotmail.com",
subject:  "test",
text: 'ces facil a prendre',
html:   "test" + ' ' + "test",
};
sgMail.send(msg);

//res.redirect('/');
    

  



});



app.listen(process.env.PORT || 5000);

