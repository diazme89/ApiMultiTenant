"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.im_usuarios = void 0;
const sequelize_1 = require("sequelize");
class im_usuarios extends sequelize_1.Model {
    static initModel(sequelize) {
        im_usuarios.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            clave: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            habilitado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'im_usuarios',
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
                    name: "im_usuarios_key",
                    using: "BTREE",
                    fields: [
                        { name: "usuario" },
                    ]
                },
            ]
        });
        return im_usuarios;
    }
}
exports.im_usuarios = im_usuarios;
//# sourceMappingURL=im_usuarios.js.map