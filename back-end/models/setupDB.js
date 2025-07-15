//Connect to the database
const {Pool} = require("pg");

//Creating a new object of PostGres Sql, and sending a JSON object in its constructor
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "LSM",
    password: "Postgres229899615",
    port: 5432,
    }
);

module.exports = pool;