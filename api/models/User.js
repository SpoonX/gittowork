/**
* User.js
*
* @description :: Users fetched from Github's
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    github_id         : {
      type: 'integer'
    },
    login             : {
      type: 'string'
    },
    name              : {
      type: 'string'
    },
    email             : {
      type: 'email'
    },
    location          : {
      type: 'string'
    },
    hireable          : {
      type: 'boolean'
    },
    bio               : {
      type: 'string'
    },
    blog              : {
      type: 'url'
    },
    public_repos      : {
      type: 'integer'
    },
    public_gists      : {
      type: 'integer'
    },
    followers         : {
      type: 'integer'
    },
    following         : {
      type: 'integer'
    },
    avatar_url        : {
      type: 'url'
    },
    gravatar_id       : {
      type: 'string'
    },
    github_created_at : {
      type: 'date'
    },
    github_updated_at : {
      type: 'date'
    }
  }

};
