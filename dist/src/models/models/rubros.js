"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubros = void 0;
const sequelize_1 = require("sequelize");
class rubros extends sequelize_1.Model {
    static initModel(sequelize) {
        rubros.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_rubro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            tipo_rubro: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            solo_campo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'rubros',
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
                    name: "rubros_cod_rubro",
                    using: "BTREE",
                    fields: [
                        { name: "cod_rubro" },
                    ]
                },
            ]
        });
        return rubros;
    }
}
exports.rubros = rubros;
//# sourceMappingURL=rubros.js.map