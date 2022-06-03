"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tareas_seguridad = void 0;
const sequelize_1 = require("sequelize");
class tareas_seguridad extends sequelize_1.Model {
    static initModel(sequelize) {
        tareas_seguridad.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_tarea: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tarea: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            uso: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            cod_concepto: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            relacion: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            usa_valor: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            }
        }, {
            sequelize,
            tableName: 'tareas_seguridad',
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
        return tareas_seguridad;
    }
}
exports.tareas_seguridad = tareas_seguridad;
//# sourceMappingURL=tareas_seguridad.js.map