"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indice_de_precios = void 0;
const sequelize_1 = require("sequelize");
class indice_de_precios extends sequelize_1.Model {
    static initModel(sequelize) {
        indice_de_precios.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            periodo: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            indice: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'indice_de_precios',
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
        return indice_de_precios;
    }
}
exports.indice_de_precios = indice_de_precios;
//# sourceMappingURL=indice_de_precios.js.map