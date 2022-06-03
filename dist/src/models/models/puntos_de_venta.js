"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puntos_de_venta = void 0;
const sequelize_1 = require("sequelize");
class puntos_de_venta extends sequelize_1.Model {
    static initModel(sequelize) {
        puntos_de_venta.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            id_comprobante_rel: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_destino: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false
            },
            domicilio_fiscal: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
            },
            habilitado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            nro_cai: {
                type: sequelize_1.DataTypes.DECIMAL(20, 0),
                allowNull: true
            },
            vto_cai: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            numero_inicial_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true,
                defaultValue: 1
            }
        }, {
            sequelize,
            tableName: 'puntos_de_venta',
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
        return puntos_de_venta;
    }
}
exports.puntos_de_venta = puntos_de_venta;
//# sourceMappingURL=puntos_de_venta.js.map