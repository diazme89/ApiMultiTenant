"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pla_tare = void 0;
const sequelize_1 = require("sequelize");
class pla_tare extends sequelize_1.Model {
    static initModel(sequelize) {
        pla_tare.init({
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            item_nro: {
                type: sequelize_1.DataTypes.DECIMAL(9, 0),
                allowNull: true
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
            importe1: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe2: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe3: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe4: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe5: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe6: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe7: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe8: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe9: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe10: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe11: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe12: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            superficie: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
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
            }
        }, {
            sequelize,
            tableName: 'pla_tare',
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
        return pla_tare;
    }
}
exports.pla_tare = pla_tare;
//# sourceMappingURL=pla_tare.js.map