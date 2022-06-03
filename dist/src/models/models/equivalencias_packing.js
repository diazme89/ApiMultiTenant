"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equivalencias_packing = void 0;
const sequelize_1 = require("sequelize");
class equivalencias_packing extends sequelize_1.Model {
    static initModel(sequelize) {
        equivalencias_packing.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            concepto: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            concepto_externo: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'equivalencias_packing',
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
        return equivalencias_packing;
    }
}
exports.equivalencias_packing = equivalencias_packing;
//# sourceMappingURL=equivalencias_packing.js.map