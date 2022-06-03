"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientes_seguimiento = void 0;
const sequelize_1 = require("sequelize");
class clientes_seguimiento extends sequelize_1.Model {
    static initModel(sequelize) {
        clientes_seguimiento.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            detalle: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true
            },
            proxima_llamada: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'clientes_seguimiento',
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
        return clientes_seguimiento;
    }
}
exports.clientes_seguimiento = clientes_seguimiento;
//# sourceMappingURL=clientes_seguimiento.js.map