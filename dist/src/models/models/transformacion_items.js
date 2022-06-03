"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformacion_items = void 0;
const sequelize_1 = require("sequelize");
class transformacion_items extends sequelize_1.Model {
    static initModel(sequelize) {
        transformacion_items.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_transformacion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            cantidad_total: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            id_um: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_stock: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'transformacion_items',
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
        return transformacion_items;
    }
}
exports.transformacion_items = transformacion_items;
//# sourceMappingURL=transformacion_items.js.map