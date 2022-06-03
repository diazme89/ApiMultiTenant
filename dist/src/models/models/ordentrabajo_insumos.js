"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordentrabajo_insumos = void 0;
const sequelize_1 = require("sequelize");
class ordentrabajo_insumos extends sequelize_1.Model {
    static initModel(sequelize) {
        ordentrabajo_insumos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_ordentrabajo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_insumo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            dosis: {
                type: sequelize_1.DataTypes.DECIMAL(9, 4),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            id_ordentrabajo_maquina: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ordentrabajo_insumos',
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
        return ordentrabajo_insumos;
    }
}
exports.ordentrabajo_insumos = ordentrabajo_insumos;
//# sourceMappingURL=ordentrabajo_insumos.js.map