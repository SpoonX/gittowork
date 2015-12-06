module.exports = {
  attributes: {
    username : {type: 'string', unique: true},
    github_id: {type: 'integer', unique: true},
    profile  : {
      model: 'profile'
    }
  }
};
