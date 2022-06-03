"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comprobantes_formatos = void 0;
const sequelize_1 = require("sequelize");
class comprobantes_formatos extends sequelize_1.Model {
    static initModel(sequelize) {
        comprobantes_formatos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(11, 0),
                allowNull: false,
                defaultValue: 0,
                primaryKey: true
            },
            nombre_formato: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            datawindow: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            formato: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.STRING(45),
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
            tipo_comprobante: {
                type: sequelize_1.DataTypes.STRING(6),
                allowNull: true
            },
            tipo_factura: {
                type: sequelize_1.DataTypes.STRING(3),
                allowNull: true
            },
            tag: {
                type: sequelize_1.DataTypes.STRING(3),
                allowNull: true
            },
            servimanager: {
                type: sequelize_1.DataTypes.STRING(3),
                allowNull: true
            },
            circuito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'comprobantes_formatos',
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
        return comprobantes_formatos;
    }
}
exports.comprobantes_formatos = comprobantes_formatos;
//# sourceMappingURL=comprobantes_formatos.js.map