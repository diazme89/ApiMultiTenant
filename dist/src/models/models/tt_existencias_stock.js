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
exports.tt_existencias_stock = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_existencias_stock extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_existencias_stock.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            idproc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            cod_rubro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            stock_entradas: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            stock_salidas: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            compras: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            ventas: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            cod_subrubro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            pto_de_reposicion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha_alta: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            existencia_anterior: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tt_existencias_stock',
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
                    name: "tt_existencias_stock_idproc",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                    ]
                },
                {
                    name: "tt_existencias_stock_cod",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                        { name: "cod_articulo" },
                        { name: "cod_deposito" },
                    ]
                },
            ]
        });
        return tt_existencias_stock;
    }
}
exports.tt_existencias_stock = tt_existencias_stock;
//# sourceMappingURL=tt_existencias_stock.js.map