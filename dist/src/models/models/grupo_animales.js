"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grupo_animales = void 0;
const sequelize_1 = require("sequelize");
class grupo_animales extends sequelize_1.Model {
    static initModel(sequelize) {
        grupo_animales.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                unique: "grupo_animalesxkey1"
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'grupo_animales',
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
                {
                    name: "grupo_animalesxkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return grupo_animales;
    }
}
exports.grupo_animales = grupo_animales;
//# sourceMappingURL=grupo_animales.js.map