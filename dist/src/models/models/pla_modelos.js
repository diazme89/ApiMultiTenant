"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_modelos = void 0;
const sequelize_1 = require("sequelize");
class pla_modelos extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_modelos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: true
            },
            cod_actividad: {
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
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_modelos',
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
        return pla_modelos;
    }
}
exports.pla_modelos = pla_modelos;
//# sourceMappingURL=pla_modelos.js.map