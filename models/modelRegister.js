const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "RegisterInfos",
  {
    ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    First_Name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Last_Name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Role: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Created: {
      type: Sequelize.STRING

    }
  },
  {
    timestamps: false
  }
);
