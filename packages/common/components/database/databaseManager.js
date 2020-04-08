const knex = require("knex");
const { Model } = require("objection");

const knexConfig = require("../../knexfile");

async function databaseManager() {
  let knexInstance = null;

  async function initializeKnex() {
    return knex(knexConfig.development);
  }

  async function connect() {
    if (!knexInstance) {
      knexInstance = await initializeKnex();
    }

    Model.bind(knexInstance);
  }

  return {
    connect,
  };
}

module.exports = databaseManager();
