var helpers = require('request-helpers');

/**
 * Policy which makes sure the user exists, and otherwise creates it.
 */
module.exports = function (req, res, next) {
  var params = helpers.secureParameters(['username'], req);

  if (!params.isValid()) {
    return res.badRequest('missing_parameter', 'username');
  }

  var username = params.get('username');

  Developer.count({username: username}).then(function (count) {
    if (count > 0) {
      return next();
    }

    DeveloperService.importDeveloper(username, function (error) {
      if (error) {
        return res.serverError(error);
      }

      next();
    });
  }).catch(res.serverError);
};
