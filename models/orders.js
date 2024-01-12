module.exports = (sequelize, DataTypes) => {

  const Barang = require('./barang')(sequelize, DataTypes);

  const Orders = sequelize.define(
    'Orders',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      orderNumber: {
        type: DataTypes.STRING,
      },
      totalAmount: {
        type: DataTypes.DECIMAL,
      },
      salesId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Barang', // Assuming 'Barang' is the name of the referenced model
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idPelanggan: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Pelanggan', // Assuming 'Pelanggan' is the name of the referenced model
          key: 'idPelanggan',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      statusOrders: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: 'Orders',
    }
  );

  Orders.belongsTo(Barang, {
    foreignKey: 'salesId',
    as: 'salesItem', // This alias is optional but can be useful
  });

  return Orders;
};
