"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hist_precio_categoria = void 0;
const sequelize_1 = require("sequelize");
class hist_precio_categoria extends sequelize_1.Model {
    static initModel(sequelize) {
        hist_precio_categoria.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_categoria: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false
            },
            anio: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: false
            },
            mes: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: false
            },
            valor: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: false
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'hist_precio_categoria',
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
                    name: "hist_precio_categoriaxkey1",
                    using: "BTREE",
                    fields: [
                        { name: "cod_establecimiento" },
                        { name: "cod_actividad" },
                        { name: "cod_categoria" },
                        { name: "anio" },
                        { name: "mes" },
                    ]
                },
            ]
        });
        return hist_precio_categoria;
    }
}
exports.hist_precio_categoria = hist_precio_categoria;
//# sourceMappingURL=hist_precio_categoria.js.map