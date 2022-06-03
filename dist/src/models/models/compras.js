"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras = void 0;
const sequelize_1 = require("sequelize");
class compras extends sequelize_1.Model {
    static initModel(sequelize) {
        compras.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            tipo_comprobante: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            tipo_factura: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            usuario_fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            usuario_hora: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            bonificacion: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            operacion: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            },
            tipo_operacion: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            forma_pago: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            remito_nro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            importe_iva: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            imp_internos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            ingresos_brutos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            per_iva: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            per_ingresos_brutos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            per_ganancias: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            importe_total: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            detalle: {
                type: sequelize_1.DataTypes.CHAR(255),
                allowNull: true
            },
            contado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            nro_caja: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            importe_iva_10_5: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            importe_iva_27: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            no_grabado: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            numero_viejo: {
                type: sequelize_1.DataTypes.CHAR(14),
                allowNull: true
            },
            fecha_comprobante: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            tipo_pago: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            ticket: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            moneda: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cotizacion: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            comision: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            porc_comision: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            porc_bonificacion: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            iva_por: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            porc_gastos: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            gastos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            flete: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            porc_iva_gastos: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            iva_gastos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            porc_iva_flete: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            iva_flete: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            mueve_stock: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            anulada: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_solicita: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_controla: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_autoriza: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            nro_cai: {
                type: sequelize_1.DataTypes.DECIMAL(20, 0),
                allowNull: true,
                defaultValue: 0
            },
            vencimiento_cai: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            gastos_iva_21: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            gastos_iva_27: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            gastos_iva_105: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            otras_percep: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            cod_corredor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_compra: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            nro_importacion: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: true
            },
            cod_control: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: true
            },
            diferencia_cotizacion: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            remito_id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            factura_id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_unidad_negocio_cab: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nrointerno: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_documento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_jurisdiccion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            condicion_venta_tipo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            desc_porc: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            desc_total: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            id_comp_asoc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_comp_asoc: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            num_comp_asoc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            pto_vta_comp_asoc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_nc: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            moneda_2: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cotizacion_2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true,
                defaultValue: 1.000000
            }
        }, {
            sequelize,
            tableName: 'compras',
            hasTrigger: true,
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
                    name: "idx_compras_numero",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "numero" },
                        { name: "punto_de_venta" },
                        { name: "tipo_comprobante" },
                        { name: "cod_proveedor" },
                        { name: "tipo_factura" },
                        { name: "tag" },
                        { name: "nro_cai" },
                        { name: "vencimiento_cai" },
                    ]
                },
                {
                    name: "compras_nro_comp",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "numero" },
                        { name: "cod_proveedor" },
                        { name: "punto_de_venta" },
                        { name: "tipo_comprobante" },
                        { name: "tipo_factura" },
                        { name: "tag" },
                    ]
                },
                {
                    name: "compras_cod_cuenta",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cuenta" },
                    ]
                },
                {
                    name: "compras_cod_deposito",
                    using: "BTREE",
                    fields: [
                        { name: "cod_deposito" },
                    ]
                },
                {
                    name: "compras_cod_proveedor",
                    using: "BTREE",
                    fields: [
                        { name: "cod_proveedor" },
                    ]
                },
                {
                    name: "compras_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha" },
                    ]
                },
                {
                    name: "compras_id",
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "compras_tipo_comprobante",
                    using: "BTREE",
                    fields: [
                        { name: "tipo_comprobante" },
                    ]
                },
                {
                    name: "compras_cotizacion",
                    using: "BTREE",
                    fields: [
                        { name: "cotizacion" },
                    ]
                },
                {
                    name: "compras_cod_emp_fec_tipo_comp",
                    using: "BTREE",
                    fields: [
                        { name: "cod_empresa" },
                        { name: "fecha" },
                        { name: "tipo_comprobante" },
                    ]
                },
                {
                    name: "idx_compras_xcorredor",
                    using: "BTREE",
                    fields: [
                        { name: "cod_corredor" },
                    ]
                },
                {
                    name: "idx_compras_xanulada",
                    using: "BTREE",
                    fields: [
                        { name: "anulada" },
                    ]
                },
                {
                    name: "idx_compras_tag",
                    using: "BTREE",
                    fields: [
                        { name: "tag" },
                    ]
                },
            ]
        });
        return compras;
    }
}
exports.compras = compras;
//# sourceMappingURL=compras.js.map