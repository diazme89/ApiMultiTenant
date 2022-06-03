"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lote_actividad_up = void 0;
const sequelize_1 = require("sequelize");
class lote_actividad_up extends sequelize_1.Model {
    static initModel(sequelize) {
        lote_actividad_up.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            cod_up: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_lote_act: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                unique: "lote_actividad_upxkey1"
            }
        }, {
            sequelize,
            tableName: 'lote_actividad_up',
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
                    name: "lote_actividad_upxkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id_lote_act" },
                    ]
                },
            ]
        });
        return lote_actividad_up;
    }
}
exports.lote_actividad_up = lote_actividad_up;
//# sourceMappingURL=lote_actividad_up.js.map