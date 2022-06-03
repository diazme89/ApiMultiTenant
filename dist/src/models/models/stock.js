"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stock = void 0;
const sequelize_1 = require("sequelize");
class stock extends sequelize_1.Model {
    static initModel(sequelize) {
        stock.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            observacion: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            fecha_carga: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            hora_carga: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            id_header: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_stock_header: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'stock',
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
                {
                    name: "stock_cod_articulo",
                    using: "BTREE",
                    fields: [
                        { name: "cod_articulo" },
                    ]
                },
                {
                    name: "stock_cod_deposito",
                    using: "BTREE",
                    fields: [
                        { name: "cod_deposito" },
                    ]
                },
                {
                    name: "stock_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha" },
                    ]
                },
                {
                    name: "stock_articulo_deposito",
                    using: "BTREE",
                    fields: [
                        { name: "cod_articulo" },
                        { name: "cod_deposito" },
                    ]
                },
            ]
        });
        return stock;
    }
}
exports.stock = stock;
//# sourceMappingURL=stock.js.map