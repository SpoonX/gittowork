var GithubApi = require('github-api');

module.exports = {
  get instance () {
    if (!this._instance) {
      this._instance = new GithubApi('https://api.github.com/');
    }

    return this._instance;
  }
};
