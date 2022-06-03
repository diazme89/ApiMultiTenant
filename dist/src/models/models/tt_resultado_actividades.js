"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tt_resultado_actividades = void 0;
const sequelize_1 = require("sequelize");
class tt_resultado_actividades extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_resultado_actividades.init({
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: false
            },
            imagen: {
                type: sequelize_1.DataTypes.CHAR(61),
                allowNull: true
            },
            superficie: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: false
            },
            rendimiento: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: false
            },
            ingresos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: false
            },
            egresos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'tt_resultado_actividades',
            timestamps: false,
            indexes: [
                {
                    name: "resultado_actividades_key",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_actividad" },
                    ]
                },
            ]
        });
        return tt_resultado_actividades;
    }
}
exports.tt_resultado_actividades = tt_resultado_actividades;
//# sourceMappingURL=tt_resultado_actividades.js.map