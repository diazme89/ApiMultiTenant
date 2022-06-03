"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_comercializacion = void 0;
const sequelize_1 = require("sequelize");
class pla_comercializacion extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_comercializacion.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                defaultValue: 0
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                defaultValue: 0
            },
            tipo_operacion: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            precio_operacion: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            prima_operacion: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            importe_total_precio: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            importe_total_prima: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            fecha_compromiso: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_comercializacion',
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
        return pla_comercializacion;
    }
}
exports.pla_comercializacion = pla_comercializacion;
//# sourceMappingURL=pla_comercializacion.js.map