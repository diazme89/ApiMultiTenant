"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tt_usuarios_seleccion = void 0;
const sequelize_1 = require("sequelize");
class tt_usuarios_seleccion extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_usuarios_seleccion.init({
            id: {
                type: sequelize_1.DataTypes.DOUBLE(10, 0),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            idproc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_usuario: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            seleccion: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tt_usuarios_seleccion',
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
        return tt_usuarios_seleccion;
    }
}
exports.tt_usuarios_seleccion = tt_usuarios_seleccion;
//# sourceMappingURL=tt_usuarios_seleccion.js.map