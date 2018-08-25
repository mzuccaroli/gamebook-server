module.exports = async function (req, res, proceed) {
    // First, check whether the request comes from a logged-in user.
    if (!req.user) {
        return res.forbidden("user must be authorized");
    }

    if (!req.user.roles.includes("ADMIN")) { //admin bypass all kind of ownership

        var book = await Gamebook.findOne({id: req.body.book});

        if (!book || req.user.id != book.createdBy) {
            return res.forbidden("User is not the owner of the content");
        }
    }

    return proceed();

};
