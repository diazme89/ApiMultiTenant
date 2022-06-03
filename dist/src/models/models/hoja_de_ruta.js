"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoja_de_ruta = void 0;
const sequelize_1 = require("sequelize");
class hoja_de_ruta extends sequelize_1.Model {
    static initModel(sequelize) {
        hoja_de_ruta.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_desde: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_hasta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            nro_de_hoja: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_transporte: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_turno: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            detalle: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true
            },
            importe_total: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            importe_cobrado: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
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
            }
        }, {
            sequelize,
            tableName: 'hoja_de_ruta',
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
        return hoja_de_ruta;
    }
}
exports.hoja_de_ruta = hoja_de_ruta;
//# sourceMappingURL=hoja_de_ruta.js.map