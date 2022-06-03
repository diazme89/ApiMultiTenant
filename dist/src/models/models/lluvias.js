"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lluvias = void 0;
const sequelize_1 = require("sequelize");
class lluvias extends sequelize_1.Model {
    static initModel(sequelize) {
        lluvias.init({
            d1: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d2: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d3: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d4: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d5: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d6: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d7: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d8: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d9: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d10: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d11: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d12: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d13: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d14: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d15: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d16: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d17: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d18: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d19: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d20: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d21: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d22: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d23: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d24: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d25: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d26: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d27: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d28: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d29: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d30: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            d31: {
                type: sequelize_1.DataTypes.DECIMAL(4, 1),
                allowNull: true
            },
            total: {
                type: sequelize_1.DataTypes.DECIMAL(5, 1),
                allowNull: true
            },
            total_anual: {
                type: sequelize_1.DataTypes.DECIMAL(6, 1),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            mes: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            fecha_carga: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            hora_carga: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            id_pc: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'lluvias',
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
        return lluvias;
    }
}
exports.lluvias = lluvias;
//# sourceMappingURL=lluvias.js.map