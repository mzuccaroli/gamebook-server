module.exports = async function (req, res, proceed) {

    // First, check whether the request comes from a logged-in user.
    if (!req.user) {
        return res.forbidden("user must be authorized");
    }

    if (!req.user.roles.includes("ADMIN")) {
        return res.forbidden("user has not the right permissions");
    }

    return proceed();

};
