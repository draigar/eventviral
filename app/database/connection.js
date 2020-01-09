const Sequelize = require("sequelize");
/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
const sequelize = new Sequelize('eventviral', 'root', '@Dls1759', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = sequelize;
global.sequelize = sequelize;