"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas_items = void 0;
const sequelize_1 = require("sequelize");
class ventas_items extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas_items.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(16, 6),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            detalle: {
                type: sequelize_1.DataTypes.STRING(1000),
                allowNull: true
            },
            editar_precio: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            descuento: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            iva_por: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            iva_importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_remito_compra: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_remito_venta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            precio_compra_actual: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            id_articulos_unid_med: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_unidad_negocio: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            descuento_porc: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            precio_orig: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            fe_permiso: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            fe_pais_dest: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            precio_con_iva: {
                type: sequelize_1.DataTypes.DECIMAL(16, 6),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            cod_lista_precios: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            orden: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            item_tipo_interes: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true,
                defaultValue: 0
            },
            remanente: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            fecha_entrega: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            equivalencia_um: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            afip_unidad_de_medida: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            estado_item: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true,
                defaultValue: "OK"
            },
            cod_vendedor: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            detalle_aux: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ventas_items',
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
                    name: "ventas_items_cod_articulo",
                    using: "BTREE",
                    fields: [
                        { name: "cod_articulo" },
                    ]
                },
                {
                    name: "ventas_items_cod_cuenta",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cuenta" },
                    ]
                },
                {
                    name: "ventas_items_id_comp",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
                {
                    name: "ventas_items_articulo_comprobante",
                    using: "BTREE",
                    fields: [
                        { name: "cod_articulo" },
                        { name: "id_comprobante" },
                    ]
                },
            ]
        });
        return ventas_items;
    }
}
exports.ventas_items = ventas_items;
//# sourceMappingURL=ventas_items.js.map