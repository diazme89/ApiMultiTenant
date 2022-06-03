"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec_articulos_imagenes = void 0;
const sequelize_1 = require("sequelize");
class ec_articulos_imagenes extends sequelize_1.Model {
    static initModel(sequelize) {
        ec_articulos_imagenes.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.DOUBLE(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            archivo_imagen: {
                type: sequelize_1.DataTypes.STRING(600),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ec_articulos_imagenes',
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
        return ec_articulos_imagenes;
    }
}
exports.ec_articulos_imagenes = ec_articulos_imagenes;
//# sourceMappingURL=ec_articulos_imagenes.js.map