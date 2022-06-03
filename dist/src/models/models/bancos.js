"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bancos = void 0;
const sequelize_1 = require("sequelize");
class bancos extends sequelize_1.Model {
    static initModel(sequelize) {
        bancos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: false
            },
            cuit: {
                type: sequelize_1.DataTypes.CHAR(13),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'bancos',
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
        return bancos;
    }
}
exports.bancos = bancos;
//# sourceMappingURL=bancos.js.map