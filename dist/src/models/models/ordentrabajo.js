"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordentrabajo = void 0;
const sequelize_1 = require("sequelize");
class ordentrabajo extends sequelize_1.Model {
    static initModel(sequelize) {
        ordentrabajo.init({
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
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
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
                type: sequelize_1.DataTypes.DECIMAL(9, 3),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            supervisor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tecnico: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            justificacion: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            ejecutada: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_lote_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ordentrabajo',
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
        return ordentrabajo;
    }
}
exports.ordentrabajo = ordentrabajo;
//# sourceMappingURL=ordentrabajo.js.map