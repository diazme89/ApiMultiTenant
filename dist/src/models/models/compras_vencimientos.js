"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras_vencimientos = void 0;
const sequelize_1 = require("sequelize");
class compras_vencimientos extends sequelize_1.Model {
    static initModel(sequelize) {
        compras_vencimientos.init({
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
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.CHAR(80),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'compras_vencimientos',
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
                    name: "compras_vencimientos_id_comp",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
            ]
        });
        return compras_vencimientos;
    }
}
exports.compras_vencimientos = compras_vencimientos;
//# sourceMappingURL=compras_vencimientos.js.map