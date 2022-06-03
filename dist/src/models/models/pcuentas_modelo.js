"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pcuentas_modelo = void 0;
const sequelize_1 = require("sequelize");
class pcuentas_modelo extends sequelize_1.Model {
    static initModel(sequelize) {
        pcuentas_modelo.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            tipo_cuenta: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            id_cuenta_madre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            grupo: {
                type: sequelize_1.DataTypes.STRING(3),
                allowNull: true
            },
            imputable: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pcuentas_modelo',
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
                    name: "idx_pcuentas_modelo_xcodcuenta",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_cuenta" },
                        { name: "grupo" },
                        { name: "id_cuenta_madre" },
                        { name: "imputable" },
                    ]
                },
            ]
        });
        return pcuentas_modelo;
    }
}
exports.pcuentas_modelo = pcuentas_modelo;
//# sourceMappingURL=pcuentas_modelo.js.map