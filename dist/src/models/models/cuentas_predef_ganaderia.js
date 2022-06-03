"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentas_predef_ganaderia = void 0;
const sequelize_1 = require("sequelize");
class cuentas_predef_ganaderia extends sequelize_1.Model {
    static initModel(sequelize) {
        cuentas_predef_ganaderia.init({
            descrip: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            tipo_cuenta: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'cuentas_predef_ganaderia',
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
        return cuentas_predef_ganaderia;
    }
}
exports.cuentas_predef_ganaderia = cuentas_predef_ganaderia;
//# sourceMappingURL=cuentas_predef_ganaderia.js.map