"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rendicion_items = void 0;
const sequelize_1 = require("sequelize");
class rendicion_items extends sequelize_1.Model {
    static initModel(sequelize) {
        rendicion_items.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_rendicion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_tipo_dinero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'rendicion_items',
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
        return rendicion_items;
    }
}
exports.rendicion_items = rendicion_items;
//# sourceMappingURL=rendicion_items.js.map