"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_puntos_ventas = void 0;
const sequelize_1 = require("sequelize");
class afip_puntos_ventas extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_puntos_ventas.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            fechadesde: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            fechahasta: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'afip_puntos_ventas',
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
        return afip_puntos_ventas;
    }
}
exports.afip_puntos_ventas = afip_puntos_ventas;
//# sourceMappingURL=afip_puntos_ventas.js.map