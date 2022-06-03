"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec_carrito = void 0;
const sequelize_1 = require("sequelize");
class ec_carrito extends sequelize_1.Model {
    static initModel(sequelize) {
        ec_carrito.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            observacion: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true,
                defaultValue: "Pendiente"
            }
        }, {
            sequelize,
            tableName: 'ec_carrito',
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
                    name: "cod_cliente",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cliente" },
                    ]
                },
                {
                    name: "cod_articulo",
                    using: "BTREE",
                    fields: [
                        { name: "cod_articulo" },
                    ]
                },
                {
                    name: "fecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha" },
                    ]
                },
            ]
        });
        return ec_carrito;
    }
}
exports.ec_carrito = ec_carrito;
//# sourceMappingURL=ec_carrito.js.map