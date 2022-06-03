"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizacion_dolar = void 0;
const sequelize_1 = require("sequelize");
class actualizacion_dolar extends sequelize_1.Model {
    static initModel(sequelize) {
        actualizacion_dolar.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            anio: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            mes: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            valor: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            valor_auxiliar: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'actualizacion_dolar',
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
                    name: "actualizacion_dolar_aniomes",
                    using: "BTREE",
                    fields: [
                        { name: "anio" },
                        { name: "mes" },
                    ]
                },
            ]
        });
        return actualizacion_dolar;
    }
}
exports.actualizacion_dolar = actualizacion_dolar;
//# sourceMappingURL=actualizacion_dolar.js.map