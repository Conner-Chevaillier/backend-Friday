module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/snack-backend"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
