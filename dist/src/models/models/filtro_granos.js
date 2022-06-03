"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtro_granos = void 0;
const sequelize_1 = require("sequelize");
class filtro_granos extends sequelize_1.Model {
    static initModel(sequelize) {
        filtro_granos.init({
            fecha1: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha2: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            lote: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
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
            remito: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: true
            },
            nrocp: {
                type: sequelize_1.DataTypes.DECIMAL(15, 0),
                allowNull: true
            },
            id_contrato: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'filtro_granos',
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
        return filtro_granos;
    }
}
exports.filtro_granos = filtro_granos;
//# sourceMappingURL=filtro_granos.js.map