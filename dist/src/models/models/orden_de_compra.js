"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orden_de_compra = void 0;
const sequelize_1 = require("sequelize");
class orden_de_compra extends sequelize_1.Model {
    static initModel(sequelize) {
        orden_de_compra.init({
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
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            remito_nro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(15, 0),
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
            importe_total: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            detalle: {
                type: sequelize_1.DataTypes.STRING(500),
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
            emisor: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            autorizador: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            datos_empresa: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            factura_id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
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
            cod_autoriza: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_emite: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_solicita: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            tipo_pago: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            moneda: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cotizacion: {
                type: sequelize_1.DataTypes.DECIMAL(8, 3),
                allowNull: true
            },
            fact_pto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            fact_numero: {
                type: sequelize_1.DataTypes.DECIMAL(15, 0),
                allowNull: true
            },
            fact_fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            rem_numero: {
                type: sequelize_1.DataTypes.DECIMAL(15, 0),
                allowNull: true
            },
            recibida: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            aprobado: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            anulada: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            remito_id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            solicita_id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            autoriza_id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            condicion_de_pago: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.STRING(1000),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'orden_de_compra',
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
                    name: "orden_de_compra_cod_cuenta",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cuenta" },
                    ]
                },
                {
                    name: "orden_de_compra_cod_deposito",
                    using: "BTREE",
                    fields: [
                        { name: "cod_deposito" },
                    ]
                },
                {
                    name: "orden_de_compra_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha" },
                    ]
                },
                {
                    name: "orden_de_compra_tipo_comprobante",
                    using: "BTREE",
                    fields: [
                        { name: "tipo_comprobante" },
                    ]
                },
                {
                    name: "orden_de_compra_factura_id",
                    using: "BTREE",
                    fields: [
                        { name: "factura_id" },
                    ]
                },
                {
                    name: "orden_de_compra_cod_empresa_fecha_tipo_comp",
                    using: "BTREE",
                    fields: [
                        { name: "cod_empresa" },
                        { name: "fecha" },
                        { name: "tipo_comprobante" },
                    ]
                },
            ]
        });
        return orden_de_compra;
    }
}
exports.orden_de_compra = orden_de_compra;
//# sourceMappingURL=orden_de_compra.js.map