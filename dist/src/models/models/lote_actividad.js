"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lote_actividad = void 0;
const sequelize_1 = require("sequelize");
class lote_actividad extends sequelize_1.Model {
    static initModel(sequelize) {
        lote_actividad.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                unique: "lote_actividadxkey1"
            },
            cod_lote: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_est_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            activa: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            superficie: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            fecha_desde: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_hasta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'lote_actividad',
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
                    name: "lote_actividadxkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
                {
                    name: "lote_actividadxkey2",
                    using: "BTREE",
                    fields: [
                        { name: "cod_periodo" },
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return lote_actividad;
    }
}
exports.lote_actividad = lote_actividad;
//# sourceMappingURL=lote_actividad.js.map