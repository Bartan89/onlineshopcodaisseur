"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "customers",
      [
        {
          firstName: "Rok",
          lastName: "Popov",
          address: "SameStreetAsCodaisseur 666",
          email: "Rok@rocks.com",
          phone: "+123 456 986",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Patrick",
          lastName: "Louter",
          address: "Loud street 666",
          email: "Patrick@rocks.com",
          phone: "+ 4455 123 1111",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Bart",
          lastName: "Kuijper",
          address: "Kuijper Street 666",
          email: "bart@rocks.com",
          phone: "+123 456 986",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("customers", null, {});
  },
};
