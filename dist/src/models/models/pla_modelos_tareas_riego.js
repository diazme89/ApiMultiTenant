"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_modelos_tareas_riego = void 0;
const sequelize_1 = require("sequelize");
class pla_modelos_tareas_riego extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_modelos_tareas_riego.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            id_pla_modelo_tarea: {
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
            tableName: 'pla_modelos_tareas_riego',
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
        return pla_modelos_tareas_riego;
    }
}
exports.pla_modelos_tareas_riego = pla_modelos_tareas_riego;
//# sourceMappingURL=pla_modelos_tareas_riego.js.map