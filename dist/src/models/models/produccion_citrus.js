"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produccion_citrus = void 0;
const sequelize_1 = require("sequelize");
class produccion_citrus extends sequelize_1.Model {
    static initModel(sequelize) {
        produccion_citrus.init({
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            lote: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            transporte: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            distancia: {
                type: sequelize_1.DataTypes.DECIMAL(13, 4),
                allowNull: true
            },
            pcio_flete: {
                type: sequelize_1.DataTypes.DECIMAL(13, 4),
                allowNull: true
            },
            remito: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            kg_neto_orig: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_dest: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            kg_neto_dest: {
                type: sequelize_1.DataTypes.DECIMAL(11, 3),
                allowNull: true
            },
            kg_neto_co: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            observar: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            AREA: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            finca: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            grupo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            bandejas_org: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            kg_bandejas_org: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            bandejas_dest: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            kg_bandejas_dest: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            por_aceite: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cosechero_nomb1: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cosechero_band1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cosechero_kilos1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cosechero_nomb2: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cosechero_band2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cosechero_kilos2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cosechero_nomb3: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cosechero_band3: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cosechero_kilos3: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            kg_bruto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            descarte_por: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            descarte_kg: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            BIN: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            peso_bin: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
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
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            id_pc: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            gasto_flete: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            gasto_comercializacion: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            gasto_acondicionamiento: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            volcada: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            kg_bruto_origen: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            kg_tara_origen: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            patente_camion: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            patente_acoplado: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            nombre_chofer: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            cuit_chofer: {
                type: sequelize_1.DataTypes.CHAR(13),
                allowNull: true
            },
            numero_certificado: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            importado_packing: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            variedad: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cod_unidad_productiva: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            tipo_embase: {
                type: sequelize_1.DataTypes.CHAR(6),
                allowNull: true
            },
            peso_prom_embase: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            },
            destino: {
                type: sequelize_1.DataTypes.CHAR(14),
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
            tableName: 'produccion_citrus',
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
        return produccion_citrus;
    }
}
exports.produccion_citrus = produccion_citrus;
//# sourceMappingURL=produccion_citrus.js.map