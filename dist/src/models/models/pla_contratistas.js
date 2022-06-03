"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_contratistas = void 0;
const sequelize_1 = require("sequelize");
class pla_contratistas extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_contratistas.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            cod_contratista: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_contratistas',
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
        return pla_contratistas;
    }
}
exports.pla_contratistas = pla_contratistas;
//# sourceMappingURL=pla_contratistas.js.map