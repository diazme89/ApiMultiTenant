"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presupuesto = void 0;
const sequelize_1 = require("sequelize");
class presupuesto extends sequelize_1.Model {
    static initModel(sequelize) {
        presupuesto.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            nro_operacion: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            detalle_general: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            tipo_movimiento: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            detalle_item: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            color: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            activo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_personal: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cuota_nro: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            id_presupuestos: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            moneda: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            monto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cotizacion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'presupuesto',
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
        return presupuesto;
    }
}
exports.presupuesto = presupuesto;
//# sourceMappingURL=presupuesto.js.map