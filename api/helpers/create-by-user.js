const blueprintCreate = require("sails/lib/hooks/blueprints/actions/create");

module.exports = {


    friendlyName: 'Create by user',


    description: 'add the createdBy field to the Create blueprint',


    inputs: {
        req: { type: 'ref'},
        res: { type: 'ref'},
    },

    fn: async function (inputs, exits) {
        if (inputs.req.user && inputs.req.user.id) {
            inputs.req.body.createdBy = inputs.req.user.id;
        }
        return exits.success(blueprintCreate(inputs.req, inputs.res));
    }


};

