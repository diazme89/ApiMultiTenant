"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config_parametros = void 0;
const sequelize_1 = require("sequelize");
class config_parametros extends sequelize_1.Model {
    static initModel(sequelize) {
        config_parametros.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            parametro: {
                type: sequelize_1.DataTypes.CHAR(80),
                allowNull: true
            },
            detalle: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: true
            },
            cod_circuito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(16),
                allowNull: true
            },
            valor: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            valor_numeric: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            valor_decimal: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            valor_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'config_parametros',
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
        return config_parametros;
    }
}
exports.config_parametros = config_parametros;
//# sourceMappingURL=config_parametros.js.map