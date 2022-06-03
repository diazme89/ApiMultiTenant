"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipo_mov = void 0;
const sequelize_1 = require("sequelize");
class tipo_mov extends sequelize_1.Model {
    static initModel(sequelize) {
        tipo_mov.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            grupo: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tipo_mov',
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
                    name: "tipo_movxkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return tipo_mov;
    }
}
exports.tipo_mov = tipo_mov;
//# sourceMappingURL=tipo_mov.js.map