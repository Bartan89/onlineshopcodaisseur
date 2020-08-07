"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          categoryId: 1,
          name: "iphone",
          description: "mobile phone",
          price: "1000",
          imageUrl: "www.iphone.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          name: "android phone",
          description: "mobile phone",
          price: "700",
          imageUrl: "www.android.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          name: "television",
          description: "mobile phone",
          price: "1200",
          imageUrl: "www.samsung.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          name: "vacuumcleaner",
          description: "vacuum machine",
          price: "150",
          imageUrl: "www.vacuum.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          name: "light",
          description: "light up your life",
          price: "25",
          imageUrl: "www.light.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
