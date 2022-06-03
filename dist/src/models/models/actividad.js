"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actividad = void 0;
const sequelize_1 = require("sequelize");
class actividad extends sequelize_1.Model {
    static initModel(sequelize) {
        actividad.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'actividad',
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
        return actividad;
    }
}
exports.actividad = actividad;
//# sourceMappingURL=actividad.js.map