"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientes_domicilios = void 0;
const sequelize_1 = require("sequelize");
class clientes_domicilios extends sequelize_1.Model {
    static initModel(sequelize) {
        clientes_domicilios.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_domicilio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            domicilio: {
                type: sequelize_1.DataTypes.STRING(400),
                allowNull: true
            },
            predefinido: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            num_telefono: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            },
            num_contacto: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'clientes_domicilios',
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
        return clientes_domicilios;
    }
}
exports.clientes_domicilios = clientes_domicilios;
//# sourceMappingURL=clientes_domicilios.js.map