"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec_ventas_items = void 0;
const sequelize_1 = require("sequelize");
class ec_ventas_items extends sequelize_1.Model {
    static initModel(sequelize) {
        ec_ventas_items.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            id_mercadolibre: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: false
            },
            id_item_ml: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: false
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            detalle: {
                type: sequelize_1.DataTypes.CHAR(250),
                allowNull: true
            },
            precio_con_iva: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            fecha_entrega: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            id_ecommerce: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ec_ventas_items',
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
        return ec_ventas_items;
    }
}
exports.ec_ventas_items = ec_ventas_items;
//# sourceMappingURL=ec_ventas_items.js.map