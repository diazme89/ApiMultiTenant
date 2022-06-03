"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanidad = void 0;
const sequelize_1 = require("sequelize");
class sanidad extends sequelize_1.Model {
    static initModel(sequelize) {
        sanidad.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'sanidad',
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
        return sanidad;
    }
}
exports.sanidad = sanidad;
//# sourceMappingURL=sanidad.js.map