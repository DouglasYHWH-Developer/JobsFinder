const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite", // Diz qual tipo de banco está sendo usado.No seu caso, é o SQLite, que salva os dados em um arquivo local.
  storage: "./db/app.db", // Esse é o caminho onde o arquivo do banco será salvo. 
  // Você está dizendo: "guarde o banco em uma pasta db com o nome app.db".
});

module.exports = sequelize;
