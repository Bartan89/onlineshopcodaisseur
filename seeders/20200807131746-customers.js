"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("customers", [
      {
        firstName: "patrick",
        lastName: "louter",
        address: "patrick street",
        email: "patrick@patrick.com",
        phone: "3412512",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "rein",
        lastName: "optland",
        address: "rein street",
        email: "rein@rein.com",
        phone: "7126536",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "bart",
        lastName: "kuijper",
        address: "bart street",
        email: "bart@bart.com",
        phone: "4536780",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "alice",
        lastName: "wonderalice",
        address: "wonderalice street",
        email: "alice@wonder.com",
        phone: "7895674",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "ivaylo",
        lastName: "jankov",
        address: "ivaylo street",
        email: "ivaylo@jankov.com",
        phone: "7685642",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
