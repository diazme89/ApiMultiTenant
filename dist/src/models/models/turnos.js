"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.turnos = void 0;
const sequelize_1 = require("sequelize");
class turnos extends sequelize_1.Model {
    static initModel(sequelize) {
        turnos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'turnos',
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
        return turnos;
    }
}
exports.turnos = turnos;
//# sourceMappingURL=turnos.js.map