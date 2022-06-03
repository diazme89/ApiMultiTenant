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
exports.tt_nov_animales = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
class tt_nov_animales extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_nov_animales.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            id_reg: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_novedades: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_animal: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha_nac: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            color: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            caravana: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_categoria: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            pesoactual: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            id_madre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_padre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descrip_animal: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            raza: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            sexo: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            origen: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_grupo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            estado_rep: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            flag: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            error: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            descrip_error: {
                type: sequelize_1.DataTypes.STRING(200),
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
            marca: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_mov_posterior: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_mov_anterior: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha_mov_posterior: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_mov_anterior: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            tipo_mov_posterior: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            tipo_mov_anterior: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tt_nov_animales',
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
                    name: "tt_nov_animalesxkey1",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                        { name: "flag" },
                    ]
                },
                {
                    name: "tt_nov_animalesxkey2",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                        { name: "id_reg" },
                        { name: "flag" },
                    ]
                },
                {
                    name: "tt_nov_animalesxkey3",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                        { name: "cod_animal" },
                    ]
                },
            ]
        });
        return tt_nov_animales;
    }
}
exports.tt_nov_animales = tt_nov_animales;
//# sourceMappingURL=tt_nov_animales.js.map