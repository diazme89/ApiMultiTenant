"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orden_de_compra_items = void 0;
const sequelize_1 = require("sequelize");
class orden_de_compra_items extends sequelize_1.Model {
    static initModel(sequelize) {
        orden_de_compra_items.init({
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
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
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
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
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
            cod_maquina: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            neto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            cod_unidad_negocio: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            precio_con_iva: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            id_np_item: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cantidad_aprobado: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            fecha_aprobado: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            hora_aprobado: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            fec_entrega_est: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            id_articulos_unid_med: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'orden_de_compra_items',
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
                    name: "orden_de_compra_items_cod_art",
                    using: "BTREE",
                    fields: [
                        { name: "cod_articulo" },
                    ]
                },
                {
                    name: "orden_de_compra_items_cod_cuenta",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cuenta" },
                    ]
                },
                {
                    name: "orden_de_compra_items_id_comp",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
            ]
        });
        return orden_de_compra_items;
    }
}
exports.orden_de_compra_items = orden_de_compra_items;
//# sourceMappingURL=orden_de_compra_items.js.map