"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtro_plantacion = void 0;
const sequelize_1 = require("sequelize");
class filtro_plantacion extends sequelize_1.Model {
    static initModel(sequelize) {
        filtro_plantacion.init({
            fecha1: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha2: {
                type: sequelize_1.DataTypes.DATEONLY,
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
            propia: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            contratista: {
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
            }
        }, {
            sequelize,
            tableName: 'filtro_plantacion',
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
        return filtro_plantacion;
    }
}
exports.filtro_plantacion = filtro_plantacion;
//# sourceMappingURL=filtro_plantacion.js.map