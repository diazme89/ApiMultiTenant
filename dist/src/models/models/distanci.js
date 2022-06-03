"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distanci = void 0;
const sequelize_1 = require("sequelize");
class distanci extends sequelize_1.Model {
    static initModel(sequelize) {
        distanci.init({
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            descrip: {
                type: sequelize_1.DataTypes.CHAR(35),
                allowNull: true
            },
            kms: {
                type: sequelize_1.DataTypes.DECIMAL(6, 3),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            }
        }, {
            sequelize,
            tableName: 'distanci',
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
        return distanci;
    }
}
exports.distanci = distanci;
//# sourceMappingURL=distanci.js.map