"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoria_iva = void 0;
const sequelize_1 = require("sequelize");
class categoria_iva extends sequelize_1.Model {
    static initModel(sequelize) {
        categoria_iva.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            categoria_iva: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'categoria_iva',
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
        return categoria_iva;
    }
}
exports.categoria_iva = categoria_iva;
//# sourceMappingURL=categoria_iva.js.map