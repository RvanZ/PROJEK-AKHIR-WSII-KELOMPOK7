'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Masukkan data admin dengan menggunakan queryInterface.bulkInsert
    await queryInterface.bulkInsert('admin', [
      {
        namaAdmin: 'Cadmin',
        usernameAdmin: 'adminc',
        passwordAdmin: 'adminpass1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namaAdmin: 'Radmin',
        usernameAdmin: 'adminr',
        passwordAdmin: 'adminpass2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Tambahkan data admin lainnya sesuai kebutuhan
    ]);

    // Tambahkan index unik pada kolom 'usernameAdmin'
    await queryInterface.addIndex('admin', ['usernameAdmin'], { unique: true });
  },

  async down(queryInterface, Sequelize) {
    // Hapus index unik pada kolom 'usernameAdmin'
    await queryInterface.removeIndex('admin', ['usernameAdmin']);

    // Hapus data admin dengan menggunakan queryInterface.bulkDelete
    await queryInterface.bulkDelete('admin', null, {});
  }
};
