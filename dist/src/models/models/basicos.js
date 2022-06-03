"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicos = void 0;
const sequelize_1 = require("sequelize");
class basicos extends sequelize_1.Model {
    static initModel(sequelize) {
        basicos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            precio_uta: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            activo_corriente: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            activo_no_corriente: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            pasivo_corto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            pasivo_largo: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            patrimonio: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            primer_mes: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            pcio_milimetro: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras3: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras4: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras5: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras6: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras7: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras8: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras9: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras10: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras11: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_compras12: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas1: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas2: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas3: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas4: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas5: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas6: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas7: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas8: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas9: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas10: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas11: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            iva_ventas12: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            superficie: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            anio_amortizacion: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            anio_amortizacion_agricultura: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            anio_amortizacion_bienes: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            otros_ingresos_plan: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            otros_egresos_plan: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            precio_uta_contratista: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            utas_pesos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            otros_ingresos_gest: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            otros_egresos_gest: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            direccion: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            cuit: {
                type: sequelize_1.DataTypes.CHAR(13),
                allowNull: true
            },
            anio_comienzo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            pcio_milimetro_plan: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            actividad: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            situacion_iva: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            localidad: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            provincia: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'basicos',
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
        return basicos;
    }
}
exports.basicos = basicos;
//# sourceMappingURL=basicos.js.map