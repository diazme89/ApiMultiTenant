"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipos_dinero = void 0;
const sequelize_1 = require("sequelize");
class tipos_dinero extends sequelize_1.Model {
    static initModel(sequelize) {
        tipos_dinero.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_tipo_dinero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre_tipo: {
                type: sequelize_1.DataTypes.STRING(80),
                allowNull: true
            },
            cod_moneda: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            unidades: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cond_pago: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tipos_dinero',
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
        return tipos_dinero;
    }
}
exports.tipos_dinero = tipos_dinero;
//# sourceMappingURL=tipos_dinero.js.map