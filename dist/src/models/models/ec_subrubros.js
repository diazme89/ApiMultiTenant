"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec_subrubros = void 0;
const sequelize_1 = require("sequelize");
class ec_subrubros extends sequelize_1.Model {
    static initModel(sequelize) {
        ec_subrubros.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_rubro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: false
            },
            cod_subrubro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            orden: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            habilitado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ec_subrubros',
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
                    name: "cod_subrubros",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_rubro" },
                        { name: "cod_subrubro" },
                    ]
                },
            ]
        });
        return ec_subrubros;
    }
}
exports.ec_subrubros = ec_subrubros;
//# sourceMappingURL=ec_subrubros.js.map