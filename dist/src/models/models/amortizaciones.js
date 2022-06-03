"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amortizaciones = void 0;
const sequelize_1 = require("sequelize");
class amortizaciones extends sequelize_1.Model {
    static initModel(sequelize) {
        amortizaciones.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            detalle: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            anio: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            vida_util: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            v_r: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            valor_inicio: {
                type: sequelize_1.DataTypes.DECIMAL(8, 1),
                allowNull: true
            },
            valor_cierre: {
                type: sequelize_1.DataTypes.DECIMAL(8, 1),
                allowNull: true
            },
            cuota_amortizacion: {
                type: sequelize_1.DataTypes.DECIMAL(8, 1),
                allowNull: true
            },
            empresa: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            valor_a_nuevo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cod_maquina: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'amortizaciones',
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
        return amortizaciones;
    }
}
exports.amortizaciones = amortizaciones;
//# sourceMappingURL=amortizaciones.js.map