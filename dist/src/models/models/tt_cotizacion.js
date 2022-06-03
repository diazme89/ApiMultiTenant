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
exports.tt_cotizacion = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_cotizacion extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_cotizacion.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            indice: {
                type: sequelize_1.DataTypes.FLOAT,
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
            indice_compra: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true
            },
            indice_venta: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tt_cotizacion',
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
                    name: "tt_cotizacion_idproc",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                    ]
                },
                {
                    name: "tt_cotizacion_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha" },
                    ]
                },
                {
                    name: "tt_cotizacion_idproc_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                        { name: "fecha" },
                    ]
                },
            ]
        });
        return tt_cotizacion;
    }
}
exports.tt_cotizacion = tt_cotizacion;
//# sourceMappingURL=tt_cotizacion.js.map