"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impresoras = void 0;
const sequelize_1 = require("sequelize");
class impresoras extends sequelize_1.Model {
    static initModel(sequelize) {
        impresoras.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            identificador: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            marca: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_compatibilidad: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'impresoras',
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
        return impresoras;
    }
}
exports.impresoras = impresoras;
//# sourceMappingURL=impresoras.js.map