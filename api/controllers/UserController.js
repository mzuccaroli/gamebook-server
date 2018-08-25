/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

module.exports = {

    /**
     * authenticate user to our api using either email and password
     * POST /login
     * @param req
     * @param res
     */
    login: function (req, res) {

        /**
         * this is param checking if they are provided
         */
        if (!_.has(req.body, 'email') || !_.has(req.body, 'password')) {
            return res.serverError("No field should be empty.");
        }

        /**
         * check if the username matches any email or phoneNumber
         */
        User.findOne({
            email: req.body.email
        }).exec(function callback(err, user) {
            if (err) return res.serverError(err);

            if (!user) return res.serverError("User not found, please sign up.");


            //check password
            bcrypt.compare(req.body.password, user.password, function (error, matched) {
                if (error) return res.serverError(error);

                if (!matched) return res.serverError("Invalid password.");

                var token = jwt.sign(user, sails.config.custom.jwtSecret, {expiresIn: '10m'});

                res.ok(token);
            });

        });
    },

    /**
     * refresh the token is about to expire
     * GET /token
     * @param req
     * @param res
     */
    refreshToken: function (req, res) {
        User.findOne(req.user.id).exec(function callback(error, user) {
            if (error) return res.serverError(error);
            if (!user) return res.serverError("User not found");

            var token = jwt.sign(user, sails.config.custom.jwtSecret , {expiresIn: '10m'});
            res.ok(token);
        });
    }

};

