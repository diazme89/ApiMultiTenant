"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secuencia = void 0;
const sequelize_1 = require("sequelize");
class secuencia extends sequelize_1.Model {
    static initModel(sequelize) {
        secuencia.init({
            secuencia: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: false,
                primaryKey: true
            },
            desde: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: true
            },
            hasta: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'secuencia',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "secuencia" },
                    ]
                },
            ]
        });
        return secuencia;
    }
}
exports.secuencia = secuencia;
//# sourceMappingURL=secuencia.js.map