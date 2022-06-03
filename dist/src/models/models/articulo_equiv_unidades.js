"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articulo_equiv_unidades = void 0;
const sequelize_1 = require("sequelize");
class articulo_equiv_unidades extends sequelize_1.Model {
    static initModel(sequelize) {
        articulo_equiv_unidades.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_unidad_medida: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            coeficiente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 6),
                allowNull: false
            },
            predefinido: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            }
        }, {
            sequelize,
            tableName: 'articulo_equiv_unidades',
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
                {
                    name: "articulo_equiv_cod_articulo_idx",
                    using: "BTREE",
                    fields: [
                        { name: "cod_articulo" },
                    ]
                },
                {
                    name: "articulo_equiv_cod_um_idx",
                    using: "BTREE",
                    fields: [
                        { name: "cod_unidad_medida" },
                    ]
                },
            ]
        });
        return articulo_equiv_unidades;
    }
}
exports.articulo_equiv_unidades = articulo_equiv_unidades;
//# sourceMappingURL=articulo_equiv_unidades.js.map