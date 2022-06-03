"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientes_destinos = void 0;
const sequelize_1 = require("sequelize");
class clientes_destinos extends sequelize_1.Model {
    static initModel(sequelize) {
        clientes_destinos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_destino: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'clientes_destinos',
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
        return clientes_destinos;
    }
}
exports.clientes_destinos = clientes_destinos;
//# sourceMappingURL=clientes_destinos.js.map