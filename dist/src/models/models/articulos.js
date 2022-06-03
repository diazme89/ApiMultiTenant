"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articulos = void 0;
const sequelize_1 = require("sequelize");
class articulos extends sequelize_1.Model {
    static initModel(sequelize) {
        articulos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                unique: "articulos_cod_articulo"
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(1000),
                allowNull: true
            },
            uni_medida: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cuenta_ventas: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            },
            cuenta_compras: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            },
            cod_rubro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_subrubro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            precio_compra: {
                type: sequelize_1.DataTypes.DECIMAL(12, 5),
                allowNull: true
            },
            stock_minimo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            stock_maximo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_fabricante: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            porcentaje_precio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            precio_venta: {
                type: sequelize_1.DataTypes.DECIMAL(12, 5),
                allowNull: true
            },
            cod_barra: {
                type: sequelize_1.DataTypes.CHAR(18),
                allowNull: true
            },
            tipo_cod_barra: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            },
            reposicion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            iva: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            coeficiente: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            unidad_venta: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            venta_minima: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            moneda: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            precio_compra_dolar: {
                type: sequelize_1.DataTypes.DECIMAL(12, 5),
                allowNull: true
            },
            precio_venta_dolar: {
                type: sequelize_1.DataTypes.DECIMAL(12, 5),
                allowNull: true
            },
            memo: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            tipo_movimiento: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            nombre_aux1: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cod_aux1: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            desc_aux1: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            nombre_aux2: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cod_aux2: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            desc_aux2: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            nombre_aux3: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cod_aux3: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            desc_aux3: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            nombre_aux4: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cod_aux4: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            desc_aux4: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            cod_cuenta_venta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cruza_remitos: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            afip_unimed: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            ubicacion: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            porcent_comision: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            compra_stock: {
                type: sequelize_1.DataTypes.DECIMAL(7, 1),
                allowNull: true
            },
            consumo_labores: {
                type: sequelize_1.DataTypes.DECIMAL(7, 1),
                allowNull: true
            },
            consumo_plantacion: {
                type: sequelize_1.DataTypes.DECIMAL(7, 1),
                allowNull: true
            },
            consumo_maquinaria: {
                type: sequelize_1.DataTypes.DECIMAL(7, 1),
                allowNull: true
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            certificado: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            carencia: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            precio_gestion: {
                type: sequelize_1.DataTypes.DECIMAL(13, 4),
                allowNull: true
            },
            precio_planeamiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            principio_activo: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            concentracion: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            cod_fabrica: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            categoria: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            existencia: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            fecha_actprecio: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_afip_concepto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            habilitado: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true,
                defaultValue: 1
            },
            descripcion_corta: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            cod_compatibilidad: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            equivalencia_um: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            cod_afip_nomenclador: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            cant_dias_entrega: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            importacion: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            exento: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            fecha_origen: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            seleccion: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            cod_variacion: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            compuesto: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            usa_seriado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            }
        }, {
            sequelize,
            tableName: 'articulos',
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
                    name: "articulos_cod_articulo",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_articulo" },
                    ]
                },
                {
                    name: "articulos_cod_proveedor",
                    using: "BTREE",
                    fields: [
                        { name: "cod_proveedor" },
                    ]
                },
                {
                    name: "articulos_cod_rubro",
                    using: "BTREE",
                    fields: [
                        { name: "cod_rubro" },
                    ]
                },
                {
                    name: "articulos_cod_subrubro",
                    using: "BTREE",
                    fields: [
                        { name: "cod_subrubro" },
                    ]
                },
                {
                    name: "articulos_xkey5",
                    using: "BTREE",
                    fields: [
                        { name: "cod_fabricante" },
                    ]
                },
                {
                    name: "articulos_cod_barra",
                    using: "BTREE",
                    fields: [
                        { name: "cod_barra" },
                    ]
                },
            ]
        });
        return articulos;
    }
}
exports.articulos = articulos;
//# sourceMappingURL=articulos.js.map