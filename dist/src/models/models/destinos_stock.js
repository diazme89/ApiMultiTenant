"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destinos_stock = void 0;
const sequelize_1 = require("sequelize");
class destinos_stock extends sequelize_1.Model {
    static initModel(sequelize) {
        destinos_stock.init({
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codexterno: {
                type: sequelize_1.DataTypes.CHAR(4),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'destinos_stock',
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
        return destinos_stock;
    }
}
exports.destinos_stock = destinos_stock;
//# sourceMappingURL=destinos_stock.js.map