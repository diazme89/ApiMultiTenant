"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas_items_serie = void 0;
const sequelize_1 = require("sequelize");
class ventas_items_serie extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas_items_serie.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_serie: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_item: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ventas_items_serie',
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
                    name: "idx_vis_item",
                    using: "BTREE",
                    fields: [
                        { name: "id_item" },
                    ]
                },
                {
                    name: "idx_vis_serie",
                    using: "BTREE",
                    fields: [
                        { name: "id_serie" },
                    ]
                },
            ]
        });
        return ventas_items_serie;
    }
}
exports.ventas_items_serie = ventas_items_serie;
//# sourceMappingURL=ventas_items_serie.js.map