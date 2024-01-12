// seeders/20211225000001-demo-orders.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Ambil ID dari Sales dan pelanggan yang sudah ada di tabel masing-masing
    const salesId = await queryInterface.rawSelect('Barang', {
      where: {
        productName: 'kaos' // Ganti dengan data Sales yang sudah ada
      }
    }, ['id']);

    const idPelanggan = await queryInterface.rawSelect('pelanggan', {
      where: {
        username: 'joeuser' // Ganti dengan data pelanggan yang sudah ada
      }
    }, ['idPelanggan']);

    // Masukkan data ke dalam tabel 'Orders'
    return queryInterface.bulkInsert('Orders', [
      {
        orderNumber: 'ORD001',
        totalAmount: 4,
        salesId: salesId,
        idPelanggan:  idPelanggan,
        statusOrders: 'Diterima',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Hapus data dari tabel 'Orders'
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
