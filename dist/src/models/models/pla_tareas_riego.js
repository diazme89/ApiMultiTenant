"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_tareas_riego = void 0;
const sequelize_1 = require("sequelize");
class pla_tareas_riego extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_tareas_riego.init({
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 3),
                allowNull: true
            },
            dosis: {
                type: sequelize_1.DataTypes.DECIMAL(10, 5),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            item_nro: {
                type: sequelize_1.DataTypes.DECIMAL(9, 3),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_tareas_riego',
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
        return pla_tareas_riego;
    }
}
exports.pla_tareas_riego = pla_tareas_riego;
//# sourceMappingURL=pla_tareas_riego.js.map