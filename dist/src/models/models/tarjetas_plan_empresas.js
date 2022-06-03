"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tarjetas_plan_empresas = void 0;
const sequelize_1 = require("sequelize");
class tarjetas_plan_empresas extends sequelize_1.Model {
    static initModel(sequelize) {
        tarjetas_plan_empresas.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            id_tarjeta_plan: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            }
        }, {
            sequelize,
            tableName: 'tarjetas_plan_empresas',
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
                    name: "tarjetas_plan_empresas_xkey1",
                    using: "BTREE",
                    fields: [
                        { name: "id_tarjeta_plan" },
                    ]
                },
            ]
        });
        return tarjetas_plan_empresas;
    }
}
exports.tarjetas_plan_empresas = tarjetas_plan_empresas;
//# sourceMappingURL=tarjetas_plan_empresas.js.map