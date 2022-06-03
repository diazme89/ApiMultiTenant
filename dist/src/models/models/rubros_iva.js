"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubros_iva = void 0;
const sequelize_1 = require("sequelize");
class rubros_iva extends sequelize_1.Model {
    static initModel(sequelize) {
        rubros_iva.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'rubros_iva',
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
        return rubros_iva;
    }
}
exports.rubros_iva = rubros_iva;
//# sourceMappingURL=rubros_iva.js.map