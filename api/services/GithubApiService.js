var GithubApi = require('api-github');

module.exports = {
  get instance () {
    if (!this._instance) {
      this._instance = new GithubApi();
    }

    return this._instance;
  }
};
