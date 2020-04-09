// const {
//   databaseManager,
// } = require("@matheuspiment/nomopore-common/components/database");

module.exports.createCircle = async (event, context) => {
  // console.log("connection", databaseManager.connection);

  // await databaseManager.connect();

  // console.log("connection", databaseManager.connection);

  return {
    statusCode: 201,
    body: JSON.stringify({
      created: true,
    }),
  };
};
