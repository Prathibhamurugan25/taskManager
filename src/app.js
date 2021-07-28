require("./db/mongoose");
const path = require("path");
const hbs = require("hbs"); //handlebar
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes');

// Define Path for express config
const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

// setup static directory to serve
app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);

hbs.registerPartials(partialPath);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//hbs(handlebar)routes---
//user---
app.get('/users', function (req, res) {
    res.render('users');
});

app.get('/users/add', function (req, res) {
    res.render('addUser');
});

app.get('/', function (req, res) {
    res.render('login');
});

app.get('/register', function (req, res) {
    res.render('register');
});

//task----
app.get('/tasks', function (req, res) {
    res.render('task');
});

app.get('/tasks/add', function (req, res) {
    res.render('addTask');
});

routes.apiRoutes(app);

app.listen(8000, function () {
    console.log('The project is running in port 8000');
});


