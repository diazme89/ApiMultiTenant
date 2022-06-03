"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orden_compra_centros_costo = void 0;
const sequelize_1 = require("sequelize");
class orden_compra_centros_costo extends sequelize_1.Model {
    static initModel(sequelize) {
        orden_compra_centros_costo.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            centro_costo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            imputacion_contable: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: true
            },
            id_orden_compra: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'orden_compra_centros_costo',
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
            ]
        });
        return orden_compra_centros_costo;
    }
}
exports.orden_compra_centros_costo = orden_compra_centros_costo;
//# sourceMappingURL=orden_compra_centros_costo.js.map