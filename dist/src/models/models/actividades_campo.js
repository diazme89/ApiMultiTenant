"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actividades_campo = void 0;
const sequelize_1 = require("sequelize");
class actividades_campo extends sequelize_1.Model {
    static initModel(sequelize) {
        actividades_campo.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'actividades_campo',
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
        return actividades_campo;
    }
}
exports.actividades_campo = actividades_campo;
//# sourceMappingURL=actividades_campo.js.map