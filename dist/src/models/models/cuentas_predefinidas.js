"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentas_predefinidas = void 0;
const sequelize_1 = require("sequelize");
class cuentas_predefinidas extends sequelize_1.Model {
    static initModel(sequelize) {
        cuentas_predefinidas.init({
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
            tableName: 'cuentas_predefinidas',
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
        return cuentas_predefinidas;
    }
}
exports.cuentas_predefinidas = cuentas_predefinidas;
//# sourceMappingURL=cuentas_predefinidas.js.map