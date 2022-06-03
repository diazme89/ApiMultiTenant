"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas_transporte = void 0;
const sequelize_1 = require("sequelize");
class ventas_transporte extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas_transporte.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            transporte_nombre: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            transporte_domicilio: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            transporte_cuit: {
                type: sequelize_1.DataTypes.CHAR(13),
                allowNull: true
            },
            transporte_marca: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            transporte_patente: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            transporte_responsable: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            transporte_resp_documento: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ventas_transporte',
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
        return ventas_transporte;
    }
}
exports.ventas_transporte = ventas_transporte;
//# sourceMappingURL=ventas_transporte.js.map