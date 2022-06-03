"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puntos_articulos = void 0;
const sequelize_1 = require("sequelize");
class puntos_articulos extends sequelize_1.Model {
    static initModel(sequelize) {
        puntos_articulos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_punto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            porcentaje: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'puntos_articulos',
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
        return puntos_articulos;
    }
}
exports.puntos_articulos = puntos_articulos;
//# sourceMappingURL=puntos_articulos.js.map