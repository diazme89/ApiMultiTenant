"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articulos_unidad_medida = void 0;
const sequelize_1 = require("sequelize");
class articulos_unidad_medida extends sequelize_1.Model {
    static initModel(sequelize) {
        articulos_unidad_medida.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            unidad_de_medida: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'articulos_unidad_medida',
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
        return articulos_unidad_medida;
    }
}
exports.articulos_unidad_medida = articulos_unidad_medida;
//# sourceMappingURL=articulos_unidad_medida.js.map