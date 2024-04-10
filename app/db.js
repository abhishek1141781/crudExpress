// db.js
const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    host: 'localhost',
    // database: 'pgpromisedb',
    database: 'pgpromisedb_working',
    password: 'postgres',
    port: 5432,
});

module.exports = db;
