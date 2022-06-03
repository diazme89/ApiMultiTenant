"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras_labores = void 0;
const sequelize_1 = require("sequelize");
class compras_labores extends sequelize_1.Model {
    static initModel(sequelize) {
        compras_labores.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_compras: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_labores: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            monto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'compras_labores',
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
                    name: "compras_labores_idx1",
                    using: "BTREE",
                    fields: [
                        { name: "id_compras" },
                    ]
                },
                {
                    name: "compras_labores_idx2",
                    using: "BTREE",
                    fields: [
                        { name: "id_labores" },
                    ]
                },
            ]
        });
        return compras_labores;
    }
}
exports.compras_labores = compras_labores;
//# sourceMappingURL=compras_labores.js.map