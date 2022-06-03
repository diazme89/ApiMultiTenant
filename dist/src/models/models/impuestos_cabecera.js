"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impuestos_cabecera = void 0;
const sequelize_1 = require("sequelize");
class impuestos_cabecera extends sequelize_1.Model {
    static initModel(sequelize) {
        impuestos_cabecera.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(70),
                allowNull: true
            },
            cod_pais: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            origen: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            circuito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            orden: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'impuestos_cabecera',
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
        return impuestos_cabecera;
    }
}
exports.impuestos_cabecera = impuestos_cabecera;
//# sourceMappingURL=impuestos_cabecera.js.map