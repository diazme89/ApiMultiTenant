"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cta_cble_grupo_item = void 0;
const sequelize_1 = require("sequelize");
class cta_cble_grupo_item extends sequelize_1.Model {
    static initModel(sequelize) {
        cta_cble_grupo_item.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_cta_cble_grupo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_plan: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'cta_cble_grupo_item',
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
                {
                    name: "i_cta_cble_grupo_item_1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id_cta_cble_grupo" },
                        { name: "id_plan" },
                    ]
                },
            ]
        });
        return cta_cble_grupo_item;
    }
}
exports.cta_cble_grupo_item = cta_cble_grupo_item;
//# sourceMappingURL=cta_cble_grupo_item.js.map