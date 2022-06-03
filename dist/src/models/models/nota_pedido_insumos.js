"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nota_pedido_insumos = void 0;
const sequelize_1 = require("sequelize");
class nota_pedido_insumos extends sequelize_1.Model {
    static initModel(sequelize) {
        nota_pedido_insumos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(15, 3),
                allowNull: true
            },
            fecha_necesidad: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ejecutada: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            id_nota_pedido: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            incorporar_stock: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_insumo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            insumo_descripcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            existencia: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'nota_pedido_insumos',
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
        return nota_pedido_insumos;
    }
}
exports.nota_pedido_insumos = nota_pedido_insumos;
//# sourceMappingURL=nota_pedido_insumos.js.map