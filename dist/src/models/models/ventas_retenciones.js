"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas_retenciones = void 0;
const sequelize_1 = require("sequelize");
class ventas_retenciones extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas_retenciones.init({
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
            cod_unidad_negocio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            precio_con_iva: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            otras_percepciones: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cod_impuesto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_pais: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_formula: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            alicuota_apli: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            numero_retencion: {
                type: sequelize_1.DataTypes.STRING(40),
                allowNull: true
            },
            id_cierre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ventas_retenciones',
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
                    name: "compras_vencimientos_id_comp",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
                {
                    name: "ventas_retenciones_cod_cuenta",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cuenta" },
                    ]
                },
                {
                    name: "ventas_retenciones_retencion",
                    using: "BTREE",
                    fields: [
                        { name: "retencion" },
                    ]
                },
            ]
        });
        return ventas_retenciones;
    }
}
exports.ventas_retenciones = ventas_retenciones;
//# sourceMappingURL=ventas_retenciones.js.map