"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insumos_ordenes_trabajo = void 0;
const sequelize_1 = require("sequelize");
class insumos_ordenes_trabajo extends sequelize_1.Model {
    static initModel(sequelize) {
        insumos_ordenes_trabajo.init({
            descrip: {
                type: sequelize_1.DataTypes.CHAR(80),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            observar: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            dosis: {
                type: sequelize_1.DataTypes.DECIMAL(10, 3),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            nro_orden: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
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
            tableName: 'insumos_ordenes_trabajo',
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
        return insumos_ordenes_trabajo;
    }
}
exports.insumos_ordenes_trabajo = insumos_ordenes_trabajo;
//# sourceMappingURL=insumos_ordenes_trabajo.js.map