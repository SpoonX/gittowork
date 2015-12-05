module.exports = {
  getRepository: function (identifier, done) {
    var repo = GithubApiService.instance.getRepo(identifier.username, identifier.repository);

    repo.show(done);
  },

  normalize: function (username, repository, callback) {
    if (typeof repository === 'undefined' || typeof repository === 'function') {
      var parts  = username.split('/');
      callback   = repository;
      username   = parts[0];
      repository = parts[1];
    }

    return {username: username, repository: repository, callback: callback};
  },

  importRepository: function (username, repository, done) {
    var identifier = this.normalize(username, repository, done);

    this.getRepository(identifier, function (error, repositoryInfo) {
      if (error) {
        if (error.error === 404) {
          return identifier.callback(null, null);
        }
        return identifier.callback(error);
      }

      var repositoryInfoToStore       = _.pick(repositoryInfo, Object.keys(Repository.definition));
      repositoryInfoToStore.github_id = repositoryInfoToStore.id;

      delete repositoryInfoToStore.id;

      Repository.create(repositoryInfoToStore).exec(identifier.callback);
    });
  }
};
