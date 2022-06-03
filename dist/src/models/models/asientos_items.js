"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asientos_items = void 0;
const sequelize_1 = require("sequelize");
class asientos_items extends sequelize_1.Model {
    static initModel(sequelize) {
        asientos_items.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_asientos: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            debe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            haber: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            numero_cheque: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            banco: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            fec_emision: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fec_pago: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            gasto: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            alicuota_iva: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_prov_cli: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            conciliacion_bancaria: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            numero_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
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
            cod_corredor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
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
            id_cuenta_destino: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
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
            tableName: 'asientos_items',
            hasTrigger: true,
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
                    name: "asientos_items_fec_pago",
                    using: "BTREE",
                    fields: [
                        { name: "fec_pago" },
                    ]
                },
                {
                    name: "asientos_items_cod_prov_cli",
                    using: "BTREE",
                    fields: [
                        { name: "cod_prov_cli" },
                    ]
                },
                {
                    name: "asientos_items_id_asientos",
                    using: "BTREE",
                    fields: [
                        { name: "id_asientos" },
                    ]
                },
                {
                    name: "asientos_items_id_cuenta",
                    using: "BTREE",
                    fields: [
                        { name: "id_cuenta" },
                    ]
                },
                {
                    name: "asientos_items_key1",
                    using: "BTREE",
                    fields: [
                        { name: "cod_banco" },
                        { name: "numero_cheque" },
                    ]
                },
            ]
        });
        return asientos_items;
    }
}
exports.asientos_items = asientos_items;
//# sourceMappingURL=asientos_items.js.map