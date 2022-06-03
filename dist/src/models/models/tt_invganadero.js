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
exports.tt_invganadero = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_invganadero extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_invganadero.init({
            cod_categoria: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: false
            },
            nro_cabezas: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            peso_cab: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            precio_kg: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            peso_total: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            importe_total: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            fecha_alta: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }, {
            sequelize,
            tableName: 'tt_invganadero',
            timestamps: false,
            indexes: [
                {
                    name: "invganadero_KEY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_categoria" },
                    ]
                },
            ]
        });
        return tt_invganadero;
    }
}
exports.tt_invganadero = tt_invganadero;
//# sourceMappingURL=tt_invganadero.js.map