"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config_volcado_impuestos = void 0;
const sequelize_1 = require("sequelize");
class config_volcado_impuestos extends sequelize_1.Model {
    static initModel(sequelize) {
        config_volcado_impuestos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            cod_impuesto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            ignorar_lineas: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            separador_adjunto: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            comienzo_linea: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            final_linea: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            cantidad_campos: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            archivo_path: {
                type: sequelize_1.DataTypes.STRING(400),
                allowNull: true
            },
            usa_separador_campos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            separador_campos: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            cuit: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cuit_hasta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            categoria: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            categoria_hasta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha_hasta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            alicuota: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            alicuota_hasta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            alicuota_castigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'config_volcado_impuestos',
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
        return config_volcado_impuestos;
    }
}
exports.config_volcado_impuestos = config_volcado_impuestos;
//# sourceMappingURL=config_volcado_impuestos.js.map