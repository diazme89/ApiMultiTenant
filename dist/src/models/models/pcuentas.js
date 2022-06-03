"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pcuentas = void 0;
const sequelize_1 = require("sequelize");
class pcuentas extends sequelize_1.Model {
    static initModel(sequelize) {
        pcuentas.init({
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
            cod_contabilidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cuenta_madre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            grupo: {
                type: sequelize_1.DataTypes.STRING(3),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_cta_modelo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            imputable: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            sistema: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_unidad_negocio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cta_xestab: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            id_registro_ref: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pcuentas',
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
        return pcuentas;
    }
}
exports.pcuentas = pcuentas;
//# sourceMappingURL=pcuentas.js.map