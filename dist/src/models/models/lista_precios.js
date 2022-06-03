"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_precios = void 0;
const sequelize_1 = require("sequelize");
class lista_precios extends sequelize_1.Model {
    static initModel(sequelize) {
        lista_precios.init({
            cod_lista: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            porce: {
                type: sequelize_1.DataTypes.DECIMAL(14, 5),
                allowNull: true
            },
            fecha_gra: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            descuento: {
                type: sequelize_1.DataTypes.DECIMAL(14, 5),
                allowNull: true
            },
            atributo_1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            atributo_2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            atributo_3: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            atributo_4: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            atributo_5: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            atributo_6: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            atributo_7: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            precio_vta: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cod_compatibilidad: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'lista_precios',
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
                    name: "lista_precios_xkey1",
                    using: "BTREE",
                    fields: [
                        { name: "cod_articulo" },
                        { name: "cod_lista" },
                    ]
                },
            ]
        });
        return lista_precios;
    }
}
exports.lista_precios = lista_precios;
//# sourceMappingURL=lista_precios.js.map