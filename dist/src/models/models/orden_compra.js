"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orden_compra = void 0;
const sequelize_1 = require("sequelize");
class orden_compra extends sequelize_1.Model {
    static initModel(sequelize) {
        orden_compra.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
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
            plazo_entrega: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            lugar_entrega: {
                type: sequelize_1.DataTypes.CHAR(80),
                allowNull: true
            },
            forma_pago: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            cod_emisor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_autoriza: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            fecha_carga: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            hora_carga: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            iva: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            impuestos: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            factura: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            pagado: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            entregado: {
                type: sequelize_1.DataTypes.CHAR(25),
                allowNull: true
            },
            datos_empresa: {
                type: sequelize_1.DataTypes.CHAR(200),
                allowNull: true
            },
            nro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'orden_compra',
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
        return orden_compra;
    }
}
exports.orden_compra = orden_compra;
//# sourceMappingURL=orden_compra.js.map