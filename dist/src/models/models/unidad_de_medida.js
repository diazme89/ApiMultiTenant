"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unidad_de_medida = void 0;
const sequelize_1 = require("sequelize");
class unidad_de_medida extends sequelize_1.Model {
    static initModel(sequelize) {
        unidad_de_medida.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_unidad_medida: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            tipo_unidad: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cod_unidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'unidad_de_medida',
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
                    name: "cod_unidad_medida_idx",
                    using: "BTREE",
                    fields: [
                        { name: "cod_unidad_medida" },
                    ]
                },
            ]
        });
        return unidad_de_medida;
    }
}
exports.unidad_de_medida = unidad_de_medida;
//# sourceMappingURL=unidad_de_medida.js.map