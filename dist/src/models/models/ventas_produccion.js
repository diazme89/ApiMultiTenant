"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas_produccion = void 0;
const sequelize_1 = require("sequelize");
class ventas_produccion extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas_produccion.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_produccion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            peso: {
                type: sequelize_1.DataTypes.DECIMAL(18, 4),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'ventas_produccion',
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
                    name: "ventas_items_key1",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
                {
                    name: "ventas_items_key2",
                    using: "BTREE",
                    fields: [
                        { name: "id_produccion" },
                    ]
                },
            ]
        });
        return ventas_produccion;
    }
}
exports.ventas_produccion = ventas_produccion;
//# sourceMappingURL=ventas_produccion.js.map