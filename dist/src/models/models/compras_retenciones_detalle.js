"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras_retenciones_detalle = void 0;
const sequelize_1 = require("sequelize");
class compras_retenciones_detalle extends sequelize_1.Model {
    static initModel(sequelize) {
        compras_retenciones_detalle.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            id_cab: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            generado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            numero_retorno: {
                type: sequelize_1.DataTypes.CHAR(25),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'compras_retenciones_detalle',
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
        return compras_retenciones_detalle;
    }
}
exports.compras_retenciones_detalle = compras_retenciones_detalle;
//# sourceMappingURL=compras_retenciones_detalle.js.map