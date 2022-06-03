"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentas_disponibilidades = void 0;
const sequelize_1 = require("sequelize");
class cuentas_disponibilidades extends sequelize_1.Model {
    static initModel(sequelize) {
        cuentas_disponibilidades.init({
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
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            cbu: {
                type: sequelize_1.DataTypes.CHAR(22),
                allowNull: true
            },
            tipo_cuenta: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            alias: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'cuentas_disponibilidades',
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
        return cuentas_disponibilidades;
    }
}
exports.cuentas_disponibilidades = cuentas_disponibilidades;
//# sourceMappingURL=cuentas_disponibilidades.js.map