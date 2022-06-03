"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pid_equivalencia_insumo = void 0;
const sequelize_1 = require("sequelize");
class pid_equivalencia_insumo extends sequelize_1.Model {
    static initModel(sequelize) {
        pid_equivalencia_insumo.init({
            syn_cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(11, 0),
                allowNull: false,
                primaryKey: true
            },
            pid_cod_insumo: {
                type: sequelize_1.DataTypes.DECIMAL(11, 0),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'pid_equivalencia_insumo',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "syn_cod_articulo" },
                    ]
                },
            ]
        });
        return pid_equivalencia_insumo;
    }
}
exports.pid_equivalencia_insumo = pid_equivalencia_insumo;
//# sourceMappingURL=pid_equivalencia_insumo.js.map