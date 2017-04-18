module.exports = {
  use_environment_variable: true,
  development: {
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
  production: {
    username: 'root',
    password: null,
    database: process.env.DATABASE_URL,
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};

