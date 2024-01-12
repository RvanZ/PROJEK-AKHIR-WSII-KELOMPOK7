'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Barang', [
      {
        productName: 'kemeja lengan panjang',
        brandName: 'Polo',
        quantity: 10,
        price: 200000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Kaos',
        brandName: 'Eiger',
        quantity: 5,
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Topi',
        brandName: 'Converse',
        quantity: 8,
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Barang', null, {});
  }
};
