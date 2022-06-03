"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_insumos = void 0;
const sequelize_1 = require("sequelize");
class pla_insumos extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_insumos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            cod_insumo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            existencia: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_insumos',
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
                {
                    name: "pla_insumosxkey1",
                    using: "BTREE",
                    fields: [
                        { name: "cod_periodo" },
                        { name: "cod_insumo" },
                    ]
                },
            ]
        });
        return pla_insumos;
    }
}
exports.pla_insumos = pla_insumos;
//# sourceMappingURL=pla_insumos.js.map