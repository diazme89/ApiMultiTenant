"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_ventas_produccion = void 0;
const sequelize_1 = require("sequelize");
class pla_ventas_produccion extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_ventas_produccion.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_ventas_produccion',
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
        return pla_ventas_produccion;
    }
}
exports.pla_ventas_produccion = pla_ventas_produccion;
//# sourceMappingURL=pla_ventas_produccion.js.map