"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentas_cruce = void 0;
const sequelize_1 = require("sequelize");
class cuentas_cruce extends sequelize_1.Model {
    static initModel(sequelize) {
        cuentas_cruce.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'cuentas_cruce',
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
        return cuentas_cruce;
    }
}
exports.cuentas_cruce = cuentas_cruce;
//# sourceMappingURL=cuentas_cruce.js.map