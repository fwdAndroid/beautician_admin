const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');

require("../src/db/conn");
const User = require('../src//models/register')


const port = 3000


app.use(express.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, '../templates/views')));
app.use('/', express.static(path.join(__dirname, '../templates/partials')));


//Setting hbs
app.set('view engine', 'hbs');
app.set('views', 'templates/views');
hbs.registerPartials('templates/partials');







//First Opening Routes
app.get('/', (req, res) => res.render('login'));

//Normal ROutes
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
// app.get('/register', (req, res) => res.render('register'));




// //Registration Post
// app.post('/register', async(req, res) => {

//     try {
//         const password = req.body.password;
//         const confirmpassword = req.body.confirmpassword;
//         if (password === confirmpassword) {



//             const registerEmp = User({
//                 firstname: req.body.firstname,
//                 lastname: req.body.lastname,
//                 email: req.body.email,
//                 password: password,
//                 confirmpassword: confirmpassword

//             })

//             const registered = await registerEmp.save();
//             res.status(201).render('login');
//             console.log(registered);


//         } else {
//             res.send("Unmatched Passwrd");
//         }
//     } catch (err) {
//         res.status(400).send(err);
//         console.log(err);

//     }

// })


//login Post
app.post('/login', async(req, res) => {

    try {

        const email = req.body.email;
        const password = req.body.password;
        const useremail = await User.findOne({ email: email });

        if (useremail.password === password) {
            console.log(`${email} and password is ${password}`);
            res.render('index');
        }
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }

});





app.listen(port, () => console.log(`Example app listening on port port!`))