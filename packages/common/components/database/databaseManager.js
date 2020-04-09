function DatabaseManager() {
  this.connection = null;
}

DatabaseManager.prototype.connect = async function connect() {
  if (!this.connection) {
    this.connection = await Promise.resolve("connection");
  }
};

module.exports = new DatabaseManager();
