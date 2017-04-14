module.exports = {
  production: {
    username: process.env.POSTGRES_USER,
    password: null,
    database: process.env.SIREN_DB_DEV,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  development: {
    username: 'meg',
    password: null,
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
