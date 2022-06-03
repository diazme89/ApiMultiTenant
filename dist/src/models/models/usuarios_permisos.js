"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios_permisos = void 0;
const sequelize_1 = require("sequelize");
class usuarios_permisos extends sequelize_1.Model {
    static initModel(sequelize) {
        usuarios_permisos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            menu: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            permiso: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'usuarios_permisos',
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
        return usuarios_permisos;
    }
}
exports.usuarios_permisos = usuarios_permisos;
//# sourceMappingURL=usuarios_permisos.js.map