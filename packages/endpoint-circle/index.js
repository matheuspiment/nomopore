const {
  databaseManager,
} = require("@matheuspiment/nomopore-common/components/database");

(async () => {
  console.log("connection", databaseManager.connection);

  await databaseManager.connect();

  console.log("connection", databaseManager.connection);
})();
