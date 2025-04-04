const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite", // dialect é qual banco que no caso seria sqlite(nome do banco)
  storage: "./db/app.db", // storage = armazenar. Agende coloca um caminho(opcional) seguido do nome do banco que no caso seria o app.db
});

module.exports = sequelize;
