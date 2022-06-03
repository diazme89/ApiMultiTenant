"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockheader_estados = void 0;
const sequelize_1 = require("sequelize");
class stockheader_estados extends sequelize_1.Model {
    static initModel(sequelize) {
        stockheader_estados.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'stockheader_estados',
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
        return stockheader_estados;
    }
}
exports.stockheader_estados = stockheader_estados;
//# sourceMappingURL=stockheader_estados.js.map