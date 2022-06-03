"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtro_cania = void 0;
const sequelize_1 = require("sequelize");
class filtro_cania extends sequelize_1.Model {
    static initModel(sequelize) {
        filtro_cania.init({
            fecha1: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha2: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            lote: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            transporte: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            destino: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: false,
                primaryKey: true
            },
            mecanizada: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            area: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            variedad: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'filtro_cania',
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
        return filtro_cania;
    }
}
exports.filtro_cania = filtro_cania;
//# sourceMappingURL=filtro_cania.js.map