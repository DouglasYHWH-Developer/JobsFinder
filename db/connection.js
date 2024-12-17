const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/app.db",
  storage: ""
});

module.exports = sequelize;
