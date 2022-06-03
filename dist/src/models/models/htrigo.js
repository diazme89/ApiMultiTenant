"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htrigo = void 0;
const sequelize_1 = require("sequelize");
class htrigo extends sequelize_1.Model {
    static initModel(sequelize) {
        htrigo.init({
            humedad: {
                type: sequelize_1.DataTypes.DECIMAL(3, 1),
                allowNull: true
            },
            merma: {
                type: sequelize_1.DataTypes.DECIMAL(4, 2),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            }
        }, {
            sequelize,
            tableName: 'htrigo',
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
        return htrigo;
    }
}
exports.htrigo = htrigo;
//# sourceMappingURL=htrigo.js.map