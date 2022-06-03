"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas_unidad_item = void 0;
const sequelize_1 = require("sequelize");
class ventas_unidad_item extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas_unidad_item.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_item: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_um_capacidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_um_peso: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ventas_unidad_item',
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
                    name: "ventas_um_cap_idx",
                    using: "BTREE",
                    fields: [
                        { name: "id_um_capacidad" },
                    ]
                },
                {
                    name: "ventas_um_peso_idx",
                    using: "BTREE",
                    fields: [
                        { name: "id_um_peso" },
                    ]
                },
            ]
        });
        return ventas_unidad_item;
    }
}
exports.ventas_unidad_item = ventas_unidad_item;
//# sourceMappingURL=ventas_unidad_item.js.map