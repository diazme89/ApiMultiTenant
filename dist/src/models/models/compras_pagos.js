"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras_pagos = void 0;
const sequelize_1 = require("sequelize");
class compras_pagos extends sequelize_1.Model {
    static initModel(sequelize) {
        compras_pagos.init({
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
            impreso: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            cod_unidad_negocio: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            responsable_pago: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
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
            tipo_cheque: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'compras_pagos',
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
                    name: "compras_pagos_fec_pago",
                    using: "BTREE",
                    fields: [
                        { name: "cheque_fec_pago" },
                    ]
                },
                {
                    name: "compras_pagos_id_comprobante",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
                {
                    name: "compras_pagos_cod_cuenta",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cuenta" },
                    ]
                },
                {
                    name: "compras_pagos_key1",
                    using: "BTREE",
                    fields: [
                        { name: "cod_banco" },
                        { name: "cheque_numero" },
                        { name: "cod_cuenta" },
                    ]
                },
            ]
        });
        return compras_pagos;
    }
}
exports.compras_pagos = compras_pagos;
//# sourceMappingURL=compras_pagos.js.map