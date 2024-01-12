module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define(
        "Admin", {
        //copy migration user
        idAdmin: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        namaAdmin: {
            type: DataTypes.STRING
        },
        usernameAdmin: {
            type: DataTypes.STRING
        },
        passwordAdmin: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        }


    },
        {
            tableName: "Admin"
        }


    )
    return Admin;
}