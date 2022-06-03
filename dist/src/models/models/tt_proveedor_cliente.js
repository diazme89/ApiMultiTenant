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
exports.tt_proveedor_cliente = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_proveedor_cliente extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_proveedor_cliente.init({
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
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre_cuenta: {
                type: sequelize_1.DataTypes.STRING(40),
                allowNull: true
            },
            saldo_inicial1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            saldo_inicial2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            anti1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            anti2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            nc1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            nc2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            nd1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            nd2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            fact1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            fact2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            nv1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            nv2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            op1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            op2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            pm1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            pm2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            rec1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            rec2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            asiento_debe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            asiento_haber: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            entrada1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            entrada2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            salida1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            salida2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            saldo1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            saldo2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            plan_descripcion: {
                type: sequelize_1.DataTypes.STRING(40),
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            origen: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            fecha_alta: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }, {
            sequelize,
            tableName: 'tt_proveedor_cliente',
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
                    name: "tt_proveedor_cliente_2",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                    ]
                },
            ]
        });
        return tt_proveedor_cliente;
    }
}
exports.tt_proveedor_cliente = tt_proveedor_cliente;
//# sourceMappingURL=tt_proveedor_cliente.js.map