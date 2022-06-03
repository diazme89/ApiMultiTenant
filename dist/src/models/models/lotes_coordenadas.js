"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lotes_coordenadas = void 0;
const sequelize_1 = require("sequelize");
class lotes_coordenadas extends sequelize_1.Model {
    static initModel(sequelize) {
        lotes_coordenadas.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            id_lote: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            latitud: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            longitud: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            orden: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'lotes_coordenadas',
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
        return lotes_coordenadas;
    }
}
exports.lotes_coordenadas = lotes_coordenadas;
//# sourceMappingURL=lotes_coordenadas.js.map