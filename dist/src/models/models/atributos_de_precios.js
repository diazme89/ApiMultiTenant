"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atributos_de_precios = void 0;
const sequelize_1 = require("sequelize");
class atributos_de_precios extends sequelize_1.Model {
    static initModel(sequelize) {
        atributos_de_precios.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_atributo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            circuito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: false
            },
            operador: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: false
            },
            coeficiente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 6),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'atributos_de_precios',
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
        return atributos_de_precios;
    }
}
exports.atributos_de_precios = atributos_de_precios;
//# sourceMappingURL=atributos_de_precios.js.map