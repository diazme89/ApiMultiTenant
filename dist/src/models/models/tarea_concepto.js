"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tarea_concepto = void 0;
const sequelize_1 = require("sequelize");
class tarea_concepto extends sequelize_1.Model {
    static initModel(sequelize) {
        tarea_concepto.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_concepto: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            concepto: {
                type: sequelize_1.DataTypes.STRING(40),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tarea_concepto',
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
        return tarea_concepto;
    }
}
exports.tarea_concepto = tarea_concepto;
//# sourceMappingURL=tarea_concepto.js.map