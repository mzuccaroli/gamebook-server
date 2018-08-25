/**
 * Chapter.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        number: {
            type: 'number',
            required: true
        },
        title: 'string',
        text: {
            type: 'string',
            required: true
        },
        image: {
            type: 'string',
            isURL: true
        },
        book: {
            model: 'gamebook',
            required: true
        }
    }

};

