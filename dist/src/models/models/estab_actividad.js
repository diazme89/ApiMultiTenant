"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estab_actividad = void 0;
const sequelize_1 = require("sequelize");
class estab_actividad extends sequelize_1.Model {
    static initModel(sequelize) {
        estab_actividad.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            id_cabecera: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'estab_actividad',
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
        return estab_actividad;
    }
}
exports.estab_actividad = estab_actividad;
//# sourceMappingURL=estab_actividad.js.map