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
exports.tt_cheques_salidos = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_cheques_salidos extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_cheques_salidos.init({
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
            fecha_pago: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            codigo_cheque: {
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
            cuenta: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cheque_id: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true,
                defaultValue: 1
            }
        }, {
            sequelize,
            tableName: 'tt_cheques_salidos',
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
                    name: "tt_cheques_salidos_idx_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha_alta" },
                    ]
                },
                {
                    name: "tt_cheques_salidos_idproc",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                    ]
                },
            ]
        });
        return tt_cheques_salidos;
    }
}
exports.tt_cheques_salidos = tt_cheques_salidos;
//# sourceMappingURL=tt_cheques_salidos.js.map