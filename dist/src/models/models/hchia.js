"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hchia = void 0;
const sequelize_1 = require("sequelize");
class hchia extends sequelize_1.Model {
    static initModel(sequelize) {
        hchia.init({
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
            tableName: 'hchia',
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
        return hchia;
    }
}
exports.hchia = hchia;
//# sourceMappingURL=hchia.js.map