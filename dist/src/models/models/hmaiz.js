"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hmaiz = void 0;
const sequelize_1 = require("sequelize");
class hmaiz extends sequelize_1.Model {
    static initModel(sequelize) {
        hmaiz.init({
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
            tableName: 'hmaiz',
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
        return hmaiz;
    }
}
exports.hmaiz = hmaiz;
//# sourceMappingURL=hmaiz.js.map