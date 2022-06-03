"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoja_de_ruta_items = void 0;
const sequelize_1 = require("sequelize");
class hoja_de_ruta_items extends sequelize_1.Model {
    static initModel(sequelize) {
        hoja_de_ruta_items.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_hoja_de_ruta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_remito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_estado: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'hoja_de_ruta_items',
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
        return hoja_de_ruta_items;
    }
}
exports.hoja_de_ruta_items = hoja_de_ruta_items;
//# sourceMappingURL=hoja_de_ruta_items.js.map