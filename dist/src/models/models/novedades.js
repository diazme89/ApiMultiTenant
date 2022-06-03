"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.novedades = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class novedades extends sequelize_1.Model {
    static initModel(sequelize) {
        novedades.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            tipo_mov: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: false
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_grupo: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            num_comp: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_categoria: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.CHAR(200),
                allowNull: true
            },
            remito: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_categoria_orig: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_establecimiento_orig: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            kg: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            kg_total: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            kg_precio: {
                type: sequelize_1.DataTypes.DECIMAL(13, 4),
                allowNull: true
            },
            imp_bruto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            flete: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            gastos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            importe_total: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            num_compra: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            num_venta: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_transportista: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_actividad_orig: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            motivo: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            kg_ant: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cod_grupo_orig: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            kg_total_bruto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            porc_desbaste: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            cant_aux: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            fecha_alta: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
            tipo_servicio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_movimiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_inicio_servicio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_origen: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'novedades',
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
                    name: "novedades_xtipo_movimiento",
                    using: "BTREE",
                    fields: [
                        { name: "tipo_movimiento" },
                    ]
                },
                {
                    name: "novedades_xestab_actividad",
                    using: "BTREE",
                    fields: [
                        { name: "cod_establecimiento" },
                        { name: "cod_actividad" },
                    ]
                },
                {
                    name: "novedadesxid_inicio_servicio",
                    using: "BTREE",
                    fields: [
                        { name: "id_inicio_servicio" },
                    ]
                },
                {
                    name: "novedadesxkey1",
                    using: "BTREE",
                    fields: [
                        { name: "fecha" },
                        { name: "tipo_movimiento" },
                    ]
                },
            ]
        });
        return novedades;
    }
}
exports.novedades = novedades;
//# sourceMappingURL=novedades.js.map