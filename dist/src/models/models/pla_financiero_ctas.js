"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_financiero_ctas = void 0;
const sequelize_1 = require("sequelize");
class pla_financiero_ctas extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_financiero_ctas.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            id_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cuenta_madre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            grupo: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_financiero_ctas',
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
                    name: "pla_financiero_ctasxkey1",
                    using: "BTREE",
                    fields: [
                        { name: "cod_periodo" },
                        { name: "cod_cuenta_madre" },
                        { name: "grupo" },
                    ]
                },
                {
                    name: "pla_financiero_ctasxkey2",
                    using: "BTREE",
                    fields: [
                        { name: "cod_periodo" },
                        { name: "id_cuenta" },
                    ]
                },
                {
                    name: "pla_financiero_ctasxkey3",
                    using: "BTREE",
                    fields: [
                        { name: "cod_periodo" },
                        { name: "grupo" },
                    ]
                },
            ]
        });
        return pla_financiero_ctas;
    }
}
exports.pla_financiero_ctas = pla_financiero_ctas;
//# sourceMappingURL=pla_financiero_ctas.js.map