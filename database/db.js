var dbConfigObj = require('./dbConfig.json')
const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize(
    dbConfigObj.DBConfig.DB_NAME,
    dbConfigObj.DBConfig.DB_USERNAME,
    dbConfigObj.DBConfig.DB_PASSWORD, {
  host: dbConfigObj.DBConfig.HOST,
  port: dbConfigObj.DBConfig.PORT,
  dialect: "mysql",
  dialectOptions: {
    ssl:'Amazon RDS'
  }
  ,

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
sequelize.authenticate()
  .then(() => {
    console.log('Connection  has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//console.log("db-->", db);

module.exports = db;
