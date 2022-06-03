"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impresoras_fiscales = void 0;
const sequelize_1 = require("sequelize");
class impresoras_fiscales extends sequelize_1.Model {
    static initModel(sequelize) {
        impresoras_fiscales.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            predeterminada: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'impresoras_fiscales',
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
        return impresoras_fiscales;
    }
}
exports.impresoras_fiscales = impresoras_fiscales;
//# sourceMappingURL=impresoras_fiscales.js.map