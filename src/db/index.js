var { Pool } = require('pg');

const pool = new Pool({
  port: 5432,
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'mydb'
})

module.exports = {
  query: async (text, params, callback) => {
    const result = await pool.query(text, params, callback);
    return result;
  }
}
