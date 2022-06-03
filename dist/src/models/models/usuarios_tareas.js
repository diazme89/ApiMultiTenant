"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios_tareas = void 0;
const sequelize_1 = require("sequelize");
class usuarios_tareas extends sequelize_1.Model {
    static initModel(sequelize) {
        usuarios_tareas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_usuario: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_tarea: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            valor: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true,
                defaultValue: 0.000000
            }
        }, {
            sequelize,
            tableName: 'usuarios_tareas',
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
        return usuarios_tareas;
    }
}
exports.usuarios_tareas = usuarios_tareas;
//# sourceMappingURL=usuarios_tareas.js.map