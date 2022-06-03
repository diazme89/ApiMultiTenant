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
exports.tt_anticiposvscancel = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_anticiposvscancel extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_anticiposvscancel.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                primaryKey: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            detalle: {
                type: sequelize_1.DataTypes.CHAR(255),
                allowNull: true
            },
            anticipo: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cancelacion: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
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
            tag: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tt_anticiposvscancel',
            timestamps: false,
            indexes: [
                {
                    name: "tt_anticiposvscancel_idx_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha_alta" },
                    ]
                },
                {
                    name: "tt_anticiposvscancel_idproc",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                    ]
                },
            ]
        });
        return tt_anticiposvscancel;
    }
}
exports.tt_anticiposvscancel = tt_anticiposvscancel;
//# sourceMappingURL=tt_anticiposvscancel.js.map