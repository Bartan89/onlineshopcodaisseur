"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        name: "IPhone 10",
        description: "awesome",
        price: "1000 eur",
        categoryId: 1,
        imageUrl: "www.gogle.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "errorTv",
        description: "crack in the screen",
        price: "700 eur",
        categoryId: 2,
        imageUrl: "www.google.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "big blue light",
        description: "bluish",
        price: "100 eur",
        categoryId: 3,
        imageUrl: "www.goggle.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "android",
        description: "amazing",
        price: "900 eur",
        categoryId: 4,
        imageUrl: "www.goglle.com",
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
