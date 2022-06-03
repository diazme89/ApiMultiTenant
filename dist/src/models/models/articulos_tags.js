"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articulos_tags = void 0;
const sequelize_1 = require("sequelize");
class articulos_tags extends sequelize_1.Model {
    static initModel(sequelize) {
        articulos_tags.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_valor_caracteristica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'articulos_tags',
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
                    name: "id_valor_caracteristica",
                    using: "BTREE",
                    fields: [
                        { name: "id_valor_caracteristica" },
                    ]
                },
            ]
        });
        return articulos_tags;
    }
}
exports.articulos_tags = articulos_tags;
//# sourceMappingURL=articulos_tags.js.map