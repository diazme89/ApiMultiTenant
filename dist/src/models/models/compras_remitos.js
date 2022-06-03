"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras_remitos = void 0;
const sequelize_1 = require("sequelize");
class compras_remitos extends sequelize_1.Model {
    static initModel(sequelize) {
        compras_remitos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            id_compras: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            remito_terminal: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            remito_numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'compras_remitos',
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
        return compras_remitos;
    }
}
exports.compras_remitos = compras_remitos;
//# sourceMappingURL=compras_remitos.js.map