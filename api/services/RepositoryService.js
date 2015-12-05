"use strict";

class RepositoryService {
  get api () {
    return GithubApiService.instance.repos;
  }

  importRepository (repository) {
    return this.api
      .find(repository)
      .then(function (repositoryInfo) {
        var repositoryInfoToStore       = _.pick(repositoryInfo, Object.keys(Repository.definition));
        repositoryInfoToStore.github_id = repositoryInfoToStore.id;

        delete repositoryInfoToStore.id;

        return Repository.create(repositoryInfoToStore)
      });
  }
}

module.exports = new RepositoryService();
