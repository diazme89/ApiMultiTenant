"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webservice = void 0;
const sequelize_1 = require("sequelize");
class webservice extends sequelize_1.Model {
    static initModel(sequelize) {
        webservice.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(150),
                allowNull: true
            },
            activo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            client_id: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            client_secret: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            user_name: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            PASSWORD: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            grant_type: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true,
                defaultValue: "password"
            },
            post_url: {
                type: sequelize_1.DataTypes.CHAR(250),
                allowNull: true
            },
            lote: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            sincroniza_automatico: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            id_usuario: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_lista_precios: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            sincronizacion_estatica: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            fecha_sinc_automatica: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            hora_sinc_automatica: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            intervalo_hora_sinc_auto: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            ultima_fecha_sinc: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ultima_hora_sinc: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            mostrar_advertencia: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "S"
            },
            observaciones: {
                type: sequelize_1.DataTypes.CHAR(255),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true,
                defaultValue: 1
            },
            cod_cuenta_contable_envios: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_deposito_cabecera: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_lista_precios_cabecera: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cuenta_contable_interes: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cliente_predeterminado: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            usa_cod_compatibilidad_lp: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            usa_plugin_mayorista: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            cod_lista_mayorista: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'webservice',
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
        return webservice;
    }
}
exports.webservice = webservice;
//# sourceMappingURL=webservice.js.map