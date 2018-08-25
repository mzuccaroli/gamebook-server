/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

    /***************************************************************************
     *                                                                          *
     * Default policy for all controllers and actions, unless overridden.       *
     * (`true` allows public access)                                            *
     *                                                                          *
     ***************************************************************************/

    // '*': true,
    UserController: {
        update: ['isAuth'],
        destroy: ['isAuth', 'isAdmin'],
        refreshToken: 'isAuth',
    },
    GamebookController: {
        create: 'isAuth',
        update: ['isAuth', 'isOwner'],
        destroy: ['isAuth', 'isOwner'],
    },
    ChapterController: {
        create: ['isAuth', 'isBookOwner'],
        update: ['isAuth', 'isBookOwner'],
        destroy: ['isAuth', 'isBookOwner'],
    }


};
