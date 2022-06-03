"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuracion_libro_iva = void 0;
const sequelize_1 = require("sequelize");
class configuracion_libro_iva extends sequelize_1.Model {
    static initModel(sequelize) {
        configuracion_libro_iva.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            columna: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            circuito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_cuenta_contable: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            modo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "L"
            }
        }, {
            sequelize,
            tableName: 'configuracion_libro_iva',
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
        return configuracion_libro_iva;
    }
}
exports.configuracion_libro_iva = configuracion_libro_iva;
//# sourceMappingURL=configuracion_libro_iva.js.map