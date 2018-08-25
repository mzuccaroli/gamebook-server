/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

var bcrypt = require("bcryptjs");

module.exports = {

    attributes: {
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            unique: true,
            maxLength: 200,
            isEmail: true,
            required: true
        },
        password: {
            type: 'string',
            required: true
        },
        roles: {
            type: 'json',
            columnType: 'array',
            defaultsTo: ["DEFAULT_USER"]
        },

    },
    customToJSON: function () {
        return _.omit(this, ['password', 'roles'])
    },

    beforeCreate: function (values, cb) {

        // Hash password
        bcrypt.hash(values.password, 10, function (err, hash) {
            if (err) return cb(err);
            values.password = hash;
            cb();
        });
    }

};

