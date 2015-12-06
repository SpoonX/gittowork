"use strict";

class OrganizationService {
  get api () {
    return GithubApiService.instance.orgs;
  }

  importOrganization (name) {
    return this.api
      .find(name)
      .then(function (organization) {
        if (organization.type !== 'Organization') {
          return Promise.reject({statusCode: 404});
        }

        var profileInformation = _.pick(organization, Object.keys(Profile.definition));

        delete profileInformation.id;

        return Organization.create({
          name     : organization.login,
          github_id: organization.id,
          profile  : profileInformation
        });
      });
  }
}

module.exports = new OrganizationService();
