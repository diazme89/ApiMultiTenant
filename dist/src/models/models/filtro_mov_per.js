"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtro_mov_per = void 0;
const sequelize_1 = require("sequelize");
class filtro_mov_per extends sequelize_1.Model {
    static initModel(sequelize) {
        filtro_mov_per.init({
            fecha1: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha2: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            empleado: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            area: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            lote: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            tarea: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            maquinaria: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false,
                primaryKey: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            insumo: {
                type: sequelize_1.DataTypes.CHAR(80),
                allowNull: true
            },
            concepto: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            propia: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'filtro_mov_per',
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
        return filtro_mov_per;
    }
}
exports.filtro_mov_per = filtro_mov_per;
//# sourceMappingURL=filtro_mov_per.js.map