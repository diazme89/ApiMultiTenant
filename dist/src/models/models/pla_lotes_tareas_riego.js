"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_lotes_tareas_riego = void 0;
const sequelize_1 = require("sequelize");
class pla_lotes_tareas_riego extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_lotes_tareas_riego.init({
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
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            dosis: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_lotes_tareas_riego',
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
        return pla_lotes_tareas_riego;
    }
}
exports.pla_lotes_tareas_riego = pla_lotes_tareas_riego;
//# sourceMappingURL=pla_lotes_tareas_riego.js.map