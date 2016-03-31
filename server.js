// set up ======================================================================
var express        = require("express");
var app            = express();
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var morgan         = require("morgan");
var mongoose       = require('mongoose');
var port  	       = process.env.PORT || 8080;
var database       = require('./config/database');
var UserModel      = require('./app/models/userModel')(app, mongoose);
var UserCtrl       = require('./app/controllers/usersController');

// configuration ===============================================================
mongoose.connect(database.url);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    'use strict';
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

// routes ======================================================================
var router = express.Router();

router.get('/', function (req, res) {
    'use strict';
    res.send("Welcome");
});

app.use('/', router);

var users = express.Router();

users.route('/users')
    .get(UserCtrl.getAllUsers)
    .post(UserCtrl.addUser);

users.route('/users/:idUser')
    .get(UserCtrl.getUser)
    .put(UserCtrl.updateUser)
    .delete(UserCtrl.deleteUser);

app.use('/my-api', users);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
