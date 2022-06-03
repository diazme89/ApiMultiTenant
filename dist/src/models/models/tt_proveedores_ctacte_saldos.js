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
exports.tt_proveedores_ctacte_saldos = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_proveedores_ctacte_saldos extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_proveedores_ctacte_saldos.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            categoria_iva: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cuit: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            domicilio: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            telefonos: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            saldo: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
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
            },
            saldo2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tt_proveedores_ctacte_saldos',
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
                    name: "tt_proveedores_ctacte_saldos_xprove",
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                        { name: "empresa" },
                    ]
                },
            ]
        });
        return tt_proveedores_ctacte_saldos;
    }
}
exports.tt_proveedores_ctacte_saldos = tt_proveedores_ctacte_saldos;
//# sourceMappingURL=tt_proveedores_ctacte_saldos.js.map