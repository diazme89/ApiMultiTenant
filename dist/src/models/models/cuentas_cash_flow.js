"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentas_cash_flow = void 0;
const sequelize_1 = require("sequelize");
class cuentas_cash_flow extends sequelize_1.Model {
    static initModel(sequelize) {
        cuentas_cash_flow.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            orden: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'cuentas_cash_flow',
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
        return cuentas_cash_flow;
    }
}
exports.cuentas_cash_flow = cuentas_cash_flow;
//# sourceMappingURL=cuentas_cash_flow.js.map