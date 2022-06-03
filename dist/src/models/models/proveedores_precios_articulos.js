"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proveedores_precios_articulos = void 0;
const sequelize_1 = require("sequelize");
class proveedores_precios_articulos extends sequelize_1.Model {
    static initModel(sequelize) {
        proveedores_precios_articulos.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING(150),
                allowNull: true
            },
            fila_desde: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fila_hasta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            hoja_nro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_fabricante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            articulo_descripcion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            precio_base: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            porc_1: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            porc_2: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            porc_3: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            porc_4: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            porc_5: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            utilidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            precio_costo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            precio_venta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cuenta_compra: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cuenta_venta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            iva: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            cod_rubro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_subrubro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_movimiento: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_afip_concepto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'proveedores_precios_articulos',
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
            ]
        });
        return proveedores_precios_articulos;
    }
}
exports.proveedores_precios_articulos = proveedores_precios_articulos;
//# sourceMappingURL=proveedores_precios_articulos.js.map