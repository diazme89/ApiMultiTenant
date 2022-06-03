"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras_produccion = void 0;
const sequelize_1 = require("sequelize");
class compras_produccion extends sequelize_1.Model {
    static initModel(sequelize) {
        compras_produccion.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_compras: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_produccion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            monto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            origen: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'compras_produccion',
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
                    name: "compras_produccion_idx1",
                    using: "BTREE",
                    fields: [
                        { name: "id_compras" },
                        { name: "origen" },
                    ]
                },
                {
                    name: "compras_produccion_idx2",
                    using: "BTREE",
                    fields: [
                        { name: "id_produccion" },
                        { name: "origen" },
                    ]
                },
            ]
        });
        return compras_produccion;
    }
}
exports.compras_produccion = compras_produccion;
//# sourceMappingURL=compras_produccion.js.map