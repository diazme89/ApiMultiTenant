"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtro_labores = void 0;
const sequelize_1 = require("sequelize");
class filtro_labores extends sequelize_1.Model {
    static initModel(sequelize) {
        filtro_labores.init({
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
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
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
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
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
            cod_insumo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_empleado: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_maquina: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            finca: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            cod_concepto: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            parte_num_1: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            parte_num_2: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_deposito_1: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            fecha_carga_desde: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_carga_hasta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'filtro_labores',
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
        return filtro_labores;
    }
}
exports.filtro_labores = filtro_labores;
//# sourceMappingURL=filtro_labores.js.map