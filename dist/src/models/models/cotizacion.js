"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cotizacion = void 0;
const sequelize_1 = require("sequelize");
class cotizacion extends sequelize_1.Model {
    static initModel(sequelize) {
        cotizacion.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            valor: {
                type: sequelize_1.DataTypes.DECIMAL(15, 5),
                allowNull: true
            },
            id_moneda: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            valor_compra: {
                type: sequelize_1.DataTypes.DECIMAL(15, 5),
                allowNull: true
            },
            valor_venta: {
                type: sequelize_1.DataTypes.DECIMAL(15, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'cotizacion',
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
                    name: "cotizacion_fecha_moneda",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id_moneda" },
                        { name: "fecha" },
                    ]
                },
            ]
        });
        return cotizacion;
    }
}
exports.cotizacion = cotizacion;
//# sourceMappingURL=cotizacion.js.map