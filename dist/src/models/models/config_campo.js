"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config_campo = void 0;
const sequelize_1 = require("sequelize");
class config_campo extends sequelize_1.Model {
    static initModel(sequelize) {
        config_campo.init({
            empresa: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            clave: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            version_db: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            prueba1: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            archivo_contabilidad: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            archivo_contabilidad2: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            archivo_contabilidad3: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            archivo_contabilidad4: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            archivo_contabilidad5: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            registra_ordenes: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            sincroniza: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            rep_usuario: {
                type: sequelize_1.DataTypes.CHAR(25),
                allowNull: true
            },
            rep_ip_server: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            rep_server_name: {
                type: sequelize_1.DataTypes.CHAR(25),
                allowNull: true
            },
            rep_timer: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            rep_base: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            stock_disponible: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            fecha_cierre: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                primaryKey: true
            },
            app_timeout: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            },
            ganaderia: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            imp_remito_mov_stock: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            mostrar_col_reg_numerados: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            mostrar_col_parte_nro: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_ctrl_stock_transito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_multiples_depositos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            trabaja_con_sincronizacion: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            mostrar_imag_pant_principales: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            permitir_mod_reg_otro_usuario: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilit_ganaderia: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilit_uso_cuadrillas: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilit_exportacion_sueldos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilit_prec_tarea_contratista: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilit_prec_manual_tarea_perso: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilit_synagro5: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilit_stock_transito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            ftp_usuario: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            ftp_clave: {
                type: sequelize_1.DataTypes.STRING(8),
                allowNull: true
            },
            ftp_url_respaldo_db: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: true
            },
            super_usuario_login: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            super_usuario_password: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            camino_respaldo_db: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: true
            },
            habilitar_ctrl_insumos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_ctrl_numparte: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_ctrl_cantidad_maq: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_ctrl_orig_venta_prod: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_ctrl_stock_insumos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_stock_ppp_auto: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_stock_ppp_gral: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_ctrl_precio_vta_prod: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_ctrl_peso_vta_prod: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_ctrl_lote_prod: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_uso_cant_lote_lab: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_ctrl_horas_maq_lab: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            contab_empresa1: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            contab_empresa2: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            contab_empresa3: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            contab_empresa4: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            contab_empresa5: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            habilitar_ctrl_labores_deposito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            pais: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            respaldo_usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            respaldo_proteger: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            respaldo_lunes: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            respaldo_martes: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            respaldo_miercoles: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            respaldo_jueves: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            respaldo_viernes: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            respaldo_sabado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            respaldo_domingo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            respaldo_fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            keep_alive_connection: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_num_orden_venta_automatico: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_cant_registros_tarea: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            version: {
                type: sequelize_1.DataTypes.DECIMAL(4, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'config_campo',
            timestamps: false
        });
        return config_campo;
    }
}
exports.config_campo = config_campo;
//# sourceMappingURL=config_campo.js.map