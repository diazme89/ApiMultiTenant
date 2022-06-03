"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas_facturas = void 0;
const sequelize_1 = require("sequelize");
class ventas_facturas extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas_facturas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            importe_pagado: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            detalle: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            tipo_comprobante: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            },
            id_comprob_pagado: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            id_asiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            circuito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ventas_facturas',
            hasTrigger: true,
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
                    name: "ventas_facturas_id_comprob_pagado",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprob_pagado" },
                    ]
                },
                {
                    name: "ventas_facturas_id_comprobante",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
                {
                    name: "ventas_vencimientos_id_comp",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
                {
                    name: "ventas_facturas_xidasiento",
                    using: "BTREE",
                    fields: [
                        { name: "id_asiento" },
                    ]
                },
                {
                    name: "idx_ventas_facturas_xcircuito",
                    using: "BTREE",
                    fields: [
                        { name: "circuito" },
                    ]
                },
                {
                    name: "idx_ventas_facturas_xid_comprob_circuito",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                        { name: "circuito" },
                    ]
                },
            ]
        });
        return ventas_facturas;
    }
}
exports.ventas_facturas = ventas_facturas;
//# sourceMappingURL=ventas_facturas.js.map