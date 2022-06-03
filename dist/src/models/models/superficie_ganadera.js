"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.superficie_ganadera = void 0;
const sequelize_1 = require("sequelize");
class superficie_ganadera extends sequelize_1.Model {
    static initModel(sequelize) {
        superficie_ganadera.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_lote: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false
            },
            periodo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: false
            },
            fecingreso: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecsalida: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'superficie_ganadera',
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
        return superficie_ganadera;
    }
}
exports.superficie_ganadera = superficie_ganadera;
//# sourceMappingURL=superficie_ganadera.js.map