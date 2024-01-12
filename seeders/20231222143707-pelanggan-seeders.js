'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Masukkan data pelanggan dengan menggunakan queryInterface.bulkInsert
    await queryInterface.bulkInsert('pelanggan', [
      {
        namaPelanggan: 'Joe William',
        alamat: 'Jakarta',
        email: 'joejoe@gmail.com',
        handphone: '081234434551',
        username: 'joeuser',
        password: 'pass123',
        createAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namaPelanggan: 'Ade Maulana',
        alamat: 'Yogyakarta',
        email: 'adeuty@gmail.com',
        handphone: '081234556565',
        username: 'adeade',
        password: 'pass123',
        createAt: new Date(),
        updatedAt: new Date(),
      },
      // Tambahkan data pelanggan lainnya sesuai kebutuhan
    ]);

    // Tambahkan index unik pada kolom 'username'
    await queryInterface.addIndex('pelanggan', ['username'], { unique: true });

    // Tambahkan index unik pada kolom 'email'
    await queryInterface.addIndex('pelanggan', ['email'], { unique: true });
  },

  down: async (queryInterface, Sequelize) => {
    // Hapus index unik pada kolom 'username'
    await queryInterface.removeIndex('pelanggan', ['username']);

    // Hapus index unik pada kolom 'email'
    await queryInterface.removeIndex('pelanggan', ['email']);

    // Hapus data pelanggan dengan menggunakan queryInterface.bulkDelete
    await queryInterface.bulkDelete('pelanggan', null, {});
  }
};
