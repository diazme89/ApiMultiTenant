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
exports.tt_articulos_precios_aux = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_articulos_precios_aux extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_articulos_precios_aux.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            id_reg: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                defaultValue: 0
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_fabricante: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            precio_base: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            coeficiente_compra: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            precio_costo_neto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            precio_venta_neto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            coeficiente_venta: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            idproc: {
                type: sequelize_1.DataTypes.BIGINT,
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
            tableName: 'tt_articulos_precios_aux',
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
                    name: "tt_articulos_precios_aux_xkey1",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                        { name: "cod_fabricante" },
                    ]
                },
                {
                    name: "tt_articulos_precios_aux_idx_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha_alta" },
                    ]
                },
            ]
        });
        return tt_articulos_precios_aux;
    }
}
exports.tt_articulos_precios_aux = tt_articulos_precios_aux;
//# sourceMappingURL=tt_articulos_precios_aux.js.map