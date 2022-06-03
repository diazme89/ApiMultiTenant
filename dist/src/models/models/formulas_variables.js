"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formulas_variables = void 0;
const sequelize_1 = require("sequelize");
class formulas_variables extends sequelize_1.Model {
    static initModel(sequelize) {
        formulas_variables.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: false
            },
            interno: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: false
            },
            origen: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: false
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: false
            },
            formula: {
                type: sequelize_1.DataTypes.STRING(1000),
                allowNull: false
            },
            circuito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'formulas_variables',
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
        return formulas_variables;
    }
}
exports.formulas_variables = formulas_variables;
//# sourceMappingURL=formulas_variables.js.map