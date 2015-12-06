var helpers = require('request-helpers');

/**
 * Policy which makes sure the developer exists, and otherwise creates it.
 */
module.exports = function (req, res, next) {
  var params = helpers.secureParameters(['username'], req);

  if (!params.isValid()) {
    return next();
  }

  var username = params.get('username');

  Developer.count({username: username}).then(function (count) {
    if (count > 0) {
      return next();
    }

    DeveloperService.importDeveloper(username)
      .then(function () {
        next();
      })
      .catch(function (error) {
        if (error.statusCode === 404) {
          return next();
        }

        res.serverError(error);
      });
  }).catch(res.serverError);
};
