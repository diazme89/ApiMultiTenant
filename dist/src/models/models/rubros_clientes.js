"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubros_clientes = void 0;
const sequelize_1 = require("sequelize");
class rubros_clientes extends sequelize_1.Model {
    static initModel(sequelize) {
        rubros_clientes.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_rubro_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: false,
                unique: "rubros_clientes_key1"
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'rubros_clientes',
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
                    name: "rubros_clientes_key1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_rubro_cliente" },
                    ]
                },
            ]
        });
        return rubros_clientes;
    }
}
exports.rubros_clientes = rubros_clientes;
//# sourceMappingURL=rubros_clientes.js.map