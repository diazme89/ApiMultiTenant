"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config_circuitos = void 0;
const sequelize_1 = require("sequelize");
class config_circuitos extends sequelize_1.Model {
    static initModel(sequelize) {
        config_circuitos.init({
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
            tableName: 'config_circuitos',
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
        return config_circuitos;
    }
}
exports.config_circuitos = config_circuitos;
//# sourceMappingURL=config_circuitos.js.map