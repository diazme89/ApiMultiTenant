"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colores = void 0;
const sequelize_1 = require("sequelize");
class colores extends sequelize_1.Model {
    static initModel(sequelize) {
        colores.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_color: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false
            },
            color: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'colores',
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
        return colores;
    }
}
exports.colores = colores;
//# sourceMappingURL=colores.js.map