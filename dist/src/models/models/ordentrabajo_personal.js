"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordentrabajo_personal = void 0;
const sequelize_1 = require("sequelize");
class ordentrabajo_personal extends sequelize_1.Model {
    static initModel(sequelize) {
        ordentrabajo_personal.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_ordentrabajo: {
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
                type: sequelize_1.DataTypes.DECIMAL(9, 3),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(9, 4),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ordentrabajo_personal',
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
        return ordentrabajo_personal;
    }
}
exports.ordentrabajo_personal = ordentrabajo_personal;
//# sourceMappingURL=ordentrabajo_personal.js.map