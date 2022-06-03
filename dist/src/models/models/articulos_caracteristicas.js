"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articulos_caracteristicas = void 0;
const sequelize_1 = require("sequelize");
class articulos_caracteristicas extends sequelize_1.Model {
    static initModel(sequelize) {
        articulos_caracteristicas.init({
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
            orden: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            agrupado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            mostrar_descripcion: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            seleccion: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: false,
                defaultValue: "N"
            }
        }, {
            sequelize,
            tableName: 'articulos_caracteristicas',
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
        return articulos_caracteristicas;
    }
}
exports.articulos_caracteristicas = articulos_caracteristicas;
//# sourceMappingURL=articulos_caracteristicas.js.map