'use strict';
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        User.belongsToMany(models.Podcast, {through: 'UserPodcasts', onDelete: 'CASCADE'});
        User.belongsToMany(models.Episode, {through: 'UserEpisodes', as: 'Inbox', onDelete: 'CASCADE'});
        User.hasMany(models.Playlist);
      }
    }
  });
  return User;
};
