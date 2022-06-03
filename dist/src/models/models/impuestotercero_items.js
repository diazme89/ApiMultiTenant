"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impuestotercero_items = void 0;
const sequelize_1 = require("sequelize");
class impuestotercero_items extends sequelize_1.Model {
    static initModel(sequelize) {
        impuestotercero_items.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: false,
                primaryKey: true
            },
            id_impuesto: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: false
            },
            montodesde: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            montohasta: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            base: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            excedente: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            tipocalculo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            porcentaje: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            valor: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'impuestotercero_items',
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
        return impuestotercero_items;
    }
}
exports.impuestotercero_items = impuestotercero_items;
//# sourceMappingURL=impuestotercero_items.js.map