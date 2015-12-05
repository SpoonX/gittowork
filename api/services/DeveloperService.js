"use strict";

class DeveloperService {
  get api () {
    return GithubApiService.instance.users;
  }

  importDeveloper (username) {
    return this.api
      .find(username)
      .then(function (user) {

        var profileInformation = _.pick(user, Object.keys(Profile.definition));

        delete profileInformation.id;

        if (user.type === 'Organization') {
          Organization.create({
            name      : user.login,
            github_id : user.id,
            profile   : profileInformation
          });
          return Promise.reject({statusCode: 404});
        }

        if (user.type !== 'User') {
          return Promise.reject({statusCode: 404});
        }


        return Developer.create({
          username : user.login,
          github_id: user.id,
          profile  : profileInformation
        });
      });
  }
}

module.exports = new DeveloperService();
