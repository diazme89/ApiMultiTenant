"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plan = void 0;
const sequelize_1 = require("sequelize");
class plan extends sequelize_1.Model {
    static initModel(sequelize) {
        plan.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true,
                unique: "plan_codigo"
            },
            cuenta_madre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            imputable: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            resultado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            detalle: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cod_unidad_negocio: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            tipo_cotizacion: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            },
            niveles: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            cod_rubro_iva: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cuenta_monetaria: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'plan',
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
                {
                    name: "plan_codigo",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
                {
                    name: "plan_cuenta_madre",
                    using: "BTREE",
                    fields: [
                        { name: "cuenta_madre" },
                    ]
                },
            ]
        });
        return plan;
    }
}
exports.plan = plan;
//# sourceMappingURL=plan.js.map