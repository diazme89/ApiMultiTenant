"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.items_cruces = void 0;
const sequelize_1 = require("sequelize");
class items_cruces extends sequelize_1.Model {
    static initModel(sequelize) {
        items_cruces.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            id_item: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_cpo: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            id_cpo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_item_origen: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_cpo_origen: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            id_cpo_origen: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            circuito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'items_cruces',
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
                    name: "items_cruces_xkey3",
                    using: "BTREE",
                    fields: [
                        { name: "id_cpo_origen" },
                        { name: "id_item_origen" },
                    ]
                },
                {
                    name: "idx_ITEMSCRUCES_iditem_tipocpo",
                    using: "BTREE",
                    fields: [
                        { name: "id_item" },
                        { name: "tipo_cpo_origen" },
                    ]
                },
                {
                    name: "items_cruces_xkey1",
                    using: "BTREE",
                    fields: [
                        { name: "id_item" },
                        { name: "tipo_cpo" },
                    ]
                },
                {
                    name: "items_cruces_xkey2",
                    using: "BTREE",
                    fields: [
                        { name: "id_item_origen" },
                        { name: "tipo_cpo_origen" },
                    ]
                },
            ]
        });
        return items_cruces;
    }
}
exports.items_cruces = items_cruces;
//# sourceMappingURL=items_cruces.js.map