"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moneda = void 0;
const sequelize_1 = require("sequelize");
class moneda extends sequelize_1.Model {
    static initModel(sequelize) {
        moneda.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            codigo2: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            },
            cod_afip: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            codigo3: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'moneda',
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
        return moneda;
    }
}
exports.moneda = moneda;
//# sourceMappingURL=moneda.js.map