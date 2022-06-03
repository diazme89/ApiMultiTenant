"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pid_cruce_factura_remito = void 0;
const sequelize_1 = require("sequelize");
class pid_cruce_factura_remito extends sequelize_1.Model {
    static initModel(sequelize) {
        pid_cruce_factura_remito.init({
            syn_id_compra: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            syn_cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            pid_id_compra: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            pid_comprobante_remito: {
                type: sequelize_1.DataTypes.CHAR(18),
                allowNull: false
            },
            pid_fecha_remito: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            pid_observacion_remito: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            pid_cantidad_insumo: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: false
            },
            pid_cantidad_insumo_total: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'pid_cruce_factura_remito',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "syn_id_compra" },
                        { name: "syn_cod_articulo" },
                        { name: "pid_id_compra" },
                    ]
                },
            ]
        });
        return pid_cruce_factura_remito;
    }
}
exports.pid_cruce_factura_remito = pid_cruce_factura_remito;
//# sourceMappingURL=pid_cruce_factura_remito.js.map