module.exports = {
  development: {
    client: "mysql2",
    connection: async () => {
      const {
        DB_NAME,
        DB_USERNAME,
        DB_PASSWORD,
        DB_HOST,
      } = await Promise.resolve({
        DB_NAME: "nomopore",
        DB_USERNAME: "root",
        DB_PASSWORD: "root",
        DB_HOST: "localhost",
      });

      return {
        host: DB_HOST,
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
      };
    },
  },
};
