"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proveedores = void 0;
const sequelize_1 = require("sequelize");
class proveedores extends sequelize_1.Model {
    static initModel(sequelize) {
        proveedores.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            telefono: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            contacto: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            domicilio: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            codigo_postal: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            fax: {
                type: sequelize_1.DataTypes.CHAR(25),
                allowNull: true
            },
            cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            categoria_iva: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cuit: {
                type: sequelize_1.DataTypes.CHAR(13),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            saldo_inicial: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            moneda: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            numero_cai: {
                type: sequelize_1.DataTypes.DECIMAL(20, 0),
                allowNull: true
            },
            vencimiento_cai: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            codigo_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cuenta_de_gasto: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cod_localidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            saldo_inicial_tag_2: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            tipo_retencion: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            actualiza_saldo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            cod_externo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            alicuota: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            sujeto_retencion: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            categoria_iibb: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            hasta_iibb: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            desde_iibb: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            responsable_pago: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            tipo_corredor: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            proveedor_campo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            fletero_campo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            contratista_campo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            arranque: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            formula: {
                type: sequelize_1.DataTypes.CHAR(80),
                allowNull: true
            },
            grupo: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: true
            },
            origen: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            cod_formula_iibb: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_tipo_doc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            numero_doc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            habilitado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "S"
            },
            domicilio_2: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            id_impositivo: {
                type: sequelize_1.DataTypes.CHAR(13),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'proveedores',
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
                    name: "proveedore_cod_proveedor",
                    using: "BTREE",
                    fields: [
                        { name: "cod_proveedor" },
                    ]
                },
                {
                    name: "proveedores_cod_cuenta",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cuenta" },
                    ]
                },
            ]
        });
        return proveedores;
    }
}
exports.proveedores = proveedores;
//# sourceMappingURL=proveedores.js.map