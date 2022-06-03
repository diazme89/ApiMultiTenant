"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientes = void 0;
const sequelize_1 = require("sequelize");
class clientes extends sequelize_1.Model {
    static initModel(sequelize) {
        clientes.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            domicilio: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            telefonos: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            contacto: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cod_zona: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
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
            localidad: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            codigo_postal: {
                type: sequelize_1.DataTypes.CHAR(8),
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
            cod_localidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_vendedor: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            percepcionDGR: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            sedronar: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            percepciondgr_porc: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            saldo_inicial_tag_2: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            lista_precio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            mail: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            actualiza_saldo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            razon_social: {
                type: sequelize_1.DataTypes.STRING(80),
                allowNull: true
            },
            id_tipo_destino: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_grupo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_merma: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            planilla: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            percepcion1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            percepcion2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            cliente_campo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            cliente_cont: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            origen: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            cod_rubro_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            condicion_venta: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            cod_tipo_doc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            numero_doc: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            control_margen_venta: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_formula_iibb: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            habilitado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "S"
            },
            cod_compatibilidad: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                unique: "cod_compatibilidad"
            },
            clave: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true,
                defaultValue: ""
            }
        }, {
            sequelize,
            tableName: 'clientes',
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
                    name: "cod_compatibilidad",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_compatibilidad" },
                    ]
                },
                {
                    name: "clientes_cod_cliente",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cliente" },
                    ]
                },
                {
                    name: "clientes_cod_cuenta",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cuenta" },
                    ]
                },
            ]
        });
        return clientes;
    }
}
exports.clientes = clientes;
//# sourceMappingURL=clientes.js.map