"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas_pagos = void 0;
const sequelize_1 = require("sequelize");
class ventas_pagos extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas_pagos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cond_pago: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: false
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            cheque_banco: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            cheque_numero: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cheque_origen: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cheque_tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cheque_fec_emision: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cheque_fec_pago: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            tarjeta_nombre: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            tarjeta_numero: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            tarjeta_num_cupon: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            tarjeta_cod_autorizacion: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            cod_moneda_pago: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            },
            nro_caja: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            conciliacion_bancaria: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            fec_conciliacion_bancaria: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_unidad_negocio: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_tarjeta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_tarjeta_plan: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tarjeta_fec_presentacion: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            tarjeta_liq_numero: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: true
            },
            tarjeta_lote_numero: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            tarjeta_resumen_numero: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            cod_banco: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cheque_id: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true,
                defaultValue: 1
            },
            id_cierre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tarjeta_fec_acreditacion: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            tipo_cheque: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ventas_pagos',
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
                    name: "ventas_pago_fec_pago",
                    using: "BTREE",
                    fields: [
                        { name: "cheque_fec_pago" },
                    ]
                },
                {
                    name: "ventas_pagos_cod_cuenta",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cuenta" },
                    ]
                },
                {
                    name: "ventas_pagos_id_comp",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
            ]
        });
        return ventas_pagos;
    }
}
exports.ventas_pagos = ventas_pagos;
//# sourceMappingURL=ventas_pagos.js.map