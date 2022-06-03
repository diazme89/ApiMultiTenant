"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labores = void 0;
const sequelize_1 = require("sequelize");
class labores extends sequelize_1.Model {
    static initModel(sequelize) {
        labores.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_area: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_lote: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_tarea: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            propia: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_contratista: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            observaciones_tarea: {
                type: sequelize_1.DataTypes.STRING(100),
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
            precio_tarea: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            observaciones_maquina: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            nro_ordentrabajo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            parte_num: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_lote_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            imputa: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'labores',
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
                    name: "laboresxfecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha" },
                    ]
                },
                {
                    name: "laboresxcod_lote_actividad",
                    using: "BTREE",
                    fields: [
                        { name: "cod_lote_actividad" },
                    ]
                },
                {
                    name: "laboresxtarea",
                    using: "BTREE",
                    fields: [
                        { name: "cod_tarea" },
                    ]
                },
            ]
        });
        return labores;
    }
}
exports.labores = labores;
//# sourceMappingURL=labores.js.map