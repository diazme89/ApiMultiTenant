"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articulos_transformacion = void 0;
const sequelize_1 = require("sequelize");
class articulos_transformacion extends sequelize_1.Model {
    static initModel(sequelize) {
        articulos_transformacion.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_articulo_relacion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            id_um: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'articulos_transformacion',
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
        return articulos_transformacion;
    }
}
exports.articulos_transformacion = articulos_transformacion;
//# sourceMappingURL=articulos_transformacion.js.map