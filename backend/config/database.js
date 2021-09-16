import mysql from "mysql2";

const config = require("./config");

//Creating connection to database
const db = mysql.createConnection({
    host: config.sql.server,
    user: config.sql.user,
    password: config.sql.password,
    database: config.sql.database
  });
   
  export default db;