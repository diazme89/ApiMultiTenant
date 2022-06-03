"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unidades = void 0;
const sequelize_1 = require("sequelize");
class unidades extends sequelize_1.Model {
    static initModel(sequelize) {
        unidades.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_unidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            unidad: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'unidades',
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
        return unidades;
    }
}
exports.unidades = unidades;
//# sourceMappingURL=unidades.js.map