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
exports.tt_cuentas_saldos = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_cuentas_saldos extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_cuentas_saldos.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cuenta_madre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            tot_debe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            tot_haber: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            saldo_deudor: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            saldo_acreedor: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            imputable: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            unidad_negocio: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            empresa: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            fecha_alta: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }, {
            sequelize,
            tableName: 'tt_cuentas_saldos',
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
        return tt_cuentas_saldos;
    }
}
exports.tt_cuentas_saldos = tt_cuentas_saldos;
//# sourceMappingURL=tt_cuentas_saldos.js.map