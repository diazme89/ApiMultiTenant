"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtro_vales = void 0;
const sequelize_1 = require("sequelize");
class filtro_vales extends sequelize_1.Model {
    static initModel(sequelize) {
        filtro_vales.init({
            fecha1: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha2: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ajuste: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            },
            motivo: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            fecha_carga: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            destino: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            nro_vale_entrega: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: true
            },
            nro_vale: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_solicitante: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_retira: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'filtro_vales',
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
        return filtro_vales;
    }
}
exports.filtro_vales = filtro_vales;
//# sourceMappingURL=filtro_vales.js.map