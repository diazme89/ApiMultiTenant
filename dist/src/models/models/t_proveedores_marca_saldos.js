"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.t_proveedores_marca_saldos = void 0;
const sequelize_1 = require("sequelize");
class t_proveedores_marca_saldos extends sequelize_1.Model {
    static initModel(sequelize) {
        t_proveedores_marca_saldos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            actualiza_saldo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 't_proveedores_marca_saldos',
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
        return t_proveedores_marca_saldos;
    }
}
exports.t_proveedores_marca_saldos = t_proveedores_marca_saldos;
//# sourceMappingURL=t_proveedores_marca_saldos.js.map