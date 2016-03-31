var mongoose = require('mongoose');
var User = mongoose.model('User');

// Returns all users
exports.getAllUsers = function (req, res) {

    'use strict';

    User.find(function (err, users) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).jsonp(users);
    });
};

// Returns an user
exports.getUser = function (req, res) {

    'use strict';

    User.findById(req.params.idUser, function (err, user) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).jsonp(user);
    });
};

// Adds new user
exports.addUser = function (req, res) {

    'use strict';

    var user = new User({
        name     : req.body.name,
        email    : req.body.email,
        password : req.body.password
    });

    user.save(function (err, newUser) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).jsonp(newUser);
    });
};

// Updates an user
exports.updateUser = function (req, res) {

    'use strict';

    User.findById(req.params.idUser, function (err, user) {

        if (req.body.name) {
            user.name = req.body.name;
        }

        if (req.body.email) {
            user.email = req.body.email;
        }

        if (req.body.password) {
            user.password = req.body.password;
        }

        user.save(function (err) {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).jsonp(user);
        });
    });
};

// Delete an user
exports.deleteUser = function (req, res) {

    'use strict';

    User.findById(req.params.idUser, function (err, user) {
        user.remove(function (err) {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).jsonp();
        });
    });
};
