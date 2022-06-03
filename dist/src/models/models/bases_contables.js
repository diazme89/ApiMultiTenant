"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bases_contables = void 0;
const sequelize_1 = require("sequelize");
class bases_contables extends sequelize_1.Model {
    static initModel(sequelize) {
        bases_contables.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            nombre_base: {
                type: sequelize_1.DataTypes.CHAR(200),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_periodo_fiscal: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'bases_contables',
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
        return bases_contables;
    }
}
exports.bases_contables = bases_contables;
//# sourceMappingURL=bases_contables.js.map