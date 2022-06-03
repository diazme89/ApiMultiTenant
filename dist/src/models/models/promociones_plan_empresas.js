"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promociones_plan_empresas = void 0;
const sequelize_1 = require("sequelize");
class promociones_plan_empresas extends sequelize_1.Model {
    static initModel(sequelize) {
        promociones_plan_empresas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(11, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(11, 0),
                allowNull: true
            },
            id_promocion_plan: {
                type: sequelize_1.DataTypes.DECIMAL(11, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'promociones_plan_empresas',
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
        return promociones_plan_empresas;
    }
}
exports.promociones_plan_empresas = promociones_plan_empresas;
//# sourceMappingURL=promociones_plan_empresas.js.map