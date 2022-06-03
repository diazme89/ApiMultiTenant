"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_insumos_items = void 0;
const sequelize_1 = require("sequelize");
class pla_insumos_items extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_insumos_items.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            id_cabecera: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            mes: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            anio: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_insumos_items',
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
                    name: "pla_insumos_itemsxkey1",
                    using: "BTREE",
                    fields: [
                        { name: "id_cabecera" },
                    ]
                },
            ]
        });
        return pla_insumos_items;
    }
}
exports.pla_insumos_items = pla_insumos_items;
//# sourceMappingURL=pla_insumos_items.js.map