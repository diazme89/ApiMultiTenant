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
exports.tt_balance_temp = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_balance_temp extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_balance_temp.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cuenta_madre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(70),
                allowNull: false
            },
            tot_debe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            tot_haber: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            saldo_deudor: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            saldo_acreedor: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.STRING(1),
                allowNull: true,
                defaultValue: "N"
            },
            imputable: {
                type: sequelize_1.DataTypes.STRING(1),
                allowNull: true,
                defaultValue: "N"
            },
            tipo: {
                type: sequelize_1.DataTypes.STRING(1),
                allowNull: true
            },
            nivel: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            fecha_alta: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }, {
            sequelize,
            tableName: 'tt_balance_temp',
            timestamps: false,
            indexes: [
                {
                    name: "tt_balance_cuenta_madre",
                    using: "BTREE",
                    fields: [
                        { name: "cuenta_madre" },
                    ]
                },
            ]
        });
        return tt_balance_temp;
    }
}
exports.tt_balance_temp = tt_balance_temp;
//# sourceMappingURL=tt_balance_temp.js.map