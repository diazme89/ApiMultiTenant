"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec_clientes = void 0;
const sequelize_1 = require("sequelize");
class ec_clientes extends sequelize_1.Model {
    static initModel(sequelize) {
        ec_clientes.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true,
                unique: "cod_cliente"
            },
            apellido: {
                type: sequelize_1.DataTypes.CHAR(25),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(25),
                allowNull: true
            },
            dni: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            fecha_nacimiento: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            clave: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.STRING(1000),
                allowNull: true
            },
            fecha_alta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            provincia: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            cod_cliente_infomanager: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ec_clientes',
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
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_cliente" },
                    ]
                },
            ]
        });
        return ec_clientes;
    }
}
exports.ec_clientes = ec_clientes;
//# sourceMappingURL=ec_clientes.js.map