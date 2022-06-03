import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface config_campoAttributes {
  empresa?: string;
  clave?: number;
  version_db?: number;
  prueba1?: string;
  archivo_contabilidad?: string;
  archivo_contabilidad2?: string;
  archivo_contabilidad3?: string;
  archivo_contabilidad4?: string;
  archivo_contabilidad5?: string;
  registra_ordenes?: string;
  sincroniza?: string;
  rep_usuario?: string;
  rep_ip_server?: string;
  rep_server_name?: string;
  rep_timer?: number;
  rep_base?: string;
  stock_disponible?: string;
  fecha_cierre?: string;
  id?: number;
  app_timeout?: number;
  ganaderia?: string;
  imp_remito_mov_stock?: string;
  mostrar_col_reg_numerados?: string;
  mostrar_col_parte_nro?: string;
  habilitar_ctrl_stock_transito?: string;
  habilitar_multiples_depositos?: string;
  trabaja_con_sincronizacion?: string;
  mostrar_imag_pant_principales?: string;
  permitir_mod_reg_otro_usuario?: string;
  habilit_ganaderia?: string;
  habilit_uso_cuadrillas?: string;
  habilit_exportacion_sueldos?: string;
  habilit_prec_tarea_contratista?: string;
  habilit_prec_manual_tarea_perso?: string;
  habilit_synagro5?: string;
  habilit_stock_transito?: string;
  ftp_usuario?: string;
  ftp_clave?: string;
  ftp_url_respaldo_db?: string;
  super_usuario_login?: string;
  super_usuario_password?: string;
  camino_respaldo_db?: string;
  habilitar_ctrl_insumos?: string;
  habilitar_ctrl_numparte?: string;
  habilitar_ctrl_cantidad_maq?: string;
  habilitar_ctrl_orig_venta_prod?: string;
  habilitar_ctrl_stock_insumos?: string;
  habilitar_stock_ppp_auto?: string;
  habilitar_stock_ppp_gral?: string;
  habilitar_ctrl_precio_vta_prod?: string;
  habilitar_ctrl_peso_vta_prod?: string;
  habilitar_ctrl_lote_prod?: string;
  habilitar_uso_cant_lote_lab?: string;
  habilitar_ctrl_horas_maq_lab?: string;
  contab_empresa1?: number;
  contab_empresa2?: number;
  contab_empresa3?: number;
  contab_empresa4?: number;
  contab_empresa5?: number;
  habilitar_ctrl_labores_deposito?: string;
  pais?: number;
  respaldo_usuario?: string;
  respaldo_proteger?: string;
  respaldo_lunes?: string;
  respaldo_martes?: string;
  respaldo_miercoles?: string;
  respaldo_jueves?: string;
  respaldo_viernes?: string;
  respaldo_sabado?: string;
  respaldo_domingo?: string;
  respaldo_fecha?: string;
  keep_alive_connection?: string;
  habilitar_num_orden_venta_automatico?: string;
  habilitar_cant_registros_tarea?: string;
  version?: number;
}

export type config_campoPk = "id";
export type config_campoId = config_campo[config_campoPk];
export type config_campoCreationAttributes = Optional<config_campoAttributes, config_campoPk>;

export class config_campo extends Model<config_campoAttributes, config_campoCreationAttributes> implements config_campoAttributes {
  empresa?: string;
  clave?: number;
  version_db?: number;
  prueba1?: string;
  archivo_contabilidad?: string;
  archivo_contabilidad2?: string;
  archivo_contabilidad3?: string;
  archivo_contabilidad4?: string;
  archivo_contabilidad5?: string;
  registra_ordenes?: string;
  sincroniza?: string;
  rep_usuario?: string;
  rep_ip_server?: string;
  rep_server_name?: string;
  rep_timer?: number;
  rep_base?: string;
  stock_disponible?: string;
  fecha_cierre?: string;
  id?: number;
  app_timeout?: number;
  ganaderia?: string;
  imp_remito_mov_stock?: string;
  mostrar_col_reg_numerados?: string;
  mostrar_col_parte_nro?: string;
  habilitar_ctrl_stock_transito?: string;
  habilitar_multiples_depositos?: string;
  trabaja_con_sincronizacion?: string;
  mostrar_imag_pant_principales?: string;
  permitir_mod_reg_otro_usuario?: string;
  habilit_ganaderia?: string;
  habilit_uso_cuadrillas?: string;
  habilit_exportacion_sueldos?: string;
  habilit_prec_tarea_contratista?: string;
  habilit_prec_manual_tarea_perso?: string;
  habilit_synagro5?: string;
  habilit_stock_transito?: string;
  ftp_usuario?: string;
  ftp_clave?: string;
  ftp_url_respaldo_db?: string;
  super_usuario_login?: string;
  super_usuario_password?: string;
  camino_respaldo_db?: string;
  habilitar_ctrl_insumos?: string;
  habilitar_ctrl_numparte?: string;
  habilitar_ctrl_cantidad_maq?: string;
  habilitar_ctrl_orig_venta_prod?: string;
  habilitar_ctrl_stock_insumos?: string;
  habilitar_stock_ppp_auto?: string;
  habilitar_stock_ppp_gral?: string;
  habilitar_ctrl_precio_vta_prod?: string;
  habilitar_ctrl_peso_vta_prod?: string;
  habilitar_ctrl_lote_prod?: string;
  habilitar_uso_cant_lote_lab?: string;
  habilitar_ctrl_horas_maq_lab?: string;
  contab_empresa1?: number;
  contab_empresa2?: number;
  contab_empresa3?: number;
  contab_empresa4?: number;
  contab_empresa5?: number;
  habilitar_ctrl_labores_deposito?: string;
  pais?: number;
  respaldo_usuario?: string;
  respaldo_proteger?: string;
  respaldo_lunes?: string;
  respaldo_martes?: string;
  respaldo_miercoles?: string;
  respaldo_jueves?: string;
  respaldo_viernes?: string;
  respaldo_sabado?: string;
  respaldo_domingo?: string;
  respaldo_fecha?: string;
  keep_alive_connection?: string;
  habilitar_num_orden_venta_automatico?: string;
  habilitar_cant_registros_tarea?: string;
  version?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof config_campo {
    config_campo.init({
    empresa: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    clave: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    version_db: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    prueba1: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    archivo_contabilidad: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    archivo_contabilidad2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    archivo_contabilidad3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    archivo_contabilidad4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    archivo_contabilidad5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    registra_ordenes: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sincroniza: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    rep_usuario: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    rep_ip_server: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    rep_server_name: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    rep_timer: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    rep_base: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    stock_disponible: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fecha_cierre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      primaryKey: true
    },
    app_timeout: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ganaderia: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    imp_remito_mov_stock: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    mostrar_col_reg_numerados: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    mostrar_col_parte_nro: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_ctrl_stock_transito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_multiples_depositos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    trabaja_con_sincronizacion: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    mostrar_imag_pant_principales: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    permitir_mod_reg_otro_usuario: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilit_ganaderia: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilit_uso_cuadrillas: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilit_exportacion_sueldos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilit_prec_tarea_contratista: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilit_prec_manual_tarea_perso: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilit_synagro5: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilit_stock_transito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ftp_usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ftp_clave: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ftp_url_respaldo_db: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    super_usuario_login: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    super_usuario_password: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    camino_respaldo_db: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    habilitar_ctrl_insumos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_ctrl_numparte: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_ctrl_cantidad_maq: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_ctrl_orig_venta_prod: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_ctrl_stock_insumos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_stock_ppp_auto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_stock_ppp_gral: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_ctrl_precio_vta_prod: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_ctrl_peso_vta_prod: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_ctrl_lote_prod: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_uso_cant_lote_lab: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_ctrl_horas_maq_lab: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    contab_empresa1: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    contab_empresa2: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    contab_empresa3: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    contab_empresa4: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    contab_empresa5: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    habilitar_ctrl_labores_deposito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pais: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    respaldo_usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    respaldo_proteger: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    respaldo_lunes: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    respaldo_martes: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    respaldo_miercoles: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    respaldo_jueves: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    respaldo_viernes: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    respaldo_sabado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    respaldo_domingo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    respaldo_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    keep_alive_connection: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_num_orden_venta_automatico: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_cant_registros_tarea: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    version: {
      type: DataTypes.DECIMAL(4,2),
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
