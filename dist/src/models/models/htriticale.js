"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htriticale = void 0;
const sequelize_1 = require("sequelize");
class htriticale extends sequelize_1.Model {
    static initModel(sequelize) {
        htriticale.init({
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
            tableName: 'htriticale',
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
        return htriticale;
    }
}
exports.htriticale = htriticale;
//# sourceMappingURL=htriticale.js.map