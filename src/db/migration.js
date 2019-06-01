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
    )`,
    `INSERT INTO users (name, email, password, photo) VALUES ('mateus', 'mat@mat.com', '123456', '')`
  ]
}

module.exports = {
  migrations,
  TABLES
}