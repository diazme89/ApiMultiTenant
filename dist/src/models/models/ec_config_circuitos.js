"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec_config_circuitos = void 0;
const sequelize_1 = require("sequelize");
class ec_config_circuitos extends sequelize_1.Model {
    static initModel(sequelize) {
        ec_config_circuitos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(80),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ec_config_circuitos',
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
        return ec_config_circuitos;
    }
}
exports.ec_config_circuitos = ec_config_circuitos;
//# sourceMappingURL=ec_config_circuitos.js.map