"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas_vencimientos = void 0;
const sequelize_1 = require("sequelize");
class ventas_vencimientos extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas_vencimientos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            vencimiento: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'ventas_vencimientos',
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
                    name: "ventas_vencimientos_id_comp",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
                {
                    name: "ventas_vencimientos_vencimiento",
                    using: "BTREE",
                    fields: [
                        { name: "vencimiento" },
                    ]
                },
            ]
        });
        return ventas_vencimientos;
    }
}
exports.ventas_vencimientos = ventas_vencimientos;
//# sourceMappingURL=ventas_vencimientos.js.map