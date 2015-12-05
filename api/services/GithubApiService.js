var GithubApi = require('github-api');

module.exports = {
  init: function () {
    this.instance = new GithubApi('https://api.github.com/');
  }
};
