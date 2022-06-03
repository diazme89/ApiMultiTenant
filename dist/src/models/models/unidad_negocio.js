"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unidad_negocio = void 0;
const sequelize_1 = require("sequelize");
class unidad_negocio extends sequelize_1.Model {
    static initModel(sequelize) {
        unidad_negocio.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_unidad_negocio: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            fecha_vigente: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'unidad_negocio',
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
                    name: "unidad_negocioxcodigo",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_unidad_negocio" },
                    ]
                },
            ]
        });
        return unidad_negocio;
    }
}
exports.unidad_negocio = unidad_negocio;
//# sourceMappingURL=unidad_negocio.js.map