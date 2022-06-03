"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientes_acuerdos = void 0;
const sequelize_1 = require("sequelize");
class clientes_acuerdos extends sequelize_1.Model {
    static initModel(sequelize) {
        clientes_acuerdos.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha_desde: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_hasta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            valor: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'clientes_acuerdos',
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
                    name: "clientes_acuerdos_xkey1",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cliente" },
                    ]
                },
            ]
        });
        return clientes_acuerdos;
    }
}
exports.clientes_acuerdos = clientes_acuerdos;
//# sourceMappingURL=clientes_acuerdos.js.map