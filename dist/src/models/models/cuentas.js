"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentas = void 0;
const sequelize_1 = require("sequelize");
class cuentas extends sequelize_1.Model {
    static initModel(sequelize) {
        cuentas.init({
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            subcodigo: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            descrip: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad1: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad2: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad3: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad4: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad5: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad6: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad7: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad8: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad9: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad10: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad11: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad12: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            precio1: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            precio2: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            precio3: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            precio4: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            precio5: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            precio6: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            precio7: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            precio8: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            precio9: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            precio10: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            precio11: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            precio12: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            planilla: {
                type: sequelize_1.DataTypes.CHAR(7),
                allowNull: true
            },
            tabla: {
                type: sequelize_1.DataTypes.CHAR(7),
                allowNull: true
            },
            iva: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            nombre_tabla: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            tipo_cuenta: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cuenta_predef: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            uni_medida: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            cod_contabilidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            computa_rpp: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_cultivo_rel: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            color: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            cod_afip_especie: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'cuentas',
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
        return cuentas;
    }
}
exports.cuentas = cuentas;
//# sourceMappingURL=cuentas.js.map