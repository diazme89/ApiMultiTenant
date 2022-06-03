"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personal = void 0;
const sequelize_1 = require("sequelize");
class personal extends sequelize_1.Model {
    static initModel(sequelize) {
        personal.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: false
            },
            activo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            mensual: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            hora: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            jornal: {
                type: sequelize_1.DataTypes.DECIMAL(13, 4),
                allowNull: true
            },
            sueldo: {
                type: sequelize_1.DataTypes.DECIMAL(9, 4),
                allowNull: true
            },
            manejo_agroquimicos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            legajo: {
                type: sequelize_1.DataTypes.CHAR(13),
                allowNull: true
            },
            empresa: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cuadrilla: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            cuadrilla_grupo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            cuadrilla_orden: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            cod_concepto: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            propio: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'personal',
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
        return personal;
    }
}
exports.personal = personal;
//# sourceMappingURL=personal.js.map