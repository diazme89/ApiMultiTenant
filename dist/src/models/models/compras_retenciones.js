"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras_retenciones = void 0;
const sequelize_1 = require("sequelize");
class compras_retenciones extends sequelize_1.Model {
    static initModel(sequelize) {
        compras_retenciones.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            retencion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            iva_por: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            alicuota_apli: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            monto_impo: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            cod_unidad_negocio: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_formula: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nro_retencion: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            cod_impuesto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_pais: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'compras_retenciones',
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
                    name: "compras_retenciones_cod_cuenta",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cuenta" },
                    ]
                },
                {
                    name: "compras_retenciones_retencion",
                    using: "BTREE",
                    fields: [
                        { name: "retencion" },
                    ]
                },
                {
                    name: "compras_vencimientos_id_comp",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
            ]
        });
        return compras_retenciones;
    }
}
exports.compras_retenciones = compras_retenciones;
//# sourceMappingURL=compras_retenciones.js.map