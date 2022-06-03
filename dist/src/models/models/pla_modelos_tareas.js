"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_modelos_tareas = void 0;
const sequelize_1 = require("sequelize");
class pla_modelos_tareas extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_modelos_tareas.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            id_pla_modelo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_tarea: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            orden: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            mes: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            anio: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            porc_superficie: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            superficie: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_modelos_tareas',
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
        return pla_modelos_tareas;
    }
}
exports.pla_modelos_tareas = pla_modelos_tareas;
//# sourceMappingURL=pla_modelos_tareas.js.map