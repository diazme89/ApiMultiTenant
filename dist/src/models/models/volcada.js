"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volcada = void 0;
const sequelize_1 = require("sequelize");
class volcada extends sequelize_1.Model {
    static initModel(sequelize) {
        volcada.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            fabrica: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            interno: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            exportacion: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            descarte: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'volcada',
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
        return volcada;
    }
}
exports.volcada = volcada;
//# sourceMappingURL=volcada.js.map