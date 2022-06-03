"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cierres_fiscales = void 0;
const sequelize_1 = require("sequelize");
class cierres_fiscales extends sequelize_1.Model {
    static initModel(sequelize) {
        cierres_fiscales.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            numero_impresora: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            },
            total: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_total: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            detalle: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            usuario_fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            usuario_hora: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            terminal: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'cierres_fiscales',
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
        return cierres_fiscales;
    }
}
exports.cierres_fiscales = cierres_fiscales;
//# sourceMappingURL=cierres_fiscales.js.map