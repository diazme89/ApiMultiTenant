"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tareas_precios = void 0;
const sequelize_1 = require("sequelize");
class tareas_precios extends sequelize_1.Model {
    static initModel(sequelize) {
        tareas_precios.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_tarea: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: true
            },
            descrip: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tareas_precios',
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
        return tareas_precios;
    }
}
exports.tareas_precios = tareas_precios;
//# sourceMappingURL=tareas_precios.js.map