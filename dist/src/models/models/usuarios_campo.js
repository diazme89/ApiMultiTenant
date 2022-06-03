"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios_campo = void 0;
const sequelize_1 = require("sequelize");
class usuarios_campo extends sequelize_1.Model {
    static initModel(sequelize) {
        usuarios_campo.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: false
            },
            clave: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            synagro_abrir: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            synagro_internet: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            synagro_varios: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            synagro_multiusuario: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            plane_archivos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            plane_movimientos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            plane_consultas: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            plane_borrar_mov: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            datos_archivos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            datos_movimientos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            datos_consultas: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            datos_borrar_mov: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            gestion_archivos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            gestion_movimientos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            gestion_consultas: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            gestion_borrar_mov: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'usuarios_campo',
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
        return usuarios_campo;
    }
}
exports.usuarios_campo = usuarios_campo;
//# sourceMappingURL=usuarios_campo.js.map