"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientes_impuestos = void 0;
const sequelize_1 = require("sequelize");
class clientes_impuestos extends sequelize_1.Model {
    static initModel(sequelize) {
        clientes_impuestos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_impuesto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            percepcion_porc: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            categoria: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            inscripto: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            }
        }, {
            sequelize,
            tableName: 'clientes_impuestos',
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
        return clientes_impuestos;
    }
}
exports.clientes_impuestos = clientes_impuestos;
//# sourceMappingURL=clientes_impuestos.js.map