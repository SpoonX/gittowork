var GithubApi = require('github-api');

module.exports = {
  init           : function () {
    this.githubApi = new GithubApi('https://api.github.com/');
  },
  fetchUser      : function (username, done) {
    this.githubApi.getUser().show(username, done);
  },
  importDeveloper: function (username, done) {
    this.fetchUser(username, function (error, user) {
      if (error) {
        return done(error);
      }

      var profileInformation = _.pick(user, Object.keys(Profile.definition));

      profileInformation.github_id = profileInformation.id;

      delete profileInformation.id;

      Developer.create({
        username: user.login,
        profile : profileInformation
      }).exec(done);
    });
  }
};
