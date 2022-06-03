"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stock_campo = void 0;
const sequelize_1 = require("sequelize");
class stock_campo extends sequelize_1.Model {
    static initModel(sequelize) {
        stock_campo.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            ajuste: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: false
            },
            motivo: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: false
            },
            id_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            detalle: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            fecha_ingreso: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            fecha_carga: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            hora_carga: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: false
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: false
            },
            id_dep_origen: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_dep_destino: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: false
            },
            remito_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            remito_punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            remito_nro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            factura_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            factura_punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            factura_nro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_certificacion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_stock_relac: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            proveedor: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'stock_campo',
            timestamps: false
        });
        return stock_campo;
    }
}
exports.stock_campo = stock_campo;
//# sourceMappingURL=stock_campo.js.map