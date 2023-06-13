import mysql from "mysql2";
import { dbCredentials } from "./secrets.js"

const db = mysql.createConnection(dbCredentials);

const query = "SELECT * FROM movies"

db.query(
  query,
  function (err, results) {
    console.log(err);
    console.table(results);
    db.destroy();


  }
)