"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtro_citrus = void 0;
const sequelize_1 = require("sequelize");
class filtro_citrus extends sequelize_1.Model {
    static initModel(sequelize) {
        filtro_citrus.init({
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
            grupo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cosechero: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
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
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            variedad: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            volcada: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'filtro_citrus',
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
        return filtro_citrus;
    }
}
exports.filtro_citrus = filtro_citrus;
//# sourceMappingURL=filtro_citrus.js.map