// Obter o cliente
const mysql = require("mysql/promisse");

// Criar conecxão com o banco
const client = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'agrosistec'
});