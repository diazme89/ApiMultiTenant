"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec_ventas = void 0;
const sequelize_1 = require("sequelize");
class ec_ventas extends sequelize_1.Model {
    static initModel(sequelize) {
        ec_ventas.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            id_mercadolibre: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: true
            },
            id_infomanager: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            moneda: {
                type: sequelize_1.DataTypes.CHAR(4),
                allowNull: true
            },
            cotizacion: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: true
            },
            cliente_id_ml: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: true
            },
            cliente: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            tipo_pago: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            total: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            iva_importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            usuario_fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            usuario_hora: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            id_ecommerce: {
                type: sequelize_1.DataTypes.DECIMAL(18, 0),
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            condicion_venta: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            cod_domicilio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_envio: {
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
            }
        }, {
            sequelize,
            tableName: 'ec_ventas',
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
        return ec_ventas;
    }
}
exports.ec_ventas = ec_ventas;
//# sourceMappingURL=ec_ventas.js.map