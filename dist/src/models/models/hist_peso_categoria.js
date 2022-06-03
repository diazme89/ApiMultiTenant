"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hist_peso_categoria = void 0;
const sequelize_1 = require("sequelize");
class hist_peso_categoria extends sequelize_1.Model {
    static initModel(sequelize) {
        hist_peso_categoria.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false
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
            peso: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'hist_peso_categoria',
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
                    name: "hist_peso_categoriaxkey1",
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
        return hist_peso_categoria;
    }
}
exports.hist_peso_categoria = hist_peso_categoria;
//# sourceMappingURL=hist_peso_categoria.js.map