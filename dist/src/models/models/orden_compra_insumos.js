"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orden_compra_insumos = void 0;
const sequelize_1 = require("sequelize");
class orden_compra_insumos extends sequelize_1.Model {
    static initModel(sequelize) {
        orden_compra_insumos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_orden_compra: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(15, 3),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: true
            },
            iva: {
                type: sequelize_1.DataTypes.DECIMAL(3, 1),
                allowNull: true
            },
            observacion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            cod_insumo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            insumo_descripcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'orden_compra_insumos',
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
        return orden_compra_insumos;
    }
}
exports.orden_compra_insumos = orden_compra_insumos;
//# sourceMappingURL=orden_compra_insumos.js.map