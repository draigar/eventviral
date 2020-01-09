'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    access: DataTypes.INTEGER,
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    // Users.belongsTo(models.Users);
  };
  return Users;
};