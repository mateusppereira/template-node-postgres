const doInsert = (table, obj) => {
  let query = 'INSERT INTO $table ($fields) VALUES ($values)';
  const fields = Object.keys(obj);
  const values = fields.map(item => `'${obj[item]}'`);

  query = query.replace('$table', table);
  query = query.replace('$fields', fields.join(','));
  query = query.replace('$values', values.join(','));

  return query
} 

module.exports = {
  doInsert
}