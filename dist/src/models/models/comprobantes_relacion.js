"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comprobantes_relacion = void 0;
const sequelize_1 = require("sequelize");
class comprobantes_relacion extends sequelize_1.Model {
    static initModel(sequelize) {
        comprobantes_relacion.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            desc_comprobante: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            tipo_comprobante: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: false
            },
            tipo_factura: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: false
            },
            cod_afip: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            circuito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "V"
            }
        }, {
            sequelize,
            tableName: 'comprobantes_relacion',
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
        return comprobantes_relacion;
    }
}
exports.comprobantes_relacion = comprobantes_relacion;
//# sourceMappingURL=comprobantes_relacion.js.map