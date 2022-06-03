"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config_iva = void 0;
const sequelize_1 = require("sequelize");
class config_iva extends sequelize_1.Model {
    static initModel(sequelize) {
        config_iva.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            valor: {
                type: sequelize_1.DataTypes.DECIMAL(4, 2),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'config_iva',
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
        return config_iva;
    }
}
exports.config_iva = config_iva;
//# sourceMappingURL=config_iva.js.map