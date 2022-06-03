"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtro_stock = void 0;
const sequelize_1 = require("sequelize");
class filtro_stock extends sequelize_1.Model {
    static initModel(sequelize) {
        filtro_stock.init({
            fecha1: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha2: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            ajuste: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            },
            motivo: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            },
            destino: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            empresa: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            ordenado: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false,
                primaryKey: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            proveedor: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            },
            fecha_pago1: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_pago2: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            insumo: {
                type: sequelize_1.DataTypes.CHAR(80),
                allowNull: true
            },
            remito_nro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'filtro_stock',
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
        return filtro_stock;
    }
}
exports.filtro_stock = filtro_stock;
//# sourceMappingURL=filtro_stock.js.map