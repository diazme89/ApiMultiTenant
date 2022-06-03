"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proveedor_impuestos = void 0;
const sequelize_1 = require("sequelize");
class proveedor_impuestos extends sequelize_1.Model {
    static initModel(sequelize) {
        proveedor_impuestos.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            cod_impuesto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_formula: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            alicuota: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            categoria: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            nro_convenio: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'proveedor_impuestos',
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
        return proveedor_impuestos;
    }
}
exports.proveedor_impuestos = proveedor_impuestos;
//# sourceMappingURL=proveedor_impuestos.js.map