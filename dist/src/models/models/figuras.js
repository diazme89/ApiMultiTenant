"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.figuras = void 0;
const sequelize_1 = require("sequelize");
class figuras extends sequelize_1.Model {
    static initModel(sequelize) {
        figuras.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            color: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            intensidad_color: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            },
            cod_lote: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            ptoinicial: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            nivelzoom: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'figuras',
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
        return figuras;
    }
}
exports.figuras = figuras;
//# sourceMappingURL=figuras.js.map