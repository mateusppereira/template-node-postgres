require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./db');
const { doInsert } = require('./db/query');
const { TABLES, migrations } = require('./db/migration');

app.get('/get/:id', async (req, res) => {
  const result = await db.query('SELECT * FROM teste WHERE id = $1', [req.params.id]);
  return res.json(result.rows);
})

app.get('/run-migrations', async (req, res) => {
  Object.keys(migrations).forEach(table => {
    db.query(migrations[table][0]);
  });
  return
})

app.listen(3000);