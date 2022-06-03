"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produccion_cania = void 0;
const sequelize_1 = require("sequelize");
class produccion_cania extends sequelize_1.Model {
    static initModel(sequelize) {
        produccion_cania.init({
            tipo_cosec: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            numero_rem: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            numero_val: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            AREA: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            lote: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            maquinista: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cuartero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            transportista: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            distanci: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: true
            },
            pcio_flete: {
                type: sequelize_1.DataTypes.DECIMAL(13, 4),
                allowNull: true
            },
            tarea: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            cortador: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            cargador: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            pelador1: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            pelador2: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            pelador3: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            nro_carga: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            or_bruto: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: true
            },
            or_tara: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            or_neto: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: true
            },
            hora: {
                type: sequelize_1.DataTypes.STRING(5),
                allowNull: true
            },
            destino: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            fecha_ent: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            de_bruto: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            de_tara: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            de_neto: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: true
            },
            kg_neto_dest: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            trash_kg: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            trash_porc: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            rendimient: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            pureza: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            pol_porc: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            factor_k: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            dato1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            dato2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cania_neta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            kg_azucar: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            observacion: {
                type: sequelize_1.DataTypes.STRING(20),
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
            planillero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
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
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            variedad: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cod_maquina: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_maq_cuartero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_maq_transportista: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nro_cta: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: true
            },
            nro_frente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            distancia_km: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            or_trash_kg: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            or_rendim: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            nro_muestra: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            bxleidos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            polleido: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            or_kg_azucar: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            or_trash_porc: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            temperatura: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            bx_corregido: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            pol_jugo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            rend_pureza: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            pol_cania: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            prop_trash_porc: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            prop_trash_kg: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_finca_externo: {
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
            tableName: 'produccion_cania',
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
        return produccion_cania;
    }
}
exports.produccion_cania = produccion_cania;
//# sourceMappingURL=produccion_cania.js.map