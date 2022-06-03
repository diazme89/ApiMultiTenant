"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsoja = void 0;
const sequelize_1 = require("sequelize");
class hsoja extends sequelize_1.Model {
    static initModel(sequelize) {
        hsoja.init({
            humedad: {
                type: sequelize_1.DataTypes.DECIMAL(3, 1),
                allowNull: true
            },
            merma: {
                type: sequelize_1.DataTypes.DECIMAL(4, 2),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            }
        }, {
            sequelize,
            tableName: 'hsoja',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
        return hsoja;
    }
}
exports.hsoja = hsoja;
//# sourceMappingURL=hsoja.js.map