"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec_config = void 0;
const sequelize_1 = require("sequelize");
class ec_config extends sequelize_1.Model {
    static initModel(sequelize) {
        ec_config.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            id_destino: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_lista_precios: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            },
            tipo_comprobante: {
                type: sequelize_1.DataTypes.CHAR(6),
                allowNull: true
            },
            punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true
            },
            tipo_presupuesto: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cod_vendedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            access_token_mp: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            publishkey_mp: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ec_config',
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
        return ec_config;
    }
}
exports.ec_config = ec_config;
//# sourceMappingURL=ec_config.js.map