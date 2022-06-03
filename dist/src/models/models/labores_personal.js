"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labores_personal = void 0;
const sequelize_1 = require("sequelize");
class labores_personal extends sequelize_1.Model {
    static initModel(sequelize) {
        labores_personal.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_labores: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_empleado: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_concepto: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(9, 4),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(14, 4),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(14, 4),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'labores_personal',
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
        return labores_personal;
    }
}
exports.labores_personal = labores_personal;
//# sourceMappingURL=labores_personal.js.map