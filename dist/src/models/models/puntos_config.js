"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puntos_config = void 0;
const sequelize_1 = require("sequelize");
class puntos_config extends sequelize_1.Model {
    static initModel(sequelize) {
        puntos_config.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_punto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            precio_x_punto: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            aplica_todos_articulos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            aplica_todos_clientes: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            fecha_desde: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_hasta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            dias_vigencia: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            monto_min_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            mostrar_mensaje: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            aplica_con_descuento: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            iva_por: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            descuento_max: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'puntos_config',
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
        return puntos_config;
    }
}
exports.puntos_config = puntos_config;
//# sourceMappingURL=puntos_config.js.map