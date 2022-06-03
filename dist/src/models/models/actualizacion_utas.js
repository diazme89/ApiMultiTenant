"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizacion_utas = void 0;
const sequelize_1 = require("sequelize");
class actualizacion_utas extends sequelize_1.Model {
    static initModel(sequelize) {
        actualizacion_utas.init({
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
            valor_planeamiento: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'actualizacion_utas',
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
                    name: "actualizacion_utasxkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "anio" },
                        { name: "mes" },
                    ]
                },
            ]
        });
        return actualizacion_utas;
    }
}
exports.actualizacion_utas = actualizacion_utas;
//# sourceMappingURL=actualizacion_utas.js.map