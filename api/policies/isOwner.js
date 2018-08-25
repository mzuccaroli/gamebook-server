module.exports = async function (req, res, proceed) {
    // First, check whether the request comes from a logged-in user.
    if (!req.user) {
        return res.forbidden("user must be authorized");
    }

    if (!req.user.roles.includes("ADMIN")) { //admin bypass all kind of ownership

        var item = await sails.models[req.options.model].findOne({id: req.params.id});

        if (!item || req.user.id != item.createdBy) {
            return res.forbidden("User is not the owner of the content");
        }
    }

    return proceed();

};
