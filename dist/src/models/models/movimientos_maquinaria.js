"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movimientos_maquinaria = void 0;
const sequelize_1 = require("sequelize");
class movimientos_maquinaria extends sequelize_1.Model {
    static initModel(sequelize) {
        movimientos_maquinaria.init({
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
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            utas: {
                type: sequelize_1.DataTypes.DECIMAL(9, 1),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
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
            tableName: 'movimientos_maquinaria',
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
        return movimientos_maquinaria;
    }
}
exports.movimientos_maquinaria = movimientos_maquinaria;
//# sourceMappingURL=movimientos_maquinaria.js.map