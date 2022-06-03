"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actividad_periodo = void 0;
const sequelize_1 = require("sequelize");
class actividad_periodo extends sequelize_1.Model {
    static initModel(sequelize) {
        actividad_periodo.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'actividad_periodo',
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
        return actividad_periodo;
    }
}
exports.actividad_periodo = actividad_periodo;
//# sourceMappingURL=actividad_periodo.js.map