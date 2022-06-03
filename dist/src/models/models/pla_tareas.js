"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_tareas = void 0;
const sequelize_1 = require("sequelize");
class pla_tareas extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_tareas.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            cod_tarea: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_tareas',
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
        return pla_tareas;
    }
}
exports.pla_tareas = pla_tareas;
//# sourceMappingURL=pla_tareas.js.map