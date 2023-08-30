const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize/database");

class User extends Model { }

User.init(
    {
        userId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        active: {
            type: DataTypes.BOOLEAN,
        },
    },
    { sequelize, modelName: "user", tableName: "users", timestamps: false },
);

module.exports = User;