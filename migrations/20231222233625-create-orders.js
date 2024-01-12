// migrations/zzzzz-create-orders.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNumber: {
        type: Sequelize.STRING
      },
      totalAmount: {
        type: Sequelize.DECIMAL
      },
      salesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Barang',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idPelanggan: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pelanggan',
          key: 'idPelanggan'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      statusOrders: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};
