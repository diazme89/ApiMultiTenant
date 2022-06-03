"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lotes_unidad_productiva = void 0;
const sequelize_1 = require("sequelize");
class lotes_unidad_productiva extends sequelize_1.Model {
    static initModel(sequelize) {
        lotes_unidad_productiva.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo_lote: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            codigo_unidad_productiva: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'lotes_unidad_productiva',
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
        return lotes_unidad_productiva;
    }
}
exports.lotes_unidad_productiva = lotes_unidad_productiva;
//# sourceMappingURL=lotes_unidad_productiva.js.map