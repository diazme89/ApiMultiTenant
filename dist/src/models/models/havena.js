"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.havena = void 0;
const sequelize_1 = require("sequelize");
class havena extends sequelize_1.Model {
    static initModel(sequelize) {
        havena.init({
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
            tableName: 'havena',
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
        return havena;
    }
}
exports.havena = havena;
//# sourceMappingURL=havena.js.map