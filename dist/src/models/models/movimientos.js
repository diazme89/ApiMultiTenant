"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movimientos = void 0;
const sequelize_1 = require("sequelize");
class movimientos extends sequelize_1.Model {
    static initModel(sequelize) {
        movimientos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            id_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            proveedor: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            },
            observacion: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
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
            tableName: 'movimientos',
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
        return movimientos;
    }
}
exports.movimientos = movimientos;
//# sourceMappingURL=movimientos.js.map