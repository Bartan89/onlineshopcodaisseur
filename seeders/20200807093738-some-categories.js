"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Phones",
          imageUrl: "www.phone.com",
          description: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Household appliances",
          imageUrl: "www.householdstuff.com",
          description: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "lights",
          imageUrl: "wwww.notdark.com",
          description: "gives light",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
