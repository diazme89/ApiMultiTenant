"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grupo_caracteristicas = void 0;
const sequelize_1 = require("sequelize");
class grupo_caracteristicas extends sequelize_1.Model {
    static initModel(sequelize) {
        grupo_caracteristicas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'grupo_caracteristicas',
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
        return grupo_caracteristicas;
    }
}
exports.grupo_caracteristicas = grupo_caracteristicas;
//# sourceMappingURL=grupo_caracteristicas.js.map