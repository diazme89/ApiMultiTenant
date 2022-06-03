"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_insu = void 0;
const sequelize_1 = require("sequelize");
class pla_insu extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_insu.init({
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            item_nro: {
                type: sequelize_1.DataTypes.DECIMAL(9, 0),
                allowNull: false
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            dosis: {
                type: sequelize_1.DataTypes.DECIMAL(10, 3),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_insumo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pla_insu',
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
        return pla_insu;
    }
}
exports.pla_insu = pla_insu;
//# sourceMappingURL=pla_insu.js.map