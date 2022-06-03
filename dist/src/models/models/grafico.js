"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grafico = void 0;
const sequelize_1 = require("sequelize");
class grafico extends sequelize_1.Model {
    static initModel(sequelize) {
        grafico.init({
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            valor1: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: false,
                primaryKey: true
            }
        }, {
            sequelize,
            tableName: 'grafico',
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
        return grafico;
    }
}
exports.grafico = grafico;
//# sourceMappingURL=grafico.js.map