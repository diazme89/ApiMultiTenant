"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labores_maquinarias = void 0;
const sequelize_1 = require("sequelize");
class labores_maquinarias extends sequelize_1.Model {
    static initModel(sequelize) {
        labores_maquinarias.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_labores: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_maquina: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            horas_maquina: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            id_mantenimiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            kilometraje: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'labores_maquinarias',
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
                    name: "labores_maquinariasxkey1",
                    using: "BTREE",
                    fields: [
                        { name: "id_labores" },
                    ]
                },
                {
                    name: "labores_maquinariasxkey2",
                    using: "BTREE",
                    fields: [
                        { name: "id_labores" },
                        { name: "id_mantenimiento" },
                    ]
                },
            ]
        });
        return labores_maquinarias;
    }
}
exports.labores_maquinarias = labores_maquinarias;
//# sourceMappingURL=labores_maquinarias.js.map