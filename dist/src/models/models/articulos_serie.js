"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articulos_serie = void 0;
const sequelize_1 = require("sequelize");
class articulos_serie extends sequelize_1.Model {
    static initModel(sequelize) {
        articulos_serie.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            nro_serie: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: false
            },
            nro_lote: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: false
            },
            observacion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            fecha_alta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'articulos_serie',
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
        return articulos_serie;
    }
}
exports.articulos_serie = articulos_serie;
//# sourceMappingURL=articulos_serie.js.map