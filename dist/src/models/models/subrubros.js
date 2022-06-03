"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subrubros = void 0;
const sequelize_1 = require("sequelize");
class subrubros extends sequelize_1.Model {
    static initModel(sequelize) {
        subrubros.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_rubro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_subrubro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'subrubros',
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
                    name: "subrubros_cod_rubro",
                    using: "BTREE",
                    fields: [
                        { name: "cod_rubro" },
                    ]
                },
                {
                    name: "subrubros_xkey1",
                    using: "BTREE",
                    fields: [
                        { name: "cod_rubro" },
                        { name: "cod_subrubro" },
                    ]
                },
            ]
        });
        return subrubros;
    }
}
exports.subrubros = subrubros;
//# sourceMappingURL=subrubros.js.map