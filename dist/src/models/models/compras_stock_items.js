"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras_stock_items = void 0;
const sequelize_1 = require("sequelize");
class compras_stock_items extends sequelize_1.Model {
    static initModel(sequelize) {
        compras_stock_items.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_compras: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_stock_item: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            monto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'compras_stock_items',
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
                    name: "compras_stock_items_idx1",
                    using: "BTREE",
                    fields: [
                        { name: "id_compras" },
                    ]
                },
                {
                    name: "compras_stock_items_idx2",
                    using: "BTREE",
                    fields: [
                        { name: "id_stock_item" },
                    ]
                },
            ]
        });
        return compras_stock_items;
    }
}
exports.compras_stock_items = compras_stock_items;
//# sourceMappingURL=compras_stock_items.js.map