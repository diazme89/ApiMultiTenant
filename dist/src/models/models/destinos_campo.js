"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destinos_campo = void 0;
const sequelize_1 = require("sequelize");
class destinos_campo extends sequelize_1.Model {
    static initModel(sequelize) {
        destinos_campo.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'destinos_campo',
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
        return destinos_campo;
    }
}
exports.destinos_campo = destinos_campo;
//# sourceMappingURL=destinos_campo.js.map