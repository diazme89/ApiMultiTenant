"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_egresos_actividad = void 0;
const sequelize_1 = require("sequelize");
class pla_egresos_actividad extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_egresos_actividad.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            id_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
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
            tableName: 'pla_egresos_actividad',
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
        return pla_egresos_actividad;
    }
}
exports.pla_egresos_actividad = pla_egresos_actividad;
//# sourceMappingURL=pla_egresos_actividad.js.map