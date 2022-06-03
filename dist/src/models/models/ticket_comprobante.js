"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticket_comprobante = void 0;
const sequelize_1 = require("sequelize");
class ticket_comprobante extends sequelize_1.Model {
    static initModel(sequelize) {
        ticket_comprobante.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_ticket: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_afip: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            },
            inicial_libro_iva: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ticket_comprobante',
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
        return ticket_comprobante;
    }
}
exports.ticket_comprobante = ticket_comprobante;
//# sourceMappingURL=ticket_comprobante.js.map