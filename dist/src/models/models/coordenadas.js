"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coordenadas = void 0;
const sequelize_1 = require("sequelize");
class coordenadas extends sequelize_1.Model {
    static initModel(sequelize) {
        coordenadas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo_lote: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            num_objeto: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            punto: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            lat_grados: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true
            },
            lat_minutos: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true
            },
            lat_segundos: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true
            },
            long_grados: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true
            },
            long_minutos: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true
            },
            long_segundos: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'coordenadas',
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
        return coordenadas;
    }
}
exports.coordenadas = coordenadas;
//# sourceMappingURL=coordenadas.js.map