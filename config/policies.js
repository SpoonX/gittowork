module.exports.policies = {
  DeveloperController   : {
    find: 'ensureDeveloper'
  },
  RepositoryController  : {
    find: 'ensureRepository'
  },
  OrganizationController: {
    find: 'ensureOrganization'
  }
};
