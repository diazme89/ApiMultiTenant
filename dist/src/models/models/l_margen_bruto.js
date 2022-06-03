"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l_margen_bruto = void 0;
const sequelize_1 = require("sequelize");
class l_margen_bruto extends sequelize_1.Model {
    static initModel(sequelize) {
        l_margen_bruto.init({
            total1: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            parcial1: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            total2: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            parcial2: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            area: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            descrip: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            grupo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            }
        }, {
            sequelize,
            tableName: 'l_margen_bruto',
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
        return l_margen_bruto;
    }
}
exports.l_margen_bruto = l_margen_bruto;
//# sourceMappingURL=l_margen_bruto.js.map