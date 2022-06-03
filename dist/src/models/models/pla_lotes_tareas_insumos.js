"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_lotes_tareas_insumos = void 0;
const sequelize_1 = require("sequelize");
class pla_lotes_tareas_insumos extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_lotes_tareas_insumos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            id_pla_lote_tarea: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_insumo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            dosis: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            id_pla_lote: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_lotes_tareas_insumos',
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
                    name: "pla_lotes_tareas_insumosxkey1",
                    using: "BTREE",
                    fields: [
                        { name: "id_pla_lote_tarea" },
                    ]
                },
                {
                    name: "pla_lotes_tareas_insumosxkey2",
                    using: "BTREE",
                    fields: [
                        { name: "cod_insumo" },
                    ]
                },
            ]
        });
        return pla_lotes_tareas_insumos;
    }
}
exports.pla_lotes_tareas_insumos = pla_lotes_tareas_insumos;
//# sourceMappingURL=pla_lotes_tareas_insumos.js.map