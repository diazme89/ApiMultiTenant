import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface configAttributes {
  id: number;
  empresa?: string;
  direccion?: string;
  telefonos?: string;
  categoria_iva?: string;
  cuit?: string;
  ingresos_brutos?: string;
  inicio_actividad?: string;
  iva_compras?: number;
  iva_ventas?: number;
  ingresos_brutos_compras?: number;
  ingresos_brutos_ventas?: number;
  impuesto_interno_compras?: number;
  impuesto_interno_ventas?: number;
  numero_de_base?: number;
  no_grabado_compras?: number;
  no_grabado_ventas?: number;
  recibe_maquinas?: string;
  agente_retencion?: string;
  trabaja_synagro?: string;
  nvlp_comision?: number;
  nvlp_recupero_gastos?: number;
  nvlp_fletes?: number;
  nvlp_bonificacion?: number;
  ventas_bonificacion?: number;
  valor_dolar?: number;
  cuenta_ingresos?: number;
  cuenta_egresos?: number;
  mueve_stock?: string;
  deposito_predeterminado?: number;
  registra_ordenes?: string;
  nvlpv_retencion_ganancias?: number;
  iva_cerrado_hasta?: string;
  nvlpv_retencion_iva?: number;
  gestion_comercial?: string;
  version_db?: number;
  rep_usuario?: string;
  rep_ip_server?: string;
  rep_server_name?: string;
  rep_timer?: number;
  rep_base?: string;
  trabajo_oc?: string;
  tipo_impresion?: string;
  imp_factura_vtas?: string;
  imp_remito_vtas?: string;
  imp_otros?: string;
  imp_factura_vtas_bndj?: number;
  imp_remito_vtas_bndj?: number;
  imp_recibo_vtas_bndj?: number;
  genera_remito_auto?: string;
  percep_compras_iva?: number;
  percep_compras_ingr_brutos?: number;
  espejado_activo?: string;
  espejado_usuario?: string;
  espejado_clave?: string;
  espejado_servidor?: string;
  espejado_archivo?: string;
  espejado_tcp_ip?: string;
  espejado_ultimo_borrado?: Date;
  genera_recibo_auto?: string;
  imp_factura_vtas_copias?: number;
  imp_remito_vtas_copias?: number;
  imp_otros_copias?: number;
  imp_factura_vtas_auto?: string;
  imp_remito_vtas_auto?: string;
  imp_factura_vtas_b?: string;
  recibo_prov_numero?: number;
  imp_recibo_vtas_copias?: number;
  cta_bonificacion_venta?: number;
  agente_ret_ing_brutos?: string;
  advertencia_stock?: string;
  activar_op_cta_cble?: string;
  mostrar_cliente_moroso?: string;
  espejado_tcp_puerto?: number;
  espejado_servidor_dart?: string;
  ultimo_deposito?: string;
  trabaja_unid_medida?: string;
  usar_descuentos_fact_vta?: string;
  panel?: string;
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
  usa_fiscal?: string;
  base_campo?: string;
  fac_vta_multiple_remito?: string;
  nombre_motor_campo?: string;
  tipo_conexion?: string;
  server_campo?: string;
  liq_compra_retencion_ganancias?: number;
  liq_compra_retencion_iva?: number;
  habilit_ctas_cbles_grupos?: string;
  usa_multimoneda?: string;
  moneda?: string;
  pais?: number;
  activa_lista?: string;
  mueve_stock_comp?: string;
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
  permitir_cancelar_otro_centro_co?: string;
  habilita_edicion_comprobante?: string;
  campo_tipo?: string;
  cierra_inactividad_minutos?: number;
  keep_alive_connection?: string;
  usa_factelect?: number;
  modo_factelect?: number;
  cierre_balance_hasta?: string;
  alicuota_x_proveedor?: number;
  agente_ret_ing_brutos_perso_fisi?: string;
  usa_factelect_exportacion?: number;
  clave_certificado_digital?: string;
  punto_venta_afip?: number;
  habilitar_circuito_corredor?: number;
  aplica_mascara?: number;
  digitos_mascara?: number;
  percepcion1?: number;
  percepcion2?: number;
  monto_minimo_ret_ganan?: number;
  permitir_cancelar_otro_centro_costo?: string;
  agente_ret_ing_brutos_perso_fisica?: string;
  forzar_deposito?: string;
  habilitar_num_orden_venta_automatico?: string;
  cuit_duplicado?: number;
  cod_periodo_activo?: number;
  usa_gen_formula?: string;
  habilitar_dep_destino_presu?: string;
  facmos_habilita_edit_nro?: string;
  facmos_habilita_edit_fecha?: string;
  remcompra_habilita_edit_fecha?: string;
  PackID_habilitado?: string;
  PackID_server?: string;
  PackID_database?: string;
  habilitar_tags_articulos?: number;
  impuesto_municipal_ventas?: number;
  impuesto_nacional_ventas?: number;
  impuesto_municipal_compras?: number;
  impuesto_nacional_compras?: number;
  habilitar_numero_recibos?: string;
  habilitar_ctrl_stock_gen_remito_vta?: string;
  habilitar_modo_intersucursales?: string;
  habilitar_pago_factura?: string;
  cantidad_dias_consulta?: number;
  cod_cta_interes_recargo?: number;
  cod_cta_pago_efectivo?: number;
  habilitar_rep_ret_op?: number;
  monto_ctrol_doc_ticket_b?: number;
  habilitar_lp_articulo?: string;
  mueve_stock_mpago?: string;
  habilitar_uso_consignatario?: string;
  imprimir_remito_fiscal?: string;
  habilita_ptovta_recibo?: string;
  permitir_gen_nc_sin_comprob?: string;
  habilitar_promociones?: string;
  habilitar_factura?: string;
  ocultar_precio_remito_ventas?: string;
  ocultar_precio_remito_compras?: string;
  habilita_validacion_iva?: string;
  imprime_automatico?: string;
  tipo_impresor_fiscal?: string;
  version_impresor_fiscal?: string;
  liq_compra_retencion_iibb?: number;
  habilitar_nc?: string;
  habilita_pedido_venta?: string;
  dias_vigencia_PV?: number;
  usa_mapa_de_fecha?: string;
  usa_gen_formula_venta?: string;
  nro_version_update?: number;
  permitir_actualizar_base?: string;
  usa_config_nueva_libro_iva?: string;
  usa_webservice?: string;
  cod_cliente?: number;
  aviso_imp_compra?: string;
  aviso_imp_venta?: string;
  usa_domicilio_entrega?: string;
  habilitar_uso_solicitud_precio?: string;
  habilitar_gest_identificador?: string;
  vendedor_obligatorio?: string;
  Precio_Unit_Iva_Visible?: string;
  usa_equivalencia_medida?: string;
  habilitar_cierre_caja?: string;
  relacion_usuario_vendedor?: string;
  habilitar_presupuesto_confirmado?: string;
  habilitar_movimiento_interdeposito?: string;
  habilita_lista_precio_predef_etiq?: string;
  lista_precio_predef_etiq?: number;
  cta_cble_descuento?: number;
  usa_pv_sin_stock?: string;
  min_dias_entrega_pv?: number;
  no_modifica_cond_de_vta?: string;
  habilita_control_vigencia_OC?: string;
  dias_vigencia_OC?: number;
  trabaja_art_importacion?: string;
  usa_sistema_puntos?: string;
  porc_nc_financiera?: number;
  usa_simulacion_pago_pr?: string;
  usa_vendedor_x_fa?: string;
  permitir_gen_nc_sin_comprob_c?: string;
  habilitar_nd?: string;
  permitir_gen_nd_sin_comprob?: string;
  habilita_ptovta_recibo_multiple?: string;
  usa_autorizacion_oc?: string;
  monto_autoriza_oc?: number;
  dias_autorizacion_oc?: number;
  habilita_cliente_predet_x_emp?: string;
}

export type configPk = "id";
export type configId = config[configPk];
export type configCreationAttributes = Optional<configAttributes, configPk>;

export class config extends Model<configAttributes, configCreationAttributes> implements configAttributes {
  id!: number;
  empresa?: string;
  direccion?: string;
  telefonos?: string;
  categoria_iva?: string;
  cuit?: string;
  ingresos_brutos?: string;
  inicio_actividad?: string;
  iva_compras?: number;
  iva_ventas?: number;
  ingresos_brutos_compras?: number;
  ingresos_brutos_ventas?: number;
  impuesto_interno_compras?: number;
  impuesto_interno_ventas?: number;
  numero_de_base?: number;
  no_grabado_compras?: number;
  no_grabado_ventas?: number;
  recibe_maquinas?: string;
  agente_retencion?: string;
  trabaja_synagro?: string;
  nvlp_comision?: number;
  nvlp_recupero_gastos?: number;
  nvlp_fletes?: number;
  nvlp_bonificacion?: number;
  ventas_bonificacion?: number;
  valor_dolar?: number;
  cuenta_ingresos?: number;
  cuenta_egresos?: number;
  mueve_stock?: string;
  deposito_predeterminado?: number;
  registra_ordenes?: string;
  nvlpv_retencion_ganancias?: number;
  iva_cerrado_hasta?: string;
  nvlpv_retencion_iva?: number;
  gestion_comercial?: string;
  version_db?: number;
  rep_usuario?: string;
  rep_ip_server?: string;
  rep_server_name?: string;
  rep_timer?: number;
  rep_base?: string;
  trabajo_oc?: string;
  tipo_impresion?: string;
  imp_factura_vtas?: string;
  imp_remito_vtas?: string;
  imp_otros?: string;
  imp_factura_vtas_bndj?: number;
  imp_remito_vtas_bndj?: number;
  imp_recibo_vtas_bndj?: number;
  genera_remito_auto?: string;
  percep_compras_iva?: number;
  percep_compras_ingr_brutos?: number;
  espejado_activo?: string;
  espejado_usuario?: string;
  espejado_clave?: string;
  espejado_servidor?: string;
  espejado_archivo?: string;
  espejado_tcp_ip?: string;
  espejado_ultimo_borrado?: Date;
  genera_recibo_auto?: string;
  imp_factura_vtas_copias?: number;
  imp_remito_vtas_copias?: number;
  imp_otros_copias?: number;
  imp_factura_vtas_auto?: string;
  imp_remito_vtas_auto?: string;
  imp_factura_vtas_b?: string;
  recibo_prov_numero?: number;
  imp_recibo_vtas_copias?: number;
  cta_bonificacion_venta?: number;
  agente_ret_ing_brutos?: string;
  advertencia_stock?: string;
  activar_op_cta_cble?: string;
  mostrar_cliente_moroso?: string;
  espejado_tcp_puerto?: number;
  espejado_servidor_dart?: string;
  ultimo_deposito?: string;
  trabaja_unid_medida?: string;
  usar_descuentos_fact_vta?: string;
  panel?: string;
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
  usa_fiscal?: string;
  base_campo?: string;
  fac_vta_multiple_remito?: string;
  nombre_motor_campo?: string;
  tipo_conexion?: string;
  server_campo?: string;
  liq_compra_retencion_ganancias?: number;
  liq_compra_retencion_iva?: number;
  habilit_ctas_cbles_grupos?: string;
  usa_multimoneda?: string;
  moneda?: string;
  pais?: number;
  activa_lista?: string;
  mueve_stock_comp?: string;
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
  permitir_cancelar_otro_centro_co?: string;
  habilita_edicion_comprobante?: string;
  campo_tipo?: string;
  cierra_inactividad_minutos?: number;
  keep_alive_connection?: string;
  usa_factelect?: number;
  modo_factelect?: number;
  cierre_balance_hasta?: string;
  alicuota_x_proveedor?: number;
  agente_ret_ing_brutos_perso_fisi?: string;
  usa_factelect_exportacion?: number;
  clave_certificado_digital?: string;
  punto_venta_afip?: number;
  habilitar_circuito_corredor?: number;
  aplica_mascara?: number;
  digitos_mascara?: number;
  percepcion1?: number;
  percepcion2?: number;
  monto_minimo_ret_ganan?: number;
  permitir_cancelar_otro_centro_costo?: string;
  agente_ret_ing_brutos_perso_fisica?: string;
  forzar_deposito?: string;
  habilitar_num_orden_venta_automatico?: string;
  cuit_duplicado?: number;
  cod_periodo_activo?: number;
  usa_gen_formula?: string;
  habilitar_dep_destino_presu?: string;
  facmos_habilita_edit_nro?: string;
  facmos_habilita_edit_fecha?: string;
  remcompra_habilita_edit_fecha?: string;
  PackID_habilitado?: string;
  PackID_server?: string;
  PackID_database?: string;
  habilitar_tags_articulos?: number;
  impuesto_municipal_ventas?: number;
  impuesto_nacional_ventas?: number;
  impuesto_municipal_compras?: number;
  impuesto_nacional_compras?: number;
  habilitar_numero_recibos?: string;
  habilitar_ctrl_stock_gen_remito_vta?: string;
  habilitar_modo_intersucursales?: string;
  habilitar_pago_factura?: string;
  cantidad_dias_consulta?: number;
  cod_cta_interes_recargo?: number;
  cod_cta_pago_efectivo?: number;
  habilitar_rep_ret_op?: number;
  monto_ctrol_doc_ticket_b?: number;
  habilitar_lp_articulo?: string;
  mueve_stock_mpago?: string;
  habilitar_uso_consignatario?: string;
  imprimir_remito_fiscal?: string;
  habilita_ptovta_recibo?: string;
  permitir_gen_nc_sin_comprob?: string;
  habilitar_promociones?: string;
  habilitar_factura?: string;
  ocultar_precio_remito_ventas?: string;
  ocultar_precio_remito_compras?: string;
  habilita_validacion_iva?: string;
  imprime_automatico?: string;
  tipo_impresor_fiscal?: string;
  version_impresor_fiscal?: string;
  liq_compra_retencion_iibb?: number;
  habilitar_nc?: string;
  habilita_pedido_venta?: string;
  dias_vigencia_PV?: number;
  usa_mapa_de_fecha?: string;
  usa_gen_formula_venta?: string;
  nro_version_update?: number;
  permitir_actualizar_base?: string;
  usa_config_nueva_libro_iva?: string;
  usa_webservice?: string;
  cod_cliente?: number;
  aviso_imp_compra?: string;
  aviso_imp_venta?: string;
  usa_domicilio_entrega?: string;
  habilitar_uso_solicitud_precio?: string;
  habilitar_gest_identificador?: string;
  vendedor_obligatorio?: string;
  Precio_Unit_Iva_Visible?: string;
  usa_equivalencia_medida?: string;
  habilitar_cierre_caja?: string;
  relacion_usuario_vendedor?: string;
  habilitar_presupuesto_confirmado?: string;
  habilitar_movimiento_interdeposito?: string;
  habilita_lista_precio_predef_etiq?: string;
  lista_precio_predef_etiq?: number;
  cta_cble_descuento?: number;
  usa_pv_sin_stock?: string;
  min_dias_entrega_pv?: number;
  no_modifica_cond_de_vta?: string;
  habilita_control_vigencia_OC?: string;
  dias_vigencia_OC?: number;
  trabaja_art_importacion?: string;
  usa_sistema_puntos?: string;
  porc_nc_financiera?: number;
  usa_simulacion_pago_pr?: string;
  usa_vendedor_x_fa?: string;
  permitir_gen_nc_sin_comprob_c?: string;
  habilitar_nd?: string;
  permitir_gen_nd_sin_comprob?: string;
  habilita_ptovta_recibo_multiple?: string;
  usa_autorizacion_oc?: string;
  monto_autoriza_oc?: number;
  dias_autorizacion_oc?: number;
  habilita_cliente_predet_x_emp?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof config {
    config.init({
    id: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    empresa: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    direccion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    telefonos: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    categoria_iva: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cuit: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ingresos_brutos: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    inicio_actividad: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    iva_compras: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    iva_ventas: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ingresos_brutos_compras: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ingresos_brutos_ventas: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    impuesto_interno_compras: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    impuesto_interno_ventas: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    numero_de_base: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    no_grabado_compras: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    no_grabado_ventas: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    recibe_maquinas: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    agente_retencion: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    trabaja_synagro: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nvlp_comision: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nvlp_recupero_gastos: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nvlp_fletes: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nvlp_bonificacion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ventas_bonificacion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    valor_dolar: {
      type: DataTypes.DECIMAL(6,3),
      allowNull: true
    },
    cuenta_ingresos: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cuenta_egresos: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    mueve_stock: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    deposito_predeterminado: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    registra_ordenes: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nvlpv_retencion_ganancias: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    iva_cerrado_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nvlpv_retencion_iva: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    gestion_comercial: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    version_db: {
      type: DataTypes.DECIMAL(4,0),
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
    trabajo_oc: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo_impresion: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    imp_factura_vtas: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    imp_remito_vtas: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    imp_otros: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    imp_factura_vtas_bndj: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    imp_remito_vtas_bndj: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    imp_recibo_vtas_bndj: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    genera_remito_auto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    percep_compras_iva: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    percep_compras_ingr_brutos: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    espejado_activo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    espejado_usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    espejado_clave: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    espejado_servidor: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    espejado_archivo: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    espejado_tcp_ip: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    espejado_ultimo_borrado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    genera_recibo_auto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    imp_factura_vtas_copias: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    imp_remito_vtas_copias: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    imp_otros_copias: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    imp_factura_vtas_auto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    imp_remito_vtas_auto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    imp_factura_vtas_b: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    recibo_prov_numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    imp_recibo_vtas_copias: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    cta_bonificacion_venta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    agente_ret_ing_brutos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    advertencia_stock: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    activar_op_cta_cble: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    mostrar_cliente_moroso: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    espejado_tcp_puerto: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    espejado_servidor_dart: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ultimo_deposito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    trabaja_unid_medida: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    usar_descuentos_fact_vta: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    panel: {
      type: DataTypes.CHAR(1),
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
    usa_fiscal: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    base_campo: {
      type: DataTypes.CHAR(150),
      allowNull: true
    },
    fac_vta_multiple_remito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nombre_motor_campo: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    tipo_conexion: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    server_campo: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    liq_compra_retencion_ganancias: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    liq_compra_retencion_iva: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    habilit_ctas_cbles_grupos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    usa_multimoneda: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    moneda: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    pais: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    activa_lista: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    mueve_stock_comp: {
      type: DataTypes.CHAR(2),
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
    permitir_cancelar_otro_centro_co: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilita_edicion_comprobante: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    campo_tipo: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    cierra_inactividad_minutos: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    keep_alive_connection: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    usa_factelect: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    modo_factelect: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cierre_balance_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    alicuota_x_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    agente_ret_ing_brutos_perso_fisi: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    usa_factelect_exportacion: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    clave_certificado_digital: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    punto_venta_afip: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    habilitar_circuito_corredor: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    aplica_mascara: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    digitos_mascara: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    percepcion1: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    percepcion2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    monto_minimo_ret_ganan: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    permitir_cancelar_otro_centro_costo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    agente_ret_ing_brutos_perso_fisica: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    forzar_deposito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_num_orden_venta_automatico: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cuit_duplicado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true,
      defaultValue: 0
    },
    cod_periodo_activo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    usa_gen_formula: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_dep_destino_presu: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    facmos_habilita_edit_nro: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    facmos_habilita_edit_fecha: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    remcompra_habilita_edit_fecha: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PackID_habilitado: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    PackID_server: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PackID_database: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    habilitar_tags_articulos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    impuesto_municipal_ventas: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    impuesto_nacional_ventas: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    impuesto_municipal_compras: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    impuesto_nacional_compras: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    habilitar_numero_recibos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_ctrl_stock_gen_remito_vta: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_modo_intersucursales: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilitar_pago_factura: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    cantidad_dias_consulta: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    cod_cta_interes_recargo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cta_pago_efectivo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    habilitar_rep_ret_op: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true,
      defaultValue: 0
    },
    monto_ctrol_doc_ticket_b: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    habilitar_lp_articulo: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    mueve_stock_mpago: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    habilitar_uso_consignatario: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    imprimir_remito_fiscal: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilita_ptovta_recibo: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    permitir_gen_nc_sin_comprob: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_promociones: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitar_factura: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ocultar_precio_remito_ventas: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    ocultar_precio_remito_compras: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilita_validacion_iva: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    imprime_automatico: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    tipo_impresor_fiscal: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "H"
    },
    version_impresor_fiscal: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: "N"
    },
    liq_compra_retencion_iibb: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    habilitar_nc: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilita_pedido_venta: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    dias_vigencia_PV: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    usa_mapa_de_fecha: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    usa_gen_formula_venta: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "S"
    },
    nro_version_update: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    permitir_actualizar_base: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: "N"
    },
    usa_config_nueva_libro_iva: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    usa_webservice: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    aviso_imp_compra: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    aviso_imp_venta: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    usa_domicilio_entrega: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilitar_uso_solicitud_precio: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilitar_gest_identificador: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    vendedor_obligatorio: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    Precio_Unit_Iva_Visible: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    usa_equivalencia_medida: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilitar_cierre_caja: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    relacion_usuario_vendedor: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilitar_presupuesto_confirmado: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilitar_movimiento_interdeposito: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilita_lista_precio_predef_etiq: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    lista_precio_predef_etiq: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    cta_cble_descuento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    usa_pv_sin_stock: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    min_dias_entrega_pv: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    no_modifica_cond_de_vta: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilita_control_vigencia_OC: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    dias_vigencia_OC: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    trabaja_art_importacion: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    usa_sistema_puntos: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    porc_nc_financiera: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    usa_simulacion_pago_pr: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    usa_vendedor_x_fa: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "F"
    },
    permitir_gen_nc_sin_comprob_c: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilitar_nd: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    permitir_gen_nd_sin_comprob: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilita_ptovta_recibo_multiple: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    usa_autorizacion_oc: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    monto_autoriza_oc: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    dias_autorizacion_oc: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    habilita_cliente_predet_x_emp: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'config',
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
  return config;
  }
}
