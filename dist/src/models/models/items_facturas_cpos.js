"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.items_facturas_cpos = void 0;
const sequelize_1 = require("sequelize");
class items_facturas_cpos extends sequelize_1.Model {
    static initModel(sequelize) {
        items_facturas_cpos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_item_factura: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_factura: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_item_cpo_asociado: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_cpo_asociado: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_cpo_asociado: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cantidad_item_asociado: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'items_facturas_cpos',
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
                    name: "items_facturas_cpos_xkey1",
                    using: "BTREE",
                    fields: [
                        { name: "tipo_cpo_asociado" },
                        { name: "id_cpo_asociado" },
                        { name: "id_item_cpo_asociado" },
                    ]
                },
            ]
        });
        return items_facturas_cpos;
    }
}
exports.items_facturas_cpos = items_facturas_cpos;
//# sourceMappingURL=items_facturas_cpos.js.map