"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articulos_caracteristicas_valores = void 0;
const sequelize_1 = require("sequelize");
class articulos_caracteristicas_valores extends sequelize_1.Model {
    static initModel(sequelize) {
        articulos_caracteristicas_valores.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(150),
                allowNull: true
            },
            id_caracteristica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_grupo: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            imp_check: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'articulos_caracteristicas_valores',
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
                    name: "id_caracteristica_xkey1",
                    using: "BTREE",
                    fields: [
                        { name: "id_caracteristica" },
                    ]
                },
            ]
        });
        return articulos_caracteristicas_valores;
    }
}
exports.articulos_caracteristicas_valores = articulos_caracteristicas_valores;
//# sourceMappingURL=articulos_caracteristicas_valores.js.map