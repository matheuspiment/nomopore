const iEmpty = require("lodash/isEmpty");

const databaseManager = require("./databaseManager");

module.exports = {
  databaseManager,
  isConnected: () => (iEmpty(databaseManager.connection) ? false : true),
};
