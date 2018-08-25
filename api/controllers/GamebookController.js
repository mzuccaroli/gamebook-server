/**
 * GamebookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

    create: async function (req, res) {
        return await sails.helpers.createByUser(req, res);
    }
};

