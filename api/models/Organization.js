module.exports = {
  attributes: {
    github_id : 'integer',
    name      : 'string',
    profile   : {
      model: 'profile'
    },
    members   : {
      model: 'developer',
      via  : 'organization'
    }
  }
};
