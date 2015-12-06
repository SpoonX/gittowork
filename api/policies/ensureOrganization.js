var helpers = require('request-helpers');

/**
 * Policy which makes sure the organization exists, and otherwise creates it.
 */
module.exports = function (req, res, next) {
  var params = helpers.secureParameters(['name'], req);

  if (!params.isValid()) {
    return next();
  }

  var name = params.get('name');

  Organization.count({name: name}).then(function (count) {
    if (count > 0) {
      return next();
    }

    OrganizationService.importOrganization(name)
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
