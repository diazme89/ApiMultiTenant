"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produccion_olivo = void 0;
const sequelize_1 = require("sequelize");
class produccion_olivo extends sequelize_1.Model {
    static initModel(sequelize) {
        produccion_olivo.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_alta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            hora: {
                type: sequelize_1.DataTypes.STRING(5),
                allowNull: true
            },
            remito_numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            remito_pto_vta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
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
            cod_finca: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            variedad: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cod_transportista: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            pcio_flete: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            nro_carga: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            origen_peso_bruto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            origen_peso_tara: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            origen_peso_neto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cod_destino: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            destino_peso_bruto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            destino_peso_tara: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            destino_peso_neto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            descarte_porc: {
                type: sequelize_1.DataTypes.DECIMAL(5, 3),
                allowNull: true
            },
            descarte_kg: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            acidez_porc: {
                type: sequelize_1.DataTypes.DECIMAL(5, 3),
                allowNull: true
            },
            bin: {
                type: sequelize_1.DataTypes.DECIMAL(10, 3),
                allowNull: true
            },
            bin_kg: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            diferencia_peso: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            observacion: {
                type: sequelize_1.DataTypes.STRING(20),
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
            id_pc: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            destino_acidez_porc: {
                type: sequelize_1.DataTypes.DECIMAL(5, 3),
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
            tableName: 'produccion_olivo',
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
        return produccion_olivo;
    }
}
exports.produccion_olivo = produccion_olivo;
//# sourceMappingURL=produccion_olivo.js.map