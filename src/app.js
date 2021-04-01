const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');
require("../src/db/conn");
require('../src//models/register')


const port = 3000


app.use(express.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, '../templates/views')));
app.use('/', express.static(path.join(__dirname, '../templates/partials')));


//Setting hbs
app.set('view engine', 'hbs');
app.set('views', 'templates/views');
hbs.registerPartials('templates/partials');







//Routes
app.get('/', (req, res) => res.render('index'));
app.get('/dashboard', (req, res) => res.render('index'));
app.get('/stylist', (req, res) => res.render('stylish'));
app.get('/clients', (req, res) => res.render('clients'));
app.get('/posts', (req, res) => res.render('posts'));
app.get('/customersupport', (req, res) => res.render('customersupport'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/setting', (req, res) => res.render('setting'));
app.get('/forgot-password', (req, res) => res.render('forgotpassword'));
app.get('/register', (req, res) => res.render('register'));
app.get('/access', (req, res) => res.render('access'));
app.get('/payment', (req, res) => res.render('payment'));
app.get('/appointments', (req, res) => res.render('appointments'));
app.get('/pastappointments', (req, res) => res.render('oldappointments'));
app.get('/approvals', (req, res) => res.render('approvals'));
app.get('/paymentrecipt', (req, res) => res.render('paymentrecipt'));
app.get('/blockcontacts', (req, res) => res.render('blockcontacts'));
app.get('/adminapproved', (req, res) => res.render('adminapproved'));


//Authentications Routes
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));






app.listen(port, () => console.log(`Example app listening on port port!`))