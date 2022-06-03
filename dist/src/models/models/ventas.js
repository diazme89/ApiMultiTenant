"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas = void 0;
const sequelize_1 = require("sequelize");
class ventas extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas.init({
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
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_vendedor: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
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
            mostrador: {
                type: sequelize_1.DataTypes.CHAR(1),
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
            original_impreso: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            iva_importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            total: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            recibo_factura_nro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true
            },
            bonificacion_texto: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            imp_fiscal: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            iva: {
                type: sequelize_1.DataTypes.DECIMAL(4, 2),
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
            imp_internos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            ingresos_brutos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
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
            fecha_comprobante: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            tipo_recibo: {
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
            porc_bonificacion: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
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
            mueve_stock: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            anulada: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            condicion_venta: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            nro_orden_compra: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            nro_factura: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            nro_remito: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            gastos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            otras_percep: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            cod_transporte: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            neto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            talonario_manual: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cae: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            fecha_cae: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            identificador: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: true
            },
            tipo_exportacion: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            permiso_exportacion: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            pais_exportacion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            idioma_comprobante: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            afip_obs: {
                type: sequelize_1.DataTypes.CHAR(200),
                allowNull: true
            },
            afip_incoterms: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            afip_incoterms_ds: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            afip_filename_xml: {
                type: sequelize_1.DataTypes.CHAR(200),
                allowNull: true
            },
            afip_cuitdest: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: true
            },
            moneda_aux: {
                type: sequelize_1.DataTypes.CHAR(10),
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
            tipo_presupuesto: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            contrareembolso: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            observaciones_aux: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true
            },
            fac_electronica: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            afip_comprobantes_fe: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            afip_conceptos_fe: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            afip_tipdoc_fe: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            afip_fecservdesde_fe: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            afip_fecservhasta_fe: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            afip_fecvtopago_fe: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_destino: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            cod_corredor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            condicion_venta_tipo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            id_comp_asoc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_control: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            nro_autorizacion: {
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
            cod_unidad_negocio_cab: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_contrato: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_deposito_destino: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_documento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            numero_cai: {
                type: sequelize_1.DataTypes.DECIMAL(20, 0),
                allowNull: true,
                defaultValue: 0
            },
            vencimiento_cai: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_jurisdiccion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_lista_precios: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            afip_cod_barra: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cod_jurisdiccion_comerc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                defaultValue: 0
            },
            estado_im: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            fecha_entrega: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            tipo_nc: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            id_destino: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_permiso: {
                type: sequelize_1.DataTypes.CHAR(16),
                allowNull: true
            },
            pais_dest_merc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            genero_re_auto: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            cod_compatibilidad: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            cod_domicilio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha_comp_asoc: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            afip_alt_negociacion: {
                type: sequelize_1.DataTypes.CHAR(3),
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
            },
            cod_turno: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ventas',
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
                    name: "cod_compatibilidad",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_compatibilidad" },
                    ]
                },
                {
                    name: "ventas_cod_cliente",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cliente" },
                    ]
                },
                {
                    name: "ventas_cod_cuenta",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cuenta" },
                    ]
                },
                {
                    name: "ventas_cod_deposito",
                    using: "BTREE",
                    fields: [
                        { name: "cod_deposito" },
                    ]
                },
                {
                    name: "ventas_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha" },
                    ]
                },
                {
                    name: "ventas_cod_emp_fec_tipo_comp",
                    using: "BTREE",
                    fields: [
                        { name: "cod_empresa" },
                        { name: "fecha" },
                        { name: "tipo_comprobante" },
                    ]
                },
                {
                    name: "idx_ventas_numero",
                    using: "BTREE",
                    fields: [
                        { name: "numero" },
                        { name: "punto_de_venta" },
                        { name: "tipo_comprobante" },
                        { name: "tipo_factura" },
                        { name: "tag" },
                        { name: "cod_empresa" },
                        { name: "numero_cai" },
                        { name: "cod_cliente" },
                    ]
                },
                {
                    name: "idx_tipo_comp_usuario",
                    using: "BTREE",
                    fields: [
                        { name: "tipo_comprobante" },
                        { name: "usuario_fecha" },
                        { name: "usuario" },
                    ]
                },
            ]
        });
        return ventas;
    }
}
exports.ventas = ventas;
//# sourceMappingURL=ventas.js.map