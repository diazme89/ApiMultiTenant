"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produccion = void 0;
const sequelize_1 = require("sequelize");
class produccion extends sequelize_1.Model {
    static initModel(sequelize) {
        produccion.init({
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
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: true
            },
            kg_origen: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: true
            },
            humedad1: {
                type: sequelize_1.DataTypes.DECIMAL(3, 1),
                allowNull: true
            },
            kg_neto_orig: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: true
            },
            cod_dest: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            destino: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            kg_destino: {
                type: sequelize_1.DataTypes.DECIMAL(12, 3),
                allowNull: true
            },
            humedad2: {
                type: sequelize_1.DataTypes.DECIMAL(3, 1),
                allowNull: true
            },
            kg_neto_dest: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: true
            },
            diferencia: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: true
            },
            romaneo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            zaranda: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            volatil: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            cuerp_ext: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            tierra: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            quebrados: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            daniados: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            chamico: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            otros: {
                type: sequelize_1.DataTypes.DECIMAL(10, 3),
                allowNull: true
            },
            factor: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            kg_neto_co: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            observar: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            AREA: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            finca: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            tipo_origen: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            origen: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
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
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
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
            kg_bruto_origen: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
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
            tipo_grano: {
                type: sequelize_1.DataTypes.CHAR(25),
                allowNull: true
            },
            cod_cuentayorden1: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_cuentayorden2: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_corredor: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_representante: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_asignador_cupo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            proc_calle: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            proc_nro: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            },
            proc_codpostal: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            proc_localidad: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            proc_depto: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            proc_provincia: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            fecha_cupo: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            variedad: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cod_lote_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_contrato: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_contratista: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'produccion',
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
                    name: "produccion_id_contrato",
                    using: "BTREE",
                    fields: [
                        { name: "id_contrato" },
                    ]
                },
                {
                    name: "produccion_cod_dest",
                    using: "BTREE",
                    fields: [
                        { name: "cod_dest" },
                    ]
                },
                {
                    name: "produccion_origen",
                    using: "BTREE",
                    fields: [
                        { name: "origen" },
                    ]
                },
            ]
        });
        return produccion;
    }
}
exports.produccion = produccion;
//# sourceMappingURL=produccion.js.map