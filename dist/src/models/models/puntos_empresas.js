"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puntos_empresas = void 0;
const sequelize_1 = require("sequelize");
class puntos_empresas extends sequelize_1.Model {
    static initModel(sequelize) {
        puntos_empresas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_punto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'puntos_empresas',
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
        return puntos_empresas;
    }
}
exports.puntos_empresas = puntos_empresas;
//# sourceMappingURL=puntos_empresas.js.map