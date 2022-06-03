"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pid_equivalencia_proveedor = void 0;
const sequelize_1 = require("sequelize");
class pid_equivalencia_proveedor extends sequelize_1.Model {
    static initModel(sequelize) {
        pid_equivalencia_proveedor.init({
            syn_cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            pid_cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'pid_equivalencia_proveedor',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "syn_cod_proveedor" },
                    ]
                },
            ]
        });
        return pid_equivalencia_proveedor;
    }
}
exports.pid_equivalencia_proveedor = pid_equivalencia_proveedor;
//# sourceMappingURL=pid_equivalencia_proveedor.js.map