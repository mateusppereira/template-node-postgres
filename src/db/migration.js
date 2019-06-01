const TABLES = {
  users: 'users',
}


const migrations = {
  users: [
    `CREATE TABLE users (
      id_user SERIAL PRIMARY KEY,
      name VARCHAR(250) NOT NULL,
      email VARCHAR(250) NOT NULL,
      password VARCHAR(250) NOT NULL,
      photo VARCHAR(250) NOT NULL
    )`
  ]
}

module.exports = {
  migrations,
  TABLES
}