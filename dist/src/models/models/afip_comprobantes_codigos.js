"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_comprobantes_codigos = void 0;
const sequelize_1 = require("sequelize");
class afip_comprobantes_codigos extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_comprobantes_codigos.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            tipo_comprobante: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: false
            },
            tipo_factura: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            codigo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'afip_comprobantes_codigos',
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
        return afip_comprobantes_codigos;
    }
}
exports.afip_comprobantes_codigos = afip_comprobantes_codigos;
//# sourceMappingURL=afip_comprobantes_codigos.js.map