const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize/database");

class Image extends Model { }

Image.init(
    {
        upload_date: {
            type: DataTypes.DATETIME,
        },
        image: {
            type: DataTypes.BLOB('long'),
        },
        description: {
            type: DataTypes.TEXT,
        }
    },
    { sequelize, modelName: "image", tableName: "images", timestamps: false },
);

module.exports = Image;