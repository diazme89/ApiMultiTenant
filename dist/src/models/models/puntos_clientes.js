"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puntos_clientes = void 0;
const sequelize_1 = require("sequelize");
class puntos_clientes extends sequelize_1.Model {
    static initModel(sequelize) {
        puntos_clientes.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_punto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            clave: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            dni: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            hora: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'puntos_clientes',
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
                    name: "idx_cod_cliente",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cliente" },
                    ]
                },
            ]
        });
        return puntos_clientes;
    }
}
exports.puntos_clientes = puntos_clientes;
//# sourceMappingURL=puntos_clientes.js.map