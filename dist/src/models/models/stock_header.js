"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stock_header = void 0;
const sequelize_1 = require("sequelize");
class stock_header extends sequelize_1.Model {
    static initModel(sequelize) {
        stock_header.init({
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
            cod_deposito_destino: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            observacion: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            nro_comprob_interdep: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nro_remito_interdep: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            cod_estado: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_movimiento: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            anulada: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'stock_header',
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
        return stock_header;
    }
}
exports.stock_header = stock_header;
//# sourceMappingURL=stock_header.js.map