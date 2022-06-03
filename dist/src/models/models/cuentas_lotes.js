"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentas_lotes = void 0;
const sequelize_1 = require("sequelize");
class cuentas_lotes extends sequelize_1.Model {
    static initModel(sequelize) {
        cuentas_lotes.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codcuenta: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: false
            },
            subcodigo: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: false
            },
            codlote: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: false
            },
            porcentaje: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'cuentas_lotes',
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
        return cuentas_lotes;
    }
}
exports.cuentas_lotes = cuentas_lotes;
//# sourceMappingURL=cuentas_lotes.js.map