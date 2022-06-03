"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puntos_de_reposicion = void 0;
const sequelize_1 = require("sequelize");
class puntos_de_reposicion extends sequelize_1.Model {
    static initModel(sequelize) {
        puntos_de_reposicion.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            punto_reposicion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'puntos_de_reposicion',
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
                    name: "idx_art_depo",
                    using: "BTREE",
                    fields: [
                        { name: "cod_articulo" },
                        { name: "cod_deposito" },
                    ]
                },
            ]
        });
        return puntos_de_reposicion;
    }
}
exports.puntos_de_reposicion = puntos_de_reposicion;
//# sourceMappingURL=puntos_de_reposicion.js.map