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
exports.tt_inventario = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_inventario extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_inventario.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            ajustes: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            negativos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            transito: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            labores: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            unidades: {
                type: sequelize_1.DataTypes.DECIMAL(18, 3),
                allowNull: true
            },
            existencia_transito: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            existencia: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
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
            }
        }, {
            sequelize,
            tableName: 'tt_inventario',
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
        return tt_inventario;
    }
}
exports.tt_inventario = tt_inventario;
//# sourceMappingURL=tt_inventario.js.map