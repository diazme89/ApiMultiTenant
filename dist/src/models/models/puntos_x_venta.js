"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puntos_x_venta = void 0;
const sequelize_1 = require("sequelize");
class puntos_x_venta extends sequelize_1.Model {
    static initModel(sequelize) {
        puntos_x_venta.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_punto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_comprobante: {
                type: sequelize_1.DataTypes.STRING(2),
                allowNull: true
            },
            puntos_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'puntos_x_venta',
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
        return puntos_x_venta;
    }
}
exports.puntos_x_venta = puntos_x_venta;
//# sourceMappingURL=puntos_x_venta.js.map