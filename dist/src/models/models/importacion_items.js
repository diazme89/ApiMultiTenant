"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importacion_items = void 0;
const sequelize_1 = require("sequelize");
class importacion_items extends sequelize_1.Model {
    static initModel(sequelize) {
        importacion_items.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_item: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_aduana: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            fecha_despacho: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            anio_doc: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            nro_despacho: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: false
            },
            nro_serie: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            nro_cuim: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            cod_tipo_declaracion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_destinacion: {
                type: sequelize_1.DataTypes.CHAR(6),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'importacion_items',
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
                    name: "idx_importacion_items",
                    using: "BTREE",
                    fields: [
                        { name: "id_item" },
                        { name: "id_comprobante" },
                    ]
                },
            ]
        });
        return importacion_items;
    }
}
exports.importacion_items = importacion_items;
//# sourceMappingURL=importacion_items.js.map