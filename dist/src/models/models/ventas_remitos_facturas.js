"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas_remitos_facturas = void 0;
const sequelize_1 = require("sequelize");
class ventas_remitos_facturas extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas_remitos_facturas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_remito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_factura: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'ventas_remitos_facturas',
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
                    name: "ventas_remitos_facturas_idx1",
                    using: "BTREE",
                    fields: [
                        { name: "id_factura" },
                    ]
                },
                {
                    name: "ventas_remitos_facturas_idx2",
                    using: "BTREE",
                    fields: [
                        { name: "id_remito" },
                    ]
                },
            ]
        });
        return ventas_remitos_facturas;
    }
}
exports.ventas_remitos_facturas = ventas_remitos_facturas;
//# sourceMappingURL=ventas_remitos_facturas.js.map