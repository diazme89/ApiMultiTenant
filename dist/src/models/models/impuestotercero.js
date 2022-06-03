"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impuestotercero = void 0;
const sequelize_1 = require("sequelize");
class impuestotercero extends sequelize_1.Model {
    static initModel(sequelize) {
        impuestotercero.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: false,
                primaryKey: true
            },
            tipo: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: false
            },
            subtipo: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: false
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: false
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: false
            },
            cuentaContable: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            minimonoimp: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            cod_regimen: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'impuestotercero',
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
                    name: "ImpuestoTercero_pk",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "ImpuestoTercero_ak1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "tipo" },
                        { name: "subtipo" },
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return impuestotercero;
    }
}
exports.impuestotercero = impuestotercero;
//# sourceMappingURL=impuestotercero.js.map