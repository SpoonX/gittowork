module.exports = {
  getUser : function (username) {
    return GithubApiService.instance.getUser(username);
  },
  fetchUser      : function (username, done) {
    this.getUser().show(username, done);
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
