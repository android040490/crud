let knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Milana03112016',
      database : 'apalkov'
    }
  });

  module.exports = knex;