module.exports = {
  attributes: {
    type           : 'string',
    developer      : {model: 'developer'},
    organization   : {model: 'organization'},
    avatar_url     : 'string',
    gravatar_id    : 'string',
    url            : 'string',
    name           : 'string',
    company        : 'string',
    blog           : 'string',
    location       : 'string',
    email          : 'email',
    hireable       : 'boolean',
    bio            : 'text',
    public_gists   : 'integer',
    followers      : 'integer',
    following      : 'integer',
    account_created: 'datetime',
    account_updated: 'datetime'
  }
};
