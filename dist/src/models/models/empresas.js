"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresas = void 0;
const sequelize_1 = require("sequelize");
class empresas extends sequelize_1.Model {
    static initModel(sequelize) {
        empresas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true,
                unique: "empresasxcodigo"
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            direccion: {
                type: sequelize_1.DataTypes.CHAR(200),
                allowNull: true
            },
            cuit: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            telefonos: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            categoria_iva: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            ingresos_brutos: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            inicio_actividad: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            usa_fiscal: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_externo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_localidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            codigo_postal: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            },
            conv_multilateral: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: true
            },
            agente_retencion: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            grupo: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: true
            },
            nombre_1: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            numero_cai: {
                type: sequelize_1.DataTypes.DECIMAL(20, 0),
                allowNull: true,
                defaultValue: 0
            },
            vencimiento_cai: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                defaultValue: 0
            },
            email: {
                type: sequelize_1.DataTypes.CHAR(200),
                allowNull: true
            },
            agente_percepcion: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                defaultValue: 0
            }
        }, {
            sequelize,
            tableName: 'empresas',
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
                    name: "empresasxcodigo",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_empresa" },
                    ]
                },
            ]
        });
        return empresas;
    }
}
exports.empresas = empresas;
//# sourceMappingURL=empresas.js.map