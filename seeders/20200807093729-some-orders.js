"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          productId: null,
          orderId: 1,
          quantity: null,
          createdAt: 'new Date()',
          updatedAt: 'new Date()'
        },
        {
          productId: null,
          orderId: 2,
          quantity: null,
          createdAt: 'new Date()',
          updatedAt: 'new Date()'
        },
        {
          productId: null,
          orderId: 3,
          quantity: null,
          createdAt: 'new Date()',
          updatedAt: 'new Date()'
        },
        {
          productId: null,
          orderId: 4,
          quantity: null,
          createdAt: 'new Date()',
          updatedAt: 'new Date()'
        },
        {
          productId: null,
          orderId: 5,
          quantity: null,
          createdAt: 'new Date()',
          updatedAt: 'new Date()'
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};



