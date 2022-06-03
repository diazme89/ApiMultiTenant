"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentas_frecuentes = void 0;
const sequelize_1 = require("sequelize");
class cuentas_frecuentes extends sequelize_1.Model {
    static initModel(sequelize) {
        cuentas_frecuentes.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'cuentas_frecuentes',
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
        return cuentas_frecuentes;
    }
}
exports.cuentas_frecuentes = cuentas_frecuentes;
//# sourceMappingURL=cuentas_frecuentes.js.map