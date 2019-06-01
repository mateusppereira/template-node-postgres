require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./db');
const { doInsert } = require('./db/query');
const { TABLES, migrations } = require('./db/migration');

app.get('/', (req, res) => {
  return res.send('hello world');
})

app.get('/get/:id', async (req, res) => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
  return res.json(result.rows);
})

app.get('/run-migrations', async (req, res) => {
  try {
    Object.keys(migrations).forEach(async table => {
      console.log(migrations[table][0])
      console.log(migrations[table][1])
      console.log(migrations[table][2])
      await db.query(migrations[table][0]);
      await db.query(migrations[table][1]);
      await db.query(migrations[table][2]);
    });
    return res.send('ok')
  } catch (error) {
    return res.json(error)
  }
})

app.listen(process.env.PORT || 5000);