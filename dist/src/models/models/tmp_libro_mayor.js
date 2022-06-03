"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp_libro_mayor = void 0;
const sequelize_1 = require("sequelize");
class tmp_libro_mayor extends sequelize_1.Model {
    static initModel(sequelize) {
        tmp_libro_mayor.init({
            movimiento: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                primaryKey: true
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(230),
                allowNull: true
            },
            concepto: {
                type: sequelize_1.DataTypes.CHAR(255),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            debe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            haber: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo_comprobante: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cod_unidad_negocio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_jurisdiccion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            orden: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            plan_descripcion: {
                type: sequelize_1.DataTypes.CHAR(250),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tmp_libro_mayor',
            timestamps: false,
            indexes: [
                {
                    name: "idx_tmp_fecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha" },
                    ]
                },
            ]
        });
        return tmp_libro_mayor;
    }
}
exports.tmp_libro_mayor = tmp_libro_mayor;
//# sourceMappingURL=tmp_libro_mayor.js.map