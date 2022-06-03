"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puntos_de_venta_usuarios = void 0;
const sequelize_1 = require("sequelize");
class puntos_de_venta_usuarios extends sequelize_1.Model {
    static initModel(sequelize) {
        puntos_de_venta_usuarios.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_usuario: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            predefinido: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'puntos_de_venta_usuarios',
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
        return puntos_de_venta_usuarios;
    }
}
exports.puntos_de_venta_usuarios = puntos_de_venta_usuarios;
//# sourceMappingURL=puntos_de_venta_usuarios.js.map