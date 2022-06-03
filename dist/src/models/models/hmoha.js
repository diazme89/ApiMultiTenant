"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hmoha = void 0;
const sequelize_1 = require("sequelize");
class hmoha extends sequelize_1.Model {
    static initModel(sequelize) {
        hmoha.init({
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
            tableName: 'hmoha',
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
        return hmoha;
    }
}
exports.hmoha = hmoha;
//# sourceMappingURL=hmoha.js.map