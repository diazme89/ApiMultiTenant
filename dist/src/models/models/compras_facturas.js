"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras_facturas = void 0;
const sequelize_1 = require("sequelize");
class compras_facturas extends sequelize_1.Model {
    static initModel(sequelize) {
        compras_facturas.init({
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
            }
        }, {
            sequelize,
            tableName: 'compras_facturas',
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
                    name: "compras_facturas_id_comprob_pagado",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprob_pagado" },
                    ]
                },
                {
                    name: "compras_facturas_id_comprobante",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
                {
                    name: "compras_facturas_xidasiento",
                    using: "BTREE",
                    fields: [
                        { name: "id_asiento" },
                    ]
                },
            ]
        });
        return compras_facturas;
    }
}
exports.compras_facturas = compras_facturas;
//# sourceMappingURL=compras_facturas.js.map