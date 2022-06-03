"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipo_ticket = void 0;
const sequelize_1 = require("sequelize");
class tipo_ticket extends sequelize_1.Model {
    static initModel(sequelize) {
        tipo_ticket.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false,
                primaryKey: true
            },
            ticket: {
                type: sequelize_1.DataTypes.CHAR(4),
                allowNull: true
            },
            tipo_documento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tipo_ticket',
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
        return tipo_ticket;
    }
}
exports.tipo_ticket = tipo_ticket;
//# sourceMappingURL=tipo_ticket.js.map