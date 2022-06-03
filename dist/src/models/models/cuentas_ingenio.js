"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentas_ingenio = void 0;
const sequelize_1 = require("sequelize");
class cuentas_ingenio extends sequelize_1.Model {
    static initModel(sequelize) {
        cuentas_ingenio.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(35),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'cuentas_ingenio',
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
        return cuentas_ingenio;
    }
}
exports.cuentas_ingenio = cuentas_ingenio;
//# sourceMappingURL=cuentas_ingenio.js.map