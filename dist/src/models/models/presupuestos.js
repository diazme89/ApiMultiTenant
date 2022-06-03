"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presupuestos = void 0;
const sequelize_1 = require("sequelize");
class presupuestos extends sequelize_1.Model {
    static initModel(sequelize) {
        presupuestos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            detalle: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'presupuestos',
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
                    name: "presupuestos_key",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
        return presupuestos;
    }
}
exports.presupuestos = presupuestos;
//# sourceMappingURL=presupuestos.js.map