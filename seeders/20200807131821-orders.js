"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("orders", [
      {
        customerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customerId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customerId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customerId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customerId: 2,
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
