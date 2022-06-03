"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permisos = void 0;
const sequelize_1 = require("sequelize");
class permisos extends sequelize_1.Model {
    static initModel(sequelize) {
        permisos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            ventana: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            nombre_ventana: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            permiso: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'permisos',
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
        return permisos;
    }
}
exports.permisos = permisos;
//# sourceMappingURL=permisos.js.map