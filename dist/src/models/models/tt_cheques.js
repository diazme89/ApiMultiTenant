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
exports.tt_cheques = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_cheques extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_cheques.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            banco: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            fecha_emision: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_pago: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            tipo_origen: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            },
            codigo_cheque: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            cuenta: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            tipo_cheque: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            idproc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha_alta: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            moneda: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cotizacion: {
                type: sequelize_1.DataTypes.DECIMAL(8, 3),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            movimiento: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            cod_empresa_destino: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_banco: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cheque_id: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true,
                defaultValue: 1
            },
            tipo_chequera: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tt_cheques',
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
                    name: "tt_chequesxidproc",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                    ]
                },
                {
                    name: "tt_cheques_fechapago",
                    using: "BTREE",
                    fields: [
                        { name: "fecha_pago" },
                    ]
                },
                {
                    name: "tt_cheques_idx_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha_alta" },
                    ]
                },
            ]
        });
        return tt_cheques;
    }
}
exports.tt_cheques = tt_cheques;
//# sourceMappingURL=tt_cheques.js.map