'use strict';

// orderdId: DataTypes.INTEGER,
//     productId: DataTypes.INTEGER,
//     quantity: DataTypes.INTEGER

module.exports = {
  up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert(
  "productOrders", 
  [
    {
      orderId: 1,
      productId: 2,
      quantity: 3,
    },
    {
      orderId: 2,
      productId: 2,
      quantity: 1,
    },
    {
      orderId: 3,
      productId: 1,
      quantity: 7,
    },
    {
      orderId: 1,
      productId: 3,
      quantity: 5,
    },
  ]
)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
