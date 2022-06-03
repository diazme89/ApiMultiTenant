"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asignar_rubros = void 0;
const sequelize_1 = require("sequelize");
class asignar_rubros extends sequelize_1.Model {
    static initModel(sequelize) {
        asignar_rubros.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            cod_rubro_default: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_subrubro_default: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'asignar_rubros',
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
        return asignar_rubros;
    }
}
exports.asignar_rubros = asignar_rubros;
//# sourceMappingURL=asignar_rubros.js.map