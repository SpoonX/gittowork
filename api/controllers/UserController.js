/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var GithubApi = require('github-api');

module.exports = {

  /**
   * @description :: Fetches a user from github api and store it
   * @param req
   * @param res
   */

  fetch : function (req, res) {

    var userData = {
      nickname: req.body.nickname
    };

    if (!userData.nickname) {
      return res.badRequest('You must enter a correct username.');
    }

    var github = new GithubApi({});

    var githubUser = github.getUser();


    githubUser.show(userData.nickname, function (error, user) {
      if (error) return res.serverError('We encoutered a problem with Github\'s Api let us resolve that for you.');

        User.create({
          githubId      : user.id,
          login         : user.login,
          name          : user.name,
          email         : user.email,
          location      : user.location,
          hireable      : user.hireable,
          bio           : user.bio,
          blog          : user.blog,
          public_repos  : user.public_repos,
          public_gists  : user.public_gists,
          followers     : user.followers,
          following     : user.following,
          avatarUrl     : user.avatar_url,
          gravatarId    : user.gravatar_id
        }).exec(function createUser (error, newUser) {
          if (error) return res.negotiate(error);

          return res.send(200, newUser)
        })

    });

  }

};
