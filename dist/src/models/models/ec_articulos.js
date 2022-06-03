"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec_articulos = void 0;
const sequelize_1 = require("sequelize");
class ec_articulos extends sequelize_1.Model {
    static initModel(sequelize) {
        ec_articulos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                unique: "cod_articulo"
            },
            cod_marca: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_origen: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            estado_uso: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            medida_alto: {
                type: sequelize_1.DataTypes.DOUBLE(8, 2),
                allowNull: true
            },
            medida_ancho: {
                type: sequelize_1.DataTypes.DOUBLE(8, 2),
                allowNull: true
            },
            medida_largo: {
                type: sequelize_1.DataTypes.DOUBLE(8, 2),
                allowNull: true
            },
            medida_peso: {
                type: sequelize_1.DataTypes.DOUBLE(8, 2),
                allowNull: true
            },
            orden: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            color: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            descripcion_html: {
                type: sequelize_1.DataTypes.STRING(2000),
                allowNull: true
            },
            habilitado: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            },
            modo_de_compra: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            tipo_publicacion: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            garantia: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            video: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true
            },
            promocion: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            },
            destacado: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            },
            novedad: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            },
            categoria_id: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            categoria: {
                type: sequelize_1.DataTypes.CHAR(255),
                allowNull: true
            },
            archivo_imagen1: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            archivo_imagen2: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            archivo_imagen3: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            archivo_imagen4: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            archivo_imagen5: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ec_articulos',
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
                    name: "cod_articulo",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_articulo" },
                    ]
                },
            ]
        });
        return ec_articulos;
    }
}
exports.ec_articulos = ec_articulos;
//# sourceMappingURL=ec_articulos.js.map