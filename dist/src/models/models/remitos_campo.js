"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remitos_campo = void 0;
const sequelize_1 = require("sequelize");
class remitos_campo extends sequelize_1.Model {
    static initModel(sequelize) {
        remitos_campo.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: false
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: false
            },
            movimiento: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'remitos_campo',
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
        return remitos_campo;
    }
}
exports.remitos_campo = remitos_campo;
//# sourceMappingURL=remitos_campo.js.map