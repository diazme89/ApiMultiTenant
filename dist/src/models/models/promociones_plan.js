"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promociones_plan = void 0;
const sequelize_1 = require("sequelize");
class promociones_plan extends sequelize_1.Model {
    static initModel(sequelize) {
        promociones_plan.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_promocion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            porc_descuento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cant_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cant_articulo_aplica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            dia_lunes: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            dia_martes: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            dia_miercoles: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            dia_jueves: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            dia_viernes: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            dia_sabado: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            dia_domingo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            cant_minima: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            cant_maxima: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            precio_lp: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            precio_neto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'promociones_plan',
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
        return promociones_plan;
    }
}
exports.promociones_plan = promociones_plan;
//# sourceMappingURL=promociones_plan.js.map