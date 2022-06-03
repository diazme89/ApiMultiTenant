"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios_depositos = void 0;
const sequelize_1 = require("sequelize");
class usuarios_depositos extends sequelize_1.Model {
    static initModel(sequelize) {
        usuarios_depositos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_usuario: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            predeterminado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'usuarios_depositos',
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
        return usuarios_depositos;
    }
}
exports.usuarios_depositos = usuarios_depositos;
//# sourceMappingURL=usuarios_depositos.js.map