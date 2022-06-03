"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ajustes = void 0;
const sequelize_1 = require("sequelize");
class ajustes extends sequelize_1.Model {
    static initModel(sequelize) {
        ajustes.init({
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            cultivo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            empresa: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            observar: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            ordenado: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            existencia: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            ajuste: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            },
            motivo: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(13, 4),
                allowNull: true
            },
            unidades: {
                type: sequelize_1.DataTypes.DECIMAL(10, 3),
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            fecha_carga: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            hora_carga: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            destino: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            proveedor: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            },
            id_pc: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            fecha_ingreso: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            factura_nro: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_producto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            remito_nro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            remito_punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            nro_vale: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_solicitante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_retira: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            idinterdeposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_externo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            factura_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            factura_punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            remito_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ajustes',
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
        return ajustes;
    }
}
exports.ajustes = ajustes;
//# sourceMappingURL=ajustes.js.map