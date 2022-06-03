"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asientos = void 0;
const sequelize_1 = require("sequelize");
class asientos extends sequelize_1.Model {
    static initModel(sequelize) {
        asientos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(20, 0),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(150),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            numero_comprobante: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            usuario_fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            usuario_hora: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            genera_op: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            nro_op: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            cod_solicita: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_controla: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_autoriza: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            saldo_inicial: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            cotizacion: {
                type: sequelize_1.DataTypes.DECIMAL(8, 3),
                allowNull: true
            },
            moneda: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            diferencia_cotizacion: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_jurisdiccion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            transferencia_tipo: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            },
            movimiento: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            cod_empresa_destino: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nro_envio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'asientos',
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
                    name: "asientos_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha" },
                    ]
                },
                {
                    name: "asientos_cod_empresa_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "cod_empresa" },
                        { name: "fecha" },
                    ]
                },
            ]
        });
        return asientos;
    }
}
exports.asientos = asientos;
//# sourceMappingURL=asientos.js.map