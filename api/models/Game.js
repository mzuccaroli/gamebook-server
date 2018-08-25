/**
 * Game.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        title: {
            type: 'number',
            required: true
        },
        player: {
            model: 'user',
            required: true
        },
        book: {
            model: 'gamebook',
            required: true
        },
        progress: {
            collection: 'chapter'
        }
    }

};

