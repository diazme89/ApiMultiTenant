"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrados = void 0;
const sequelize_1 = require("sequelize");
class borrados extends sequelize_1.Model {
    static initModel(sequelize) {
        borrados.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            tabla: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            id_registro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            fecha_borrado: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            hora_borrado: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            id_pc: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'borrados',
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
        return borrados;
    }
}
exports.borrados = borrados;
//# sourceMappingURL=borrados.js.map