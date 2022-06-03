"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras_comprob_ingresos_bruto = void 0;
const sequelize_1 = require("sequelize");
class compras_comprob_ingresos_bruto extends sequelize_1.Model {
    static initModel(sequelize) {
        compras_comprob_ingresos_bruto.init({
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
            tipo_juridico_fisico: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            fecha_ret: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'compras_comprob_ingresos_bruto',
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
                    name: "compras_comprob_ingresos_bruto_pk",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "compras_comprob_ingresos_bruto_ak1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "numero" },
                        { name: "cod_empresa" },
                        { name: "tipo_juridico_fisico" },
                    ]
                },
                {
                    name: "compras_comprob_ingresos_bruto_ak2",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                        { name: "cod_empresa" },
                        { name: "tipo_juridico_fisico" },
                    ]
                },
            ]
        });
        return compras_comprob_ingresos_bruto;
    }
}
exports.compras_comprob_ingresos_bruto = compras_comprob_ingresos_bruto;
//# sourceMappingURL=compras_comprob_ingresos_bruto.js.map