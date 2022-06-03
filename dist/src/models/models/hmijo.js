"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hmijo = void 0;
const sequelize_1 = require("sequelize");
class hmijo extends sequelize_1.Model {
    static initModel(sequelize) {
        hmijo.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            humedad: {
                type: sequelize_1.DataTypes.DECIMAL(3, 1),
                allowNull: true
            },
            merma: {
                type: sequelize_1.DataTypes.DECIMAL(4, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'hmijo',
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
        return hmijo;
    }
}
exports.hmijo = hmijo;
//# sourceMappingURL=hmijo.js.map