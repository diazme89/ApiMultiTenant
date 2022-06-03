"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec_rubros = void 0;
const sequelize_1 = require("sequelize");
class ec_rubros extends sequelize_1.Model {
    static initModel(sequelize) {
        ec_rubros.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_rubro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: false,
                unique: "cod_rubro"
            },
            orden: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            menu: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ec_rubros',
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
                    name: "cod_rubro",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_rubro" },
                    ]
                },
            ]
        });
        return ec_rubros;
    }
}
exports.ec_rubros = ec_rubros;
//# sourceMappingURL=ec_rubros.js.map