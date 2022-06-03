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
exports.tt_cpro_aux = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_cpro_aux extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_cpro_aux.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            id_cpo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                defaultValue: 0
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            circuito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                defaultValue: 0
            },
            marca: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true,
                defaultValue: 0
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            tipo_comprobante: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            },
            codigo: {
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
            tableName: 'tt_cpro_aux',
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
                    name: "idx_tt_cpro_aux_1",
                    using: "BTREE",
                    fields: [
                        { name: "circuito" },
                        { name: "cod_empresa" },
                        { name: "tag" },
                    ]
                },
                {
                    name: "idx_tt_cpro_aux_xidcpro",
                    using: "BTREE",
                    fields: [
                        { name: "id_cpo" },
                        { name: "circuito" },
                        { name: "marca" },
                    ]
                },
            ]
        });
        return tt_cpro_aux;
    }
}
exports.tt_cpro_aux = tt_cpro_aux;
//# sourceMappingURL=tt_cpro_aux.js.map