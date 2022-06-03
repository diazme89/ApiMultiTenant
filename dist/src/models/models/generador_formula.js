"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generador_formula = void 0;
const sequelize_1 = require("sequelize");
class generador_formula extends sequelize_1.Model {
    static initModel(sequelize) {
        generador_formula.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cod_regimen: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            formula: {
                type: sequelize_1.DataTypes.STRING(1000),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipocalculo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            montominimo: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            minimonoimp: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            alicuota: {
                type: sequelize_1.DataTypes.DECIMAL(8, 5),
                allowNull: true
            },
            valor: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            aplicaminimo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            minimoexento: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            circuito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            usa_formula_aux: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            cod_formula_aux: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            resultado: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            aplica_pagos_intersucursal: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            }
        }, {
            sequelize,
            tableName: 'generador_formula',
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
                    name: "generador_formula_idx1",
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return generador_formula;
    }
}
exports.generador_formula = generador_formula;
//# sourceMappingURL=generador_formula.js.map