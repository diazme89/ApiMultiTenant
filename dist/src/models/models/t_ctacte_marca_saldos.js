"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.t_ctacte_marca_saldos = void 0;
const sequelize_1 = require("sequelize");
class t_ctacte_marca_saldos extends sequelize_1.Model {
    static initModel(sequelize) {
        t_ctacte_marca_saldos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            },
            actualiza_saldo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            fecha_consulta: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "S"
            }
        }, {
            sequelize,
            tableName: 't_ctacte_marca_saldos',
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
                    name: "t_ctacte_marca_saldos_1",
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                        { name: "cod_empresa" },
                        { name: "tipo" },
                    ]
                },
            ]
        });
        return t_ctacte_marca_saldos;
    }
}
exports.t_ctacte_marca_saldos = t_ctacte_marca_saldos;
//# sourceMappingURL=t_ctacte_marca_saldos.js.map