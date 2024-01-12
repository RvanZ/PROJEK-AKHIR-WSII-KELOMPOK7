// models/pelanggan.js
module.exports = (sequelize, DataTypes) => {
    const Pelanggan = sequelize.define(
      'Pelanggan',
      {
        idPelanggan: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        namaPelanggan: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        alamat: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        handphone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
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
        tableName: 'Pelanggan',
      }
    );
  
    return Pelanggan;
  };
  