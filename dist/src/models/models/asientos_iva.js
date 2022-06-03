"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asientos_iva = void 0;
const sequelize_1 = require("sequelize");
class asientos_iva extends sequelize_1.Model {
    static initModel(sequelize) {
        asientos_iva.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            tipo_comprobante: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            letra_comprobante: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            numero_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            total_facturado: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe_gravado: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe_exento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe_nogravado: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe_iva21: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe_iva10: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe_iva27: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe_otro_iva: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            retenciones_porcentaje: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            retenciones_importe: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            importe_noinscriptos: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            ingresos_brutos: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            id_asientos: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'asientos_iva',
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
        return asientos_iva;
    }
}
exports.asientos_iva = asientos_iva;
//# sourceMappingURL=asientos_iva.js.map