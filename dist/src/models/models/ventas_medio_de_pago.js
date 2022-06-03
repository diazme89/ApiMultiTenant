"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas_medio_de_pago = void 0;
const sequelize_1 = require("sequelize");
class ventas_medio_de_pago extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas_medio_de_pago.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            orden: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: false
            },
            tipo_medio_pago: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: false
            },
            monto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: false
            },
            cod_tarjeta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_tarjeta_plan: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tj_numero: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            tj_num_cupon: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            tj_cod_autorizacion: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            tj_fec_presentacion: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            tj_liq_numero: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: true
            },
            tj_lote_numero: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            tj_resumen_numero: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ventas_medio_de_pago',
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
                    name: "ventas_medio_de_pago_id_comp",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
            ]
        });
        return ventas_medio_de_pago;
    }
}
exports.ventas_medio_de_pago = ventas_medio_de_pago;
//# sourceMappingURL=ventas_medio_de_pago.js.map