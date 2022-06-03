"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_lotes = void 0;
const sequelize_1 = require("sequelize");
class pla_lotes extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_lotes.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_pla_modelo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_lote: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_lote_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            rendimiento: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            gastos_comerciales: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cuota_amortizacion: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            mano_obra: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_lotes',
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
                    name: "pla_lotesxkey1",
                    using: "BTREE",
                    fields: [
                        { name: "cod_periodo" },
                        { name: "id_pla_modelo" },
                    ]
                },
            ]
        });
        return pla_lotes;
    }
}
exports.pla_lotes = pla_lotes;
//# sourceMappingURL=pla_lotes.js.map