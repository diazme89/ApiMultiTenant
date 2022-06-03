"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impuestos = void 0;
const sequelize_1 = require("sequelize");
class impuestos extends sequelize_1.Model {
    static initModel(sequelize) {
        impuestos.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cod_cuenta_contable: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_jurisdiccion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            aplicativo: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            cod_formula: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            otras_percep: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            codigo_cab: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_libro_iva: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_categoria_aplicativo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true,
                defaultValue: 0
            },
            cabecera_constancia: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'impuestos',
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
        return impuestos;
    }
}
exports.impuestos = impuestos;
//# sourceMappingURL=impuestos.js.map