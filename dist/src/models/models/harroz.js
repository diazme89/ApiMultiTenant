"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.harroz = void 0;
const sequelize_1 = require("sequelize");
class harroz extends sequelize_1.Model {
    static initModel(sequelize) {
        harroz.init({
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
            tableName: 'harroz',
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
        return harroz;
    }
}
exports.harroz = harroz;
//# sourceMappingURL=harroz.js.map