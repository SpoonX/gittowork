module.exports = {
  attributes: {
    github_id   : 'integer',
    username    : 'string',
    profile     : {
      model: 'profile'
    },
    organization: {
      model: 'organization',
      via  : 'members'
    }
  }
};
