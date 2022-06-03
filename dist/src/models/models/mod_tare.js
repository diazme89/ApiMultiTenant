"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod_tare = void 0;
const sequelize_1 = require("sequelize");
class mod_tare extends sequelize_1.Model {
    static initModel(sequelize) {
        mod_tare.init({
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            item_nro: {
                type: sequelize_1.DataTypes.DECIMAL(9, 0),
                allowNull: false
            },
            tarea: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            prop_cont: {
                type: sequelize_1.DataTypes.CHAR(12),
                allowNull: true
            },
            contratist: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            orden: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            mes: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            porc_superficie: {
                type: sequelize_1.DataTypes.DECIMAL(8, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'mod_tare',
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
        return mod_tare;
    }
}
exports.mod_tare = mod_tare;
//# sourceMappingURL=mod_tare.js.map