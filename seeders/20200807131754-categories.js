"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        name: "phones",
        imageUrl: "www.google.com",
        description: "blabla",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "tvs",
        imageUrl: "www.goggle.com",
        description: "ablabl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "lights",
        imageUrl: "www.goglle.com",
        description: "lbalba",
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
