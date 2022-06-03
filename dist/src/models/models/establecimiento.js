"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.establecimiento = void 0;
const sequelize_1 = require("sequelize");
class establecimiento extends sequelize_1.Model {
    static initModel(sequelize) {
        establecimiento.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true,
                unique: "establecimientoxkey1"
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            obsevacion: {
                type: sequelize_1.DataTypes.CHAR(255),
                allowNull: true
            },
            categoria: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            direccion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            localidad: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            provincia: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'establecimiento',
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
                    name: "establecimientoxkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return establecimiento;
    }
}
exports.establecimiento = establecimiento;
//# sourceMappingURL=establecimiento.js.map