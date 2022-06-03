"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stock_item = void 0;
const sequelize_1 = require("sequelize");
class stock_item extends sequelize_1.Model {
    static initModel(sequelize) {
        stock_item.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_stock: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_producto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: false
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'stock_item',
            timestamps: false
        });
        return stock_item;
    }
}
exports.stock_item = stock_item;
//# sourceMappingURL=stock_item.js.map