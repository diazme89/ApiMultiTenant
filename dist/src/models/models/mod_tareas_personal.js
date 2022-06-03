"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod_tareas_personal = void 0;
const sequelize_1 = require("sequelize");
class mod_tareas_personal extends sequelize_1.Model {
    static initModel(sequelize) {
        mod_tareas_personal.init({
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            dosis: {
                type: sequelize_1.DataTypes.DECIMAL(8, 3),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            item_nro: {
                type: sequelize_1.DataTypes.DECIMAL(9, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'mod_tareas_personal',
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
        return mod_tareas_personal;
    }
}
exports.mod_tareas_personal = mod_tareas_personal;
//# sourceMappingURL=mod_tareas_personal.js.map