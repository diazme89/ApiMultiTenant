"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras_comprob_retencion = void 0;
const sequelize_1 = require("sequelize");
class compras_comprob_retencion extends sequelize_1.Model {
    static initModel(sequelize) {
        compras_comprob_retencion.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(15, 0),
                allowNull: false
            },
            id_impuestoTercero: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: false
            },
            declaracion_jurada_periodo: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            declaracion_jurada_presentacion: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            tipo_retencion: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'compras_comprob_retencion',
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
                    name: "compras_comprob_retencion_pk",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "compras_comprob_retencion_ak1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "numero" },
                        { name: "cod_empresa" },
                        { name: "tipo_retencion" },
                    ]
                },
                {
                    name: "compras_comprob_retencion_ak2",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                        { name: "id_impuestoTercero" },
                        { name: "cod_empresa" },
                    ]
                },
            ]
        });
        return compras_comprob_retencion;
    }
}
exports.compras_comprob_retencion = compras_comprob_retencion;
//# sourceMappingURL=compras_comprob_retencion.js.map