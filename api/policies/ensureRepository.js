var helpers = require('request-helpers');

/**
 * Policy which makes sure the repository exists, and otherwise creates it.
 */
module.exports = function (req, res, next) {
  var params = helpers.secureParameters(['full_name'], req);

  if (!params.isValid()) {
    return next();
  }

  var repositoryName = params.get('full_name');

  Repository.count({full_name: repositoryName}).then(function (count) {
    if (count > 0) {
      return next();
    }

    RepositoryService.importRepository(repositoryName, function (error) {
      if (error) {
        return res.serverError(error);
      }

      next();
    });
  }).catch(res.serverError);
};
