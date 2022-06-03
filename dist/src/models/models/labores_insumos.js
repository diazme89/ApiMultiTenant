"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labores_insumos = void 0;
const sequelize_1 = require("sequelize");
class labores_insumos extends sequelize_1.Model {
    static initModel(sequelize) {
        labores_insumos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_labores: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_insumo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(11, 4),
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
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
            id_labores_maquina: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'labores_insumos',
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
                    name: "labores_insumosxkey1",
                    using: "BTREE",
                    fields: [
                        { name: "id_labores" },
                    ]
                },
                {
                    name: "labores_insumosxkey2",
                    using: "BTREE",
                    fields: [
                        { name: "id_labores" },
                        { name: "id_labores_maquina" },
                    ]
                },
            ]
        });
        return labores_insumos;
    }
}
exports.labores_insumos = labores_insumos;
//# sourceMappingURL=labores_insumos.js.map