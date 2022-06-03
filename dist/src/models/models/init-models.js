"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrados = exports.basicos = exports.bases_contables = exports.bancos = exports.atributos_de_precios = exports.asignar_rubros = exports.asientos_iva = exports.asientos_items = exports.asientos = exports.articulos_unidad_medida = exports.articulos_transformacion = exports.articulos_tags = exports.articulos_serie = exports.articulos_caracteristicas_valores = exports.articulos_caracteristicas = exports.articulos = exports.articulo_equiv_unidades = exports.arch_importados = exports.aplicaciones = exports.animales_estados = exports.animales = exports.amortizaciones = exports.ajustes = exports.afip_unimed = exports.afip_tipos_tributos = exports.afip_tipos_iva = exports.afip_tipos_documentos = exports.afip_tipos_datos_opcional = exports.afip_texportacion = exports.afip_puntos_ventas = exports.afip_provincias = exports.afip_paises = exports.afip_nomenclador = exports.afip_monedas = exports.afip_localidades = exports.afip_incoterms = exports.afip_idiomas = exports.afip_especies = exports.afip_cuitdest = exports.afip_cosechas = exports.afip_conceptos = exports.afip_comprobantes_codigos = exports.afip_comprobantes = exports.actualizacion_utas = exports.actualizacion_dolar = exports.actualizacion = exports.actividades_campo = exports.actividad_periodo = exports.actividad = exports.act_categoria = void 0;
exports.cotizacion = exports.coordenadas = exports.configuracion_libro_iva = exports.config_volcado_impuestos = exports.config_redondeos = exports.config_parametros = exports.config_iva = exports.config_importacion = exports.config_circuitos = exports.config_campo = exports.config_app = exports.config = exports.conf_ejercicio_economico = exports.conf_colores_deudas = exports.condicion_venta_tipo = exports.comprobantes_relacion = exports.comprobantes_formatos_default = exports.comprobantes_formatos = exports.comprobantes_destino = exports.compras_vencimientos = exports.compras_stock_items = exports.compras_retenciones_detalle = exports.compras_retenciones = exports.compras_remitos = exports.compras_produccion = exports.compras_pagos = exports.compras_labores = exports.compras_items = exports.compras_facturas = exports.compras_comprob_retencion = exports.compras_comprob_ingresos_bruto = exports.compras = exports.comision_x_vendedor = exports.colores = exports.clientes_seguimiento = exports.clientes_pagos = exports.clientes_impuestos = exports.clientes_domicilios = exports.clientes_destinos = exports.clientes_acuerdos = exports.clientes2 = exports.clientes = exports.cierres_fiscales = exports.chequeras = exports.categoria_iva = exports.categoria_aplicativos = exports.categoria = exports.cania_peladores = exports.cajas = exports.cab_lista_precio = void 0;
exports.filtro_animales = exports.figuras_items = exports.figuras = exports.fac_elect_xempresa = exports.establecimientos_depositos = exports.establecimiento = exports.estab_categoria = exports.estab_actividad = exports.equivalencias_packing = exports.entidades = exports.empresas = exports.empresa_choferes = exports.ec_ventas_items = exports.ec_ventas = exports.ec_tipos_envios = exports.ec_subrubros = exports.ec_rubros = exports.ec_config_parametros = exports.ec_config_circuitos = exports.ec_config = exports.ec_clientes = exports.ec_categorias_ml = exports.ec_carrito = exports.ec_articulos_imagenes = exports.ec_articulos = exports.distanci = exports.destinos_stock = exports.destinos_direcciones = exports.destinos_campo = exports.destino_precios = exports.depositos = exports.datos_climaticos_items = exports.datos_climaticos = exports.datos_basicos4 = exports.datos_basicos3 = exports.datos_basicos2 = exports.datos_basicos1 = exports.datawindows = exports.cuentas_predefinidas = exports.cuentas_predef_ganaderia = exports.cuentas_lotes = exports.cuentas_ingenio = exports.cuentas_frecuentes = exports.cuentas_disponibilidades = exports.cuentas_cruce = exports.cuentas_cash_flow = exports.cuentas = exports.cuadrillas = exports.cta_cble_grupo_item = exports.cta_cble_grupo = void 0;
exports.impresoras = exports.importacion_items = exports.importacion_declaracion = exports.im_usuarios = exports.identificador_campo = exports.identificador = exports.hviciavillosa = exports.htriticale = exports.htrigo = exports.hsorgo = exports.hsoja = exports.hquinoa = exports.hoja_ruta_estado = exports.hoja_de_ruta_items = exports.hoja_de_ruta = exports.hmoha = exports.hmijo = exports.hmani = exports.hmaiz = exports.hlupino = exports.hlino = exports.hist_precio_categoria = exports.hist_peso_categoria = exports.hgirasol = exports.hgarbanzo = exports.hcolza = exports.hchia = exports.hcenteno = exports.hcebada = exports.havena = exports.harroz = exports.grupo_caracteristicas = exports.grupo_animales = exports.grafico = exports.gest_identificador_movimientos = exports.gest_identificador = exports.generador_formula = exports.formulas_variables = exports.formato_aplicativo = exports.fmt_carta_porte = exports.finan_contratistas = exports.filtro_vales = exports.filtro_stock = exports.filtro_plantacion = exports.filtro_orden_trabajo = exports.filtro_mov_per = exports.filtro_labores = exports.filtro_granos = exports.filtro_citrus = exports.filtro_cania = void 0;
exports.ordentrabajo_maquinarias = exports.ordentrabajo_insumos = exports.ordentrabajo = exports.ordenes_sql = exports.orden_de_compra_items = exports.orden_de_compra = exports.orden_compra_insumos = exports.orden_compra_centros_costo = exports.orden_compra = exports.novedades = exports.nov_animales = exports.nota_pedido_insumos = exports.nota_pedido = exports.movimientos_maquinaria = exports.movimientos = exports.moneda = exports.modelos = exports.mod_tareas_riego = exports.mod_tareas_personal = exports.mod_tare = exports.mod_insu = exports.maquinas_mant_tareas = exports.maquinas_mant_insumos = exports.maquinas_mant = exports.maquinar = exports.lotes_unidad_productiva = exports.lotes_coordenadas = exports.lotes = exports.lote_actividad_up = exports.lote_actividad = exports.localidad = exports.lluvias = exports.lista_precios = exports.labores_personal = exports.labores_maquinarias = exports.labores_mant_tareas = exports.labores_log_externo = exports.labores_insumos = exports.labores = exports.l_margen_bruto = exports.items_facturas_cpos = exports.items_cruces = exports.insumos_ordenes_trabajo = exports.inseminacion = exports.indice_de_precios = exports.impuestotercero_items = exports.impuestotercero = exports.impuestos_cabecera = exports.impuestos = exports.impresoras_fiscales = void 0;
exports.promociones_plan_empresas = exports.promociones_plan = exports.promociones = exports.promocion_empresa = exports.produccion_olivo = exports.produccion_citrus = exports.produccion_cania = exports.produccion = exports.presupuestos = exports.presupuesto = exports.plani_lluvias = exports.planeamiento_lotes = exports.plan = exports.pla_ventas_produccion_items = exports.pla_ventas_produccion = exports.pla_tareas_riego = exports.pla_tareas_personal = exports.pla_tareas_items = exports.pla_tareas = exports.pla_tare = exports.pla_modelos_tareas_riego = exports.pla_modelos_tareas_insumos = exports.pla_modelos_tareas = exports.pla_modelos = exports.pla_lotes_tareas_riego = exports.pla_lotes_tareas_insumos = exports.pla_lotes_tareas = exports.pla_lotes = exports.pla_insumos_items = exports.pla_insumos = exports.pla_insu = exports.pla_financiero_ctas_items = exports.pla_financiero_ctas = exports.pla_egresos_actividad_items = exports.pla_egresos_actividad = exports.pla_contratistas_items = exports.pla_contratistas = exports.pla_comercializacion = exports.pid_equivalencia_proveedor = exports.pid_equivalencia_insumo = exports.pid_cruce_factura_remito = exports.personal_tareas = exports.personal = exports.permisos = exports.periodos = exports.pcuentas_modelo = exports.pcuentas = exports.pais = exports.origen = exports.ordentrabajo_personal = void 0;
exports.tipo_impuesto = exports.tipo_destino = exports.ticket_comprobante = exports.testing = exports.tarjetas_plan_empresas = exports.tarjetas_plan = exports.tarjetas = exports.tareas_seguridad = exports.tareas_precios = exports.tareas = exports.tarea_concepto = exports.tablas = exports.t_proveedores_marca_saldos = exports.t_pcuentas_establecimientos = exports.t_log = exports.t_inf_saldos_hist = exports.t_empresas_servicios = exports.t_ctacte_marca_saldos = exports.superficie_ganadera = exports.subrubros = exports.stockheader_movimientos = exports.stockheader_estados = exports.stock_item = exports.stock_header = exports.stock_campo = exports.stock = exports.secuencia = exports.sanidad = exports.rubros_iva = exports.rubros_clientes = exports.rubros = exports.rodeo = exports.rendicion_items = exports.rendicion = exports.remitos_campo = exports.registros_borrados = exports.raza = exports.puntos_x_venta = exports.puntos_empresas = exports.puntos_de_venta_usuarios = exports.puntos_de_venta = exports.puntos_de_reposicion = exports.puntos_config = exports.puntos_clientes = exports.puntos_articulos = exports.provincia = exports.proveedores_precios_articulos = exports.proveedores_pagos = exports.proveedores = exports.proveedor_impuestos = void 0;
exports.tt_inventario_animales = exports.tt_inventario = exports.tt_import_archivo_ingenio = exports.tt_fiscal = exports.tt_existencias_stock = exports.tt_establecimientos = exports.tt_empresas_servicios = exports.tt_empresa = exports.tt_deposito = exports.tt_debug = exports.tt_cuentas_saldos_aux = exports.tt_cuentas_saldos = exports.tt_cuentas_nivel = exports.tt_cuentas_disponibilidades_saldos_aux = exports.tt_cuentas_disponibilidades_saldos = exports.tt_cuentas = exports.tt_ctas_aux = exports.tt_cpro_aux = exports.tt_cotizacion = exports.tt_cosecha = exports.tt_cons_stock_aux = exports.tt_cons_stock = exports.tt_comprobantes_pendientes = exports.tt_comp_numero = exports.tt_clientes_saldos_aux = exports.tt_clientes_ctacte_saldos_aux = exports.tt_clientes_ctacte_saldos = exports.tt_clientes = exports.tt_cheques_salidos = exports.tt_cheques = exports.tt_cashflow_aux1 = exports.tt_balance_temp = exports.tt_balance = exports.tt_articulos_precios_aux = exports.tt_articulos = exports.tt_anticiposvscancel = exports.tt_animales = exports.tt_actividades = exports.transporte = exports.transformacion_items = exports.transformacion = exports.tmp_resultado_x_un = exports.tmp_libro_mayor = exports.tmp_articulos_c = exports.tipos_documentos_py = exports.tipos_documentos = exports.tipos_dinero = exports.tipo_ticket = exports.tipo_servicio_ganaderia = exports.tipo_mov = void 0;
exports.ventas_remitos_facturas = exports.ventas_produccion = exports.ventas_pagos = exports.ventas_medio_de_pago = exports.ventas_items_serie = exports.ventas_items = exports.ventas_facturas = exports.ventas_cert_deposito = exports.ventas = exports.vendedores = exports.usuarios_tareas = exports.usuarios_permisos = exports.usuarios_depositos = exports.usuarios_campo = exports.usuarios = exports.unidades = exports.unidad_productiva = exports.unidad_negocio = exports.unidad_de_medida = exports.turnos = exports.tt_volcado_impuestos = exports.tt_usuarios_seleccion = exports.tt_up = exports.tt_unidad_negocio = exports.tt_tesoreria_retenciones = exports.tt_tesoreria_caso1 = exports.tt_tesoreria = exports.tt_stock_paso = exports.tt_sql = exports.tt_resultado_actividades_aux = exports.tt_resultado_actividades = exports.tt_res_emp_servicios_aux = exports.tt_res_emp_servicios = exports.tt_proveedores_saldos_aux = exports.tt_proveedores_ctacte_saldos_aux = exports.tt_proveedores_ctacte_saldos = exports.tt_proveedores = exports.tt_proveedor_cliente = exports.tt_plapaggral_aux = exports.tt_plapaggral = exports.tt_pla_insumos = exports.tt_periodos = exports.tt_parametros = exports.tt_novedades = exports.tt_nov_insumos = exports.tt_nov_animales = exports.tt_lote_actividad = exports.tt_log = exports.tt_invganadero_aux = exports.tt_invganadero = void 0;
exports.initModels = exports.webservice_afip = exports.webservice = exports.volcada = exports.ventas_vencimientos = exports.ventas_unidad_item = exports.ventas_transporte = exports.ventas_retenciones = void 0;
const act_categoria_1 = require("./act_categoria");
Object.defineProperty(exports, "act_categoria", { enumerable: true, get: function () { return act_categoria_1.act_categoria; } });
const actividad_1 = require("./actividad");
Object.defineProperty(exports, "actividad", { enumerable: true, get: function () { return actividad_1.actividad; } });
const actividad_periodo_1 = require("./actividad_periodo");
Object.defineProperty(exports, "actividad_periodo", { enumerable: true, get: function () { return actividad_periodo_1.actividad_periodo; } });
const actividades_campo_1 = require("./actividades_campo");
Object.defineProperty(exports, "actividades_campo", { enumerable: true, get: function () { return actividades_campo_1.actividades_campo; } });
const actualizacion_1 = require("./actualizacion");
Object.defineProperty(exports, "actualizacion", { enumerable: true, get: function () { return actualizacion_1.actualizacion; } });
const actualizacion_dolar_1 = require("./actualizacion_dolar");
Object.defineProperty(exports, "actualizacion_dolar", { enumerable: true, get: function () { return actualizacion_dolar_1.actualizacion_dolar; } });
const actualizacion_utas_1 = require("./actualizacion_utas");
Object.defineProperty(exports, "actualizacion_utas", { enumerable: true, get: function () { return actualizacion_utas_1.actualizacion_utas; } });
const afip_comprobantes_1 = require("./afip_comprobantes");
Object.defineProperty(exports, "afip_comprobantes", { enumerable: true, get: function () { return afip_comprobantes_1.afip_comprobantes; } });
const afip_comprobantes_codigos_1 = require("./afip_comprobantes_codigos");
Object.defineProperty(exports, "afip_comprobantes_codigos", { enumerable: true, get: function () { return afip_comprobantes_codigos_1.afip_comprobantes_codigos; } });
const afip_conceptos_1 = require("./afip_conceptos");
Object.defineProperty(exports, "afip_conceptos", { enumerable: true, get: function () { return afip_conceptos_1.afip_conceptos; } });
const afip_cosechas_1 = require("./afip_cosechas");
Object.defineProperty(exports, "afip_cosechas", { enumerable: true, get: function () { return afip_cosechas_1.afip_cosechas; } });
const afip_cuitdest_1 = require("./afip_cuitdest");
Object.defineProperty(exports, "afip_cuitdest", { enumerable: true, get: function () { return afip_cuitdest_1.afip_cuitdest; } });
const afip_especies_1 = require("./afip_especies");
Object.defineProperty(exports, "afip_especies", { enumerable: true, get: function () { return afip_especies_1.afip_especies; } });
const afip_idiomas_1 = require("./afip_idiomas");
Object.defineProperty(exports, "afip_idiomas", { enumerable: true, get: function () { return afip_idiomas_1.afip_idiomas; } });
const afip_incoterms_1 = require("./afip_incoterms");
Object.defineProperty(exports, "afip_incoterms", { enumerable: true, get: function () { return afip_incoterms_1.afip_incoterms; } });
const afip_localidades_1 = require("./afip_localidades");
Object.defineProperty(exports, "afip_localidades", { enumerable: true, get: function () { return afip_localidades_1.afip_localidades; } });
const afip_monedas_1 = require("./afip_monedas");
Object.defineProperty(exports, "afip_monedas", { enumerable: true, get: function () { return afip_monedas_1.afip_monedas; } });
const afip_nomenclador_1 = require("./afip_nomenclador");
Object.defineProperty(exports, "afip_nomenclador", { enumerable: true, get: function () { return afip_nomenclador_1.afip_nomenclador; } });
const afip_paises_1 = require("./afip_paises");
Object.defineProperty(exports, "afip_paises", { enumerable: true, get: function () { return afip_paises_1.afip_paises; } });
const afip_provincias_1 = require("./afip_provincias");
Object.defineProperty(exports, "afip_provincias", { enumerable: true, get: function () { return afip_provincias_1.afip_provincias; } });
const afip_puntos_ventas_1 = require("./afip_puntos_ventas");
Object.defineProperty(exports, "afip_puntos_ventas", { enumerable: true, get: function () { return afip_puntos_ventas_1.afip_puntos_ventas; } });
const afip_texportacion_1 = require("./afip_texportacion");
Object.defineProperty(exports, "afip_texportacion", { enumerable: true, get: function () { return afip_texportacion_1.afip_texportacion; } });
const afip_tipos_datos_opcional_1 = require("./afip_tipos_datos_opcional");
Object.defineProperty(exports, "afip_tipos_datos_opcional", { enumerable: true, get: function () { return afip_tipos_datos_opcional_1.afip_tipos_datos_opcional; } });
const afip_tipos_documentos_1 = require("./afip_tipos_documentos");
Object.defineProperty(exports, "afip_tipos_documentos", { enumerable: true, get: function () { return afip_tipos_documentos_1.afip_tipos_documentos; } });
const afip_tipos_iva_1 = require("./afip_tipos_iva");
Object.defineProperty(exports, "afip_tipos_iva", { enumerable: true, get: function () { return afip_tipos_iva_1.afip_tipos_iva; } });
const afip_tipos_tributos_1 = require("./afip_tipos_tributos");
Object.defineProperty(exports, "afip_tipos_tributos", { enumerable: true, get: function () { return afip_tipos_tributos_1.afip_tipos_tributos; } });
const afip_unimed_1 = require("./afip_unimed");
Object.defineProperty(exports, "afip_unimed", { enumerable: true, get: function () { return afip_unimed_1.afip_unimed; } });
const ajustes_1 = require("./ajustes");
Object.defineProperty(exports, "ajustes", { enumerable: true, get: function () { return ajustes_1.ajustes; } });
const amortizaciones_1 = require("./amortizaciones");
Object.defineProperty(exports, "amortizaciones", { enumerable: true, get: function () { return amortizaciones_1.amortizaciones; } });
const animales_1 = require("./animales");
Object.defineProperty(exports, "animales", { enumerable: true, get: function () { return animales_1.animales; } });
const animales_estados_1 = require("./animales_estados");
Object.defineProperty(exports, "animales_estados", { enumerable: true, get: function () { return animales_estados_1.animales_estados; } });
const aplicaciones_1 = require("./aplicaciones");
Object.defineProperty(exports, "aplicaciones", { enumerable: true, get: function () { return aplicaciones_1.aplicaciones; } });
const arch_importados_1 = require("./arch_importados");
Object.defineProperty(exports, "arch_importados", { enumerable: true, get: function () { return arch_importados_1.arch_importados; } });
//import { archivo_arba } from "./archivo_arba";
//import type { archivo_arbaAttributes, archivo_arbaCreationAttributes } from "./archivo_arba";
const articulo_equiv_unidades_1 = require("./articulo_equiv_unidades");
Object.defineProperty(exports, "articulo_equiv_unidades", { enumerable: true, get: function () { return articulo_equiv_unidades_1.articulo_equiv_unidades; } });
const articulos_1 = require("./articulos");
Object.defineProperty(exports, "articulos", { enumerable: true, get: function () { return articulos_1.articulos; } });
const articulos_caracteristicas_1 = require("./articulos_caracteristicas");
Object.defineProperty(exports, "articulos_caracteristicas", { enumerable: true, get: function () { return articulos_caracteristicas_1.articulos_caracteristicas; } });
const articulos_caracteristicas_valores_1 = require("./articulos_caracteristicas_valores");
Object.defineProperty(exports, "articulos_caracteristicas_valores", { enumerable: true, get: function () { return articulos_caracteristicas_valores_1.articulos_caracteristicas_valores; } });
const articulos_serie_1 = require("./articulos_serie");
Object.defineProperty(exports, "articulos_serie", { enumerable: true, get: function () { return articulos_serie_1.articulos_serie; } });
const articulos_tags_1 = require("./articulos_tags");
Object.defineProperty(exports, "articulos_tags", { enumerable: true, get: function () { return articulos_tags_1.articulos_tags; } });
const articulos_transformacion_1 = require("./articulos_transformacion");
Object.defineProperty(exports, "articulos_transformacion", { enumerable: true, get: function () { return articulos_transformacion_1.articulos_transformacion; } });
const articulos_unidad_medida_1 = require("./articulos_unidad_medida");
Object.defineProperty(exports, "articulos_unidad_medida", { enumerable: true, get: function () { return articulos_unidad_medida_1.articulos_unidad_medida; } });
const asientos_1 = require("./asientos");
Object.defineProperty(exports, "asientos", { enumerable: true, get: function () { return asientos_1.asientos; } });
const asientos_items_1 = require("./asientos_items");
Object.defineProperty(exports, "asientos_items", { enumerable: true, get: function () { return asientos_items_1.asientos_items; } });
const asientos_iva_1 = require("./asientos_iva");
Object.defineProperty(exports, "asientos_iva", { enumerable: true, get: function () { return asientos_iva_1.asientos_iva; } });
const asignar_rubros_1 = require("./asignar_rubros");
Object.defineProperty(exports, "asignar_rubros", { enumerable: true, get: function () { return asignar_rubros_1.asignar_rubros; } });
//import { atributo } from "./atributo";
//import type { atributoAttributes, atributoCreationAttributes } from "./atributo";
const atributos_de_precios_1 = require("./atributos_de_precios");
Object.defineProperty(exports, "atributos_de_precios", { enumerable: true, get: function () { return atributos_de_precios_1.atributos_de_precios; } });
const bancos_1 = require("./bancos");
Object.defineProperty(exports, "bancos", { enumerable: true, get: function () { return bancos_1.bancos; } });
const bases_contables_1 = require("./bases_contables");
Object.defineProperty(exports, "bases_contables", { enumerable: true, get: function () { return bases_contables_1.bases_contables; } });
const basicos_1 = require("./basicos");
Object.defineProperty(exports, "basicos", { enumerable: true, get: function () { return basicos_1.basicos; } });
const borrados_1 = require("./borrados");
Object.defineProperty(exports, "borrados", { enumerable: true, get: function () { return borrados_1.borrados; } });
const cab_lista_precio_1 = require("./cab_lista_precio");
Object.defineProperty(exports, "cab_lista_precio", { enumerable: true, get: function () { return cab_lista_precio_1.cab_lista_precio; } });
const cajas_1 = require("./cajas");
Object.defineProperty(exports, "cajas", { enumerable: true, get: function () { return cajas_1.cajas; } });
const cania_peladores_1 = require("./cania_peladores");
Object.defineProperty(exports, "cania_peladores", { enumerable: true, get: function () { return cania_peladores_1.cania_peladores; } });
//import { carta_porte } from "./carta_porte";
//import type { carta_porteAttributes, carta_porteCreationAttributes } from "./carta_porte";
//import { carta_porte_det } from "./carta_porte_det";
//import type { carta_porte_detAttributes, carta_porte_detCreationAttributes } from "./carta_porte_det";
const categoria_1 = require("./categoria");
Object.defineProperty(exports, "categoria", { enumerable: true, get: function () { return categoria_1.categoria; } });
const categoria_aplicativos_1 = require("./categoria_aplicativos");
Object.defineProperty(exports, "categoria_aplicativos", { enumerable: true, get: function () { return categoria_aplicativos_1.categoria_aplicativos; } });
const categoria_iva_1 = require("./categoria_iva");
Object.defineProperty(exports, "categoria_iva", { enumerable: true, get: function () { return categoria_iva_1.categoria_iva; } });
const chequeras_1 = require("./chequeras");
Object.defineProperty(exports, "chequeras", { enumerable: true, get: function () { return chequeras_1.chequeras; } });
const cierres_fiscales_1 = require("./cierres_fiscales");
Object.defineProperty(exports, "cierres_fiscales", { enumerable: true, get: function () { return cierres_fiscales_1.cierres_fiscales; } });
const clientes_1 = require("./clientes");
Object.defineProperty(exports, "clientes", { enumerable: true, get: function () { return clientes_1.clientes; } });
const clientes2_1 = require("./clientes2");
Object.defineProperty(exports, "clientes2", { enumerable: true, get: function () { return clientes2_1.clientes2; } });
const clientes_acuerdos_1 = require("./clientes_acuerdos");
Object.defineProperty(exports, "clientes_acuerdos", { enumerable: true, get: function () { return clientes_acuerdos_1.clientes_acuerdos; } });
const clientes_destinos_1 = require("./clientes_destinos");
Object.defineProperty(exports, "clientes_destinos", { enumerable: true, get: function () { return clientes_destinos_1.clientes_destinos; } });
const clientes_domicilios_1 = require("./clientes_domicilios");
Object.defineProperty(exports, "clientes_domicilios", { enumerable: true, get: function () { return clientes_domicilios_1.clientes_domicilios; } });
const clientes_impuestos_1 = require("./clientes_impuestos");
Object.defineProperty(exports, "clientes_impuestos", { enumerable: true, get: function () { return clientes_impuestos_1.clientes_impuestos; } });
const clientes_pagos_1 = require("./clientes_pagos");
Object.defineProperty(exports, "clientes_pagos", { enumerable: true, get: function () { return clientes_pagos_1.clientes_pagos; } });
const clientes_seguimiento_1 = require("./clientes_seguimiento");
Object.defineProperty(exports, "clientes_seguimiento", { enumerable: true, get: function () { return clientes_seguimiento_1.clientes_seguimiento; } });
const colores_1 = require("./colores");
Object.defineProperty(exports, "colores", { enumerable: true, get: function () { return colores_1.colores; } });
const comision_x_vendedor_1 = require("./comision_x_vendedor");
Object.defineProperty(exports, "comision_x_vendedor", { enumerable: true, get: function () { return comision_x_vendedor_1.comision_x_vendedor; } });
const compras_1 = require("./compras");
Object.defineProperty(exports, "compras", { enumerable: true, get: function () { return compras_1.compras; } });
const compras_comprob_ingresos_bruto_1 = require("./compras_comprob_ingresos_bruto");
Object.defineProperty(exports, "compras_comprob_ingresos_bruto", { enumerable: true, get: function () { return compras_comprob_ingresos_bruto_1.compras_comprob_ingresos_bruto; } });
const compras_comprob_retencion_1 = require("./compras_comprob_retencion");
Object.defineProperty(exports, "compras_comprob_retencion", { enumerable: true, get: function () { return compras_comprob_retencion_1.compras_comprob_retencion; } });
const compras_facturas_1 = require("./compras_facturas");
Object.defineProperty(exports, "compras_facturas", { enumerable: true, get: function () { return compras_facturas_1.compras_facturas; } });
const compras_items_1 = require("./compras_items");
Object.defineProperty(exports, "compras_items", { enumerable: true, get: function () { return compras_items_1.compras_items; } });
//import { compras_items_remitos } from "./compras_items_remitos";
//import type { compras_items_remitosAttributes, compras_items_remitosCreationAttributes } from "./compras_items_remitos";
const compras_labores_1 = require("./compras_labores");
Object.defineProperty(exports, "compras_labores", { enumerable: true, get: function () { return compras_labores_1.compras_labores; } });
const compras_pagos_1 = require("./compras_pagos");
Object.defineProperty(exports, "compras_pagos", { enumerable: true, get: function () { return compras_pagos_1.compras_pagos; } });
const compras_produccion_1 = require("./compras_produccion");
Object.defineProperty(exports, "compras_produccion", { enumerable: true, get: function () { return compras_produccion_1.compras_produccion; } });
const compras_remitos_1 = require("./compras_remitos");
Object.defineProperty(exports, "compras_remitos", { enumerable: true, get: function () { return compras_remitos_1.compras_remitos; } });
const compras_retenciones_1 = require("./compras_retenciones");
Object.defineProperty(exports, "compras_retenciones", { enumerable: true, get: function () { return compras_retenciones_1.compras_retenciones; } });
const compras_retenciones_detalle_1 = require("./compras_retenciones_detalle");
Object.defineProperty(exports, "compras_retenciones_detalle", { enumerable: true, get: function () { return compras_retenciones_detalle_1.compras_retenciones_detalle; } });
const compras_stock_items_1 = require("./compras_stock_items");
Object.defineProperty(exports, "compras_stock_items", { enumerable: true, get: function () { return compras_stock_items_1.compras_stock_items; } });
const compras_vencimientos_1 = require("./compras_vencimientos");
Object.defineProperty(exports, "compras_vencimientos", { enumerable: true, get: function () { return compras_vencimientos_1.compras_vencimientos; } });
const comprobantes_destino_1 = require("./comprobantes_destino");
Object.defineProperty(exports, "comprobantes_destino", { enumerable: true, get: function () { return comprobantes_destino_1.comprobantes_destino; } });
const comprobantes_formatos_1 = require("./comprobantes_formatos");
Object.defineProperty(exports, "comprobantes_formatos", { enumerable: true, get: function () { return comprobantes_formatos_1.comprobantes_formatos; } });
const comprobantes_formatos_default_1 = require("./comprobantes_formatos_default");
Object.defineProperty(exports, "comprobantes_formatos_default", { enumerable: true, get: function () { return comprobantes_formatos_default_1.comprobantes_formatos_default; } });
const comprobantes_relacion_1 = require("./comprobantes_relacion");
Object.defineProperty(exports, "comprobantes_relacion", { enumerable: true, get: function () { return comprobantes_relacion_1.comprobantes_relacion; } });
//import { conceptos } from "./conceptos";
//import type { conceptosAttributes, conceptosCreationAttributes } from "./conceptos";
const condicion_venta_tipo_1 = require("./condicion_venta_tipo");
Object.defineProperty(exports, "condicion_venta_tipo", { enumerable: true, get: function () { return condicion_venta_tipo_1.condicion_venta_tipo; } });
const conf_colores_deudas_1 = require("./conf_colores_deudas");
Object.defineProperty(exports, "conf_colores_deudas", { enumerable: true, get: function () { return conf_colores_deudas_1.conf_colores_deudas; } });
const conf_ejercicio_economico_1 = require("./conf_ejercicio_economico");
Object.defineProperty(exports, "conf_ejercicio_economico", { enumerable: true, get: function () { return conf_ejercicio_economico_1.conf_ejercicio_economico; } });
const config_1 = require("./config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return config_1.config; } });
const config_app_1 = require("./config_app");
Object.defineProperty(exports, "config_app", { enumerable: true, get: function () { return config_app_1.config_app; } });
const config_campo_1 = require("./config_campo");
Object.defineProperty(exports, "config_campo", { enumerable: true, get: function () { return config_campo_1.config_campo; } });
const config_circuitos_1 = require("./config_circuitos");
Object.defineProperty(exports, "config_circuitos", { enumerable: true, get: function () { return config_circuitos_1.config_circuitos; } });
const config_importacion_1 = require("./config_importacion");
Object.defineProperty(exports, "config_importacion", { enumerable: true, get: function () { return config_importacion_1.config_importacion; } });
const config_iva_1 = require("./config_iva");
Object.defineProperty(exports, "config_iva", { enumerable: true, get: function () { return config_iva_1.config_iva; } });
const config_parametros_1 = require("./config_parametros");
Object.defineProperty(exports, "config_parametros", { enumerable: true, get: function () { return config_parametros_1.config_parametros; } });
const config_redondeos_1 = require("./config_redondeos");
Object.defineProperty(exports, "config_redondeos", { enumerable: true, get: function () { return config_redondeos_1.config_redondeos; } });
const config_volcado_impuestos_1 = require("./config_volcado_impuestos");
Object.defineProperty(exports, "config_volcado_impuestos", { enumerable: true, get: function () { return config_volcado_impuestos_1.config_volcado_impuestos; } });
const configuracion_libro_iva_1 = require("./configuracion_libro_iva");
Object.defineProperty(exports, "configuracion_libro_iva", { enumerable: true, get: function () { return configuracion_libro_iva_1.configuracion_libro_iva; } });
//import { contratos } from "./contratos";
//import type { contratosAttributes, contratosCreationAttributes } from "./contratos";
const coordenadas_1 = require("./coordenadas");
Object.defineProperty(exports, "coordenadas", { enumerable: true, get: function () { return coordenadas_1.coordenadas; } });
const cotizacion_1 = require("./cotizacion");
Object.defineProperty(exports, "cotizacion", { enumerable: true, get: function () { return cotizacion_1.cotizacion; } });
const cta_cble_grupo_1 = require("./cta_cble_grupo");
Object.defineProperty(exports, "cta_cble_grupo", { enumerable: true, get: function () { return cta_cble_grupo_1.cta_cble_grupo; } });
const cta_cble_grupo_item_1 = require("./cta_cble_grupo_item");
Object.defineProperty(exports, "cta_cble_grupo_item", { enumerable: true, get: function () { return cta_cble_grupo_item_1.cta_cble_grupo_item; } });
const cuadrillas_1 = require("./cuadrillas");
Object.defineProperty(exports, "cuadrillas", { enumerable: true, get: function () { return cuadrillas_1.cuadrillas; } });
const cuentas_1 = require("./cuentas");
Object.defineProperty(exports, "cuentas", { enumerable: true, get: function () { return cuentas_1.cuentas; } });
const cuentas_cash_flow_1 = require("./cuentas_cash_flow");
Object.defineProperty(exports, "cuentas_cash_flow", { enumerable: true, get: function () { return cuentas_cash_flow_1.cuentas_cash_flow; } });
const cuentas_cruce_1 = require("./cuentas_cruce");
Object.defineProperty(exports, "cuentas_cruce", { enumerable: true, get: function () { return cuentas_cruce_1.cuentas_cruce; } });
const cuentas_disponibilidades_1 = require("./cuentas_disponibilidades");
Object.defineProperty(exports, "cuentas_disponibilidades", { enumerable: true, get: function () { return cuentas_disponibilidades_1.cuentas_disponibilidades; } });
const cuentas_frecuentes_1 = require("./cuentas_frecuentes");
Object.defineProperty(exports, "cuentas_frecuentes", { enumerable: true, get: function () { return cuentas_frecuentes_1.cuentas_frecuentes; } });
const cuentas_ingenio_1 = require("./cuentas_ingenio");
Object.defineProperty(exports, "cuentas_ingenio", { enumerable: true, get: function () { return cuentas_ingenio_1.cuentas_ingenio; } });
const cuentas_lotes_1 = require("./cuentas_lotes");
Object.defineProperty(exports, "cuentas_lotes", { enumerable: true, get: function () { return cuentas_lotes_1.cuentas_lotes; } });
const cuentas_predef_ganaderia_1 = require("./cuentas_predef_ganaderia");
Object.defineProperty(exports, "cuentas_predef_ganaderia", { enumerable: true, get: function () { return cuentas_predef_ganaderia_1.cuentas_predef_ganaderia; } });
const cuentas_predefinidas_1 = require("./cuentas_predefinidas");
Object.defineProperty(exports, "cuentas_predefinidas", { enumerable: true, get: function () { return cuentas_predefinidas_1.cuentas_predefinidas; } });
const datawindows_1 = require("./datawindows");
Object.defineProperty(exports, "datawindows", { enumerable: true, get: function () { return datawindows_1.datawindows; } });
const datos_basicos1_1 = require("./datos_basicos1");
Object.defineProperty(exports, "datos_basicos1", { enumerable: true, get: function () { return datos_basicos1_1.datos_basicos1; } });
const datos_basicos2_1 = require("./datos_basicos2");
Object.defineProperty(exports, "datos_basicos2", { enumerable: true, get: function () { return datos_basicos2_1.datos_basicos2; } });
const datos_basicos3_1 = require("./datos_basicos3");
Object.defineProperty(exports, "datos_basicos3", { enumerable: true, get: function () { return datos_basicos3_1.datos_basicos3; } });
const datos_basicos4_1 = require("./datos_basicos4");
Object.defineProperty(exports, "datos_basicos4", { enumerable: true, get: function () { return datos_basicos4_1.datos_basicos4; } });
const datos_climaticos_1 = require("./datos_climaticos");
Object.defineProperty(exports, "datos_climaticos", { enumerable: true, get: function () { return datos_climaticos_1.datos_climaticos; } });
const datos_climaticos_items_1 = require("./datos_climaticos_items");
Object.defineProperty(exports, "datos_climaticos_items", { enumerable: true, get: function () { return datos_climaticos_items_1.datos_climaticos_items; } });
const depositos_1 = require("./depositos");
Object.defineProperty(exports, "depositos", { enumerable: true, get: function () { return depositos_1.depositos; } });
const destino_precios_1 = require("./destino_precios");
Object.defineProperty(exports, "destino_precios", { enumerable: true, get: function () { return destino_precios_1.destino_precios; } });
//import { destinos } from "./destinos";
//import type { destinosAttributes, destinosCreationAttributes } from "./destinos";
const destinos_campo_1 = require("./destinos_campo");
Object.defineProperty(exports, "destinos_campo", { enumerable: true, get: function () { return destinos_campo_1.destinos_campo; } });
const destinos_direcciones_1 = require("./destinos_direcciones");
Object.defineProperty(exports, "destinos_direcciones", { enumerable: true, get: function () { return destinos_direcciones_1.destinos_direcciones; } });
//import { destinos_formulas } from "./destinos_formulas";
//import type { destinos_formulasAttributes, destinos_formulasCreationAttributes } from "./destinos_formulas";
const destinos_stock_1 = require("./destinos_stock");
Object.defineProperty(exports, "destinos_stock", { enumerable: true, get: function () { return destinos_stock_1.destinos_stock; } });
const distanci_1 = require("./distanci");
Object.defineProperty(exports, "distanci", { enumerable: true, get: function () { return distanci_1.distanci; } });
const ec_articulos_1 = require("./ec_articulos");
Object.defineProperty(exports, "ec_articulos", { enumerable: true, get: function () { return ec_articulos_1.ec_articulos; } });
const ec_articulos_imagenes_1 = require("./ec_articulos_imagenes");
Object.defineProperty(exports, "ec_articulos_imagenes", { enumerable: true, get: function () { return ec_articulos_imagenes_1.ec_articulos_imagenes; } });
const ec_carrito_1 = require("./ec_carrito");
Object.defineProperty(exports, "ec_carrito", { enumerable: true, get: function () { return ec_carrito_1.ec_carrito; } });
const ec_categorias_ml_1 = require("./ec_categorias_ml");
Object.defineProperty(exports, "ec_categorias_ml", { enumerable: true, get: function () { return ec_categorias_ml_1.ec_categorias_ml; } });
const ec_clientes_1 = require("./ec_clientes");
Object.defineProperty(exports, "ec_clientes", { enumerable: true, get: function () { return ec_clientes_1.ec_clientes; } });
const ec_config_1 = require("./ec_config");
Object.defineProperty(exports, "ec_config", { enumerable: true, get: function () { return ec_config_1.ec_config; } });
const ec_config_circuitos_1 = require("./ec_config_circuitos");
Object.defineProperty(exports, "ec_config_circuitos", { enumerable: true, get: function () { return ec_config_circuitos_1.ec_config_circuitos; } });
const ec_config_parametros_1 = require("./ec_config_parametros");
Object.defineProperty(exports, "ec_config_parametros", { enumerable: true, get: function () { return ec_config_parametros_1.ec_config_parametros; } });
const ec_rubros_1 = require("./ec_rubros");
Object.defineProperty(exports, "ec_rubros", { enumerable: true, get: function () { return ec_rubros_1.ec_rubros; } });
const ec_subrubros_1 = require("./ec_subrubros");
Object.defineProperty(exports, "ec_subrubros", { enumerable: true, get: function () { return ec_subrubros_1.ec_subrubros; } });
const ec_tipos_envios_1 = require("./ec_tipos_envios");
Object.defineProperty(exports, "ec_tipos_envios", { enumerable: true, get: function () { return ec_tipos_envios_1.ec_tipos_envios; } });
const ec_ventas_1 = require("./ec_ventas");
Object.defineProperty(exports, "ec_ventas", { enumerable: true, get: function () { return ec_ventas_1.ec_ventas; } });
const ec_ventas_items_1 = require("./ec_ventas_items");
Object.defineProperty(exports, "ec_ventas_items", { enumerable: true, get: function () { return ec_ventas_items_1.ec_ventas_items; } });
const empresa_choferes_1 = require("./empresa_choferes");
Object.defineProperty(exports, "empresa_choferes", { enumerable: true, get: function () { return empresa_choferes_1.empresa_choferes; } });
const empresas_1 = require("./empresas");
Object.defineProperty(exports, "empresas", { enumerable: true, get: function () { return empresas_1.empresas; } });
const entidades_1 = require("./entidades");
Object.defineProperty(exports, "entidades", { enumerable: true, get: function () { return entidades_1.entidades; } });
const equivalencias_packing_1 = require("./equivalencias_packing");
Object.defineProperty(exports, "equivalencias_packing", { enumerable: true, get: function () { return equivalencias_packing_1.equivalencias_packing; } });
const estab_actividad_1 = require("./estab_actividad");
Object.defineProperty(exports, "estab_actividad", { enumerable: true, get: function () { return estab_actividad_1.estab_actividad; } });
const estab_categoria_1 = require("./estab_categoria");
Object.defineProperty(exports, "estab_categoria", { enumerable: true, get: function () { return estab_categoria_1.estab_categoria; } });
const establecimiento_1 = require("./establecimiento");
Object.defineProperty(exports, "establecimiento", { enumerable: true, get: function () { return establecimiento_1.establecimiento; } });
const establecimientos_depositos_1 = require("./establecimientos_depositos");
Object.defineProperty(exports, "establecimientos_depositos", { enumerable: true, get: function () { return establecimientos_depositos_1.establecimientos_depositos; } });
const fac_elect_xempresa_1 = require("./fac_elect_xempresa");
Object.defineProperty(exports, "fac_elect_xempresa", { enumerable: true, get: function () { return fac_elect_xempresa_1.fac_elect_xempresa; } });
const figuras_1 = require("./figuras");
Object.defineProperty(exports, "figuras", { enumerable: true, get: function () { return figuras_1.figuras; } });
const figuras_items_1 = require("./figuras_items");
Object.defineProperty(exports, "figuras_items", { enumerable: true, get: function () { return figuras_items_1.figuras_items; } });
const filtro_animales_1 = require("./filtro_animales");
Object.defineProperty(exports, "filtro_animales", { enumerable: true, get: function () { return filtro_animales_1.filtro_animales; } });
const filtro_cania_1 = require("./filtro_cania");
Object.defineProperty(exports, "filtro_cania", { enumerable: true, get: function () { return filtro_cania_1.filtro_cania; } });
const filtro_citrus_1 = require("./filtro_citrus");
Object.defineProperty(exports, "filtro_citrus", { enumerable: true, get: function () { return filtro_citrus_1.filtro_citrus; } });
const filtro_granos_1 = require("./filtro_granos");
Object.defineProperty(exports, "filtro_granos", { enumerable: true, get: function () { return filtro_granos_1.filtro_granos; } });
const filtro_labores_1 = require("./filtro_labores");
Object.defineProperty(exports, "filtro_labores", { enumerable: true, get: function () { return filtro_labores_1.filtro_labores; } });
const filtro_mov_per_1 = require("./filtro_mov_per");
Object.defineProperty(exports, "filtro_mov_per", { enumerable: true, get: function () { return filtro_mov_per_1.filtro_mov_per; } });
const filtro_orden_trabajo_1 = require("./filtro_orden_trabajo");
Object.defineProperty(exports, "filtro_orden_trabajo", { enumerable: true, get: function () { return filtro_orden_trabajo_1.filtro_orden_trabajo; } });
const filtro_plantacion_1 = require("./filtro_plantacion");
Object.defineProperty(exports, "filtro_plantacion", { enumerable: true, get: function () { return filtro_plantacion_1.filtro_plantacion; } });
const filtro_stock_1 = require("./filtro_stock");
Object.defineProperty(exports, "filtro_stock", { enumerable: true, get: function () { return filtro_stock_1.filtro_stock; } });
const filtro_vales_1 = require("./filtro_vales");
Object.defineProperty(exports, "filtro_vales", { enumerable: true, get: function () { return filtro_vales_1.filtro_vales; } });
const finan_contratistas_1 = require("./finan_contratistas");
Object.defineProperty(exports, "finan_contratistas", { enumerable: true, get: function () { return finan_contratistas_1.finan_contratistas; } });
const fmt_carta_porte_1 = require("./fmt_carta_porte");
Object.defineProperty(exports, "fmt_carta_porte", { enumerable: true, get: function () { return fmt_carta_porte_1.fmt_carta_porte; } });
//import { fmt_carta_porte_det } from "./fmt_carta_porte_det";
//import type { fmt_carta_porte_detAttributes, fmt_carta_porte_detCreationAttributes } from "./fmt_carta_porte_det";
const formato_aplicativo_1 = require("./formato_aplicativo");
Object.defineProperty(exports, "formato_aplicativo", { enumerable: true, get: function () { return formato_aplicativo_1.formato_aplicativo; } });
const formulas_variables_1 = require("./formulas_variables");
Object.defineProperty(exports, "formulas_variables", { enumerable: true, get: function () { return formulas_variables_1.formulas_variables; } });
const generador_formula_1 = require("./generador_formula");
Object.defineProperty(exports, "generador_formula", { enumerable: true, get: function () { return generador_formula_1.generador_formula; } });
const gest_identificador_1 = require("./gest_identificador");
Object.defineProperty(exports, "gest_identificador", { enumerable: true, get: function () { return gest_identificador_1.gest_identificador; } });
const gest_identificador_movimientos_1 = require("./gest_identificador_movimientos");
Object.defineProperty(exports, "gest_identificador_movimientos", { enumerable: true, get: function () { return gest_identificador_movimientos_1.gest_identificador_movimientos; } });
const grafico_1 = require("./grafico");
Object.defineProperty(exports, "grafico", { enumerable: true, get: function () { return grafico_1.grafico; } });
const grupo_animales_1 = require("./grupo_animales");
Object.defineProperty(exports, "grupo_animales", { enumerable: true, get: function () { return grupo_animales_1.grupo_animales; } });
const grupo_caracteristicas_1 = require("./grupo_caracteristicas");
Object.defineProperty(exports, "grupo_caracteristicas", { enumerable: true, get: function () { return grupo_caracteristicas_1.grupo_caracteristicas; } });
//import { grupo_destino } from "./grupo_destino";
//import type { grupo_destinoAttributes, grupo_destinoCreationAttributes } from "./grupo_destino";
const harroz_1 = require("./harroz");
Object.defineProperty(exports, "harroz", { enumerable: true, get: function () { return harroz_1.harroz; } });
const havena_1 = require("./havena");
Object.defineProperty(exports, "havena", { enumerable: true, get: function () { return havena_1.havena; } });
const hcebada_1 = require("./hcebada");
Object.defineProperty(exports, "hcebada", { enumerable: true, get: function () { return hcebada_1.hcebada; } });
const hcenteno_1 = require("./hcenteno");
Object.defineProperty(exports, "hcenteno", { enumerable: true, get: function () { return hcenteno_1.hcenteno; } });
const hchia_1 = require("./hchia");
Object.defineProperty(exports, "hchia", { enumerable: true, get: function () { return hchia_1.hchia; } });
const hcolza_1 = require("./hcolza");
Object.defineProperty(exports, "hcolza", { enumerable: true, get: function () { return hcolza_1.hcolza; } });
const hgarbanzo_1 = require("./hgarbanzo");
Object.defineProperty(exports, "hgarbanzo", { enumerable: true, get: function () { return hgarbanzo_1.hgarbanzo; } });
const hgirasol_1 = require("./hgirasol");
Object.defineProperty(exports, "hgirasol", { enumerable: true, get: function () { return hgirasol_1.hgirasol; } });
const hist_peso_categoria_1 = require("./hist_peso_categoria");
Object.defineProperty(exports, "hist_peso_categoria", { enumerable: true, get: function () { return hist_peso_categoria_1.hist_peso_categoria; } });
const hist_precio_categoria_1 = require("./hist_precio_categoria");
Object.defineProperty(exports, "hist_precio_categoria", { enumerable: true, get: function () { return hist_precio_categoria_1.hist_precio_categoria; } });
const hlino_1 = require("./hlino");
Object.defineProperty(exports, "hlino", { enumerable: true, get: function () { return hlino_1.hlino; } });
const hlupino_1 = require("./hlupino");
Object.defineProperty(exports, "hlupino", { enumerable: true, get: function () { return hlupino_1.hlupino; } });
const hmaiz_1 = require("./hmaiz");
Object.defineProperty(exports, "hmaiz", { enumerable: true, get: function () { return hmaiz_1.hmaiz; } });
const hmani_1 = require("./hmani");
Object.defineProperty(exports, "hmani", { enumerable: true, get: function () { return hmani_1.hmani; } });
const hmijo_1 = require("./hmijo");
Object.defineProperty(exports, "hmijo", { enumerable: true, get: function () { return hmijo_1.hmijo; } });
const hmoha_1 = require("./hmoha");
Object.defineProperty(exports, "hmoha", { enumerable: true, get: function () { return hmoha_1.hmoha; } });
const hoja_de_ruta_1 = require("./hoja_de_ruta");
Object.defineProperty(exports, "hoja_de_ruta", { enumerable: true, get: function () { return hoja_de_ruta_1.hoja_de_ruta; } });
const hoja_de_ruta_items_1 = require("./hoja_de_ruta_items");
Object.defineProperty(exports, "hoja_de_ruta_items", { enumerable: true, get: function () { return hoja_de_ruta_items_1.hoja_de_ruta_items; } });
const hoja_ruta_estado_1 = require("./hoja_ruta_estado");
Object.defineProperty(exports, "hoja_ruta_estado", { enumerable: true, get: function () { return hoja_ruta_estado_1.hoja_ruta_estado; } });
const hquinoa_1 = require("./hquinoa");
Object.defineProperty(exports, "hquinoa", { enumerable: true, get: function () { return hquinoa_1.hquinoa; } });
const hsoja_1 = require("./hsoja");
Object.defineProperty(exports, "hsoja", { enumerable: true, get: function () { return hsoja_1.hsoja; } });
const hsorgo_1 = require("./hsorgo");
Object.defineProperty(exports, "hsorgo", { enumerable: true, get: function () { return hsorgo_1.hsorgo; } });
const htrigo_1 = require("./htrigo");
Object.defineProperty(exports, "htrigo", { enumerable: true, get: function () { return htrigo_1.htrigo; } });
const htriticale_1 = require("./htriticale");
Object.defineProperty(exports, "htriticale", { enumerable: true, get: function () { return htriticale_1.htriticale; } });
const hviciavillosa_1 = require("./hviciavillosa");
Object.defineProperty(exports, "hviciavillosa", { enumerable: true, get: function () { return hviciavillosa_1.hviciavillosa; } });
const identificador_1 = require("./identificador");
Object.defineProperty(exports, "identificador", { enumerable: true, get: function () { return identificador_1.identificador; } });
const identificador_campo_1 = require("./identificador_campo");
Object.defineProperty(exports, "identificador_campo", { enumerable: true, get: function () { return identificador_campo_1.identificador_campo; } });
const im_usuarios_1 = require("./im_usuarios");
Object.defineProperty(exports, "im_usuarios", { enumerable: true, get: function () { return im_usuarios_1.im_usuarios; } });
const importacion_declaracion_1 = require("./importacion_declaracion");
Object.defineProperty(exports, "importacion_declaracion", { enumerable: true, get: function () { return importacion_declaracion_1.importacion_declaracion; } });
const importacion_items_1 = require("./importacion_items");
Object.defineProperty(exports, "importacion_items", { enumerable: true, get: function () { return importacion_items_1.importacion_items; } });
const impresoras_1 = require("./impresoras");
Object.defineProperty(exports, "impresoras", { enumerable: true, get: function () { return impresoras_1.impresoras; } });
const impresoras_fiscales_1 = require("./impresoras_fiscales");
Object.defineProperty(exports, "impresoras_fiscales", { enumerable: true, get: function () { return impresoras_fiscales_1.impresoras_fiscales; } });
const impuestos_1 = require("./impuestos");
Object.defineProperty(exports, "impuestos", { enumerable: true, get: function () { return impuestos_1.impuestos; } });
const impuestos_cabecera_1 = require("./impuestos_cabecera");
Object.defineProperty(exports, "impuestos_cabecera", { enumerable: true, get: function () { return impuestos_cabecera_1.impuestos_cabecera; } });
const impuestotercero_1 = require("./impuestotercero");
Object.defineProperty(exports, "impuestotercero", { enumerable: true, get: function () { return impuestotercero_1.impuestotercero; } });
const impuestotercero_items_1 = require("./impuestotercero_items");
Object.defineProperty(exports, "impuestotercero_items", { enumerable: true, get: function () { return impuestotercero_items_1.impuestotercero_items; } });
const indice_de_precios_1 = require("./indice_de_precios");
Object.defineProperty(exports, "indice_de_precios", { enumerable: true, get: function () { return indice_de_precios_1.indice_de_precios; } });
const inseminacion_1 = require("./inseminacion");
Object.defineProperty(exports, "inseminacion", { enumerable: true, get: function () { return inseminacion_1.inseminacion; } });
const insumos_ordenes_trabajo_1 = require("./insumos_ordenes_trabajo");
Object.defineProperty(exports, "insumos_ordenes_trabajo", { enumerable: true, get: function () { return insumos_ordenes_trabajo_1.insumos_ordenes_trabajo; } });
const items_cruces_1 = require("./items_cruces");
Object.defineProperty(exports, "items_cruces", { enumerable: true, get: function () { return items_cruces_1.items_cruces; } });
const items_facturas_cpos_1 = require("./items_facturas_cpos");
Object.defineProperty(exports, "items_facturas_cpos", { enumerable: true, get: function () { return items_facturas_cpos_1.items_facturas_cpos; } });
const l_margen_bruto_1 = require("./l_margen_bruto");
Object.defineProperty(exports, "l_margen_bruto", { enumerable: true, get: function () { return l_margen_bruto_1.l_margen_bruto; } });
const labores_1 = require("./labores");
Object.defineProperty(exports, "labores", { enumerable: true, get: function () { return labores_1.labores; } });
const labores_insumos_1 = require("./labores_insumos");
Object.defineProperty(exports, "labores_insumos", { enumerable: true, get: function () { return labores_insumos_1.labores_insumos; } });
const labores_log_externo_1 = require("./labores_log_externo");
Object.defineProperty(exports, "labores_log_externo", { enumerable: true, get: function () { return labores_log_externo_1.labores_log_externo; } });
const labores_mant_tareas_1 = require("./labores_mant_tareas");
Object.defineProperty(exports, "labores_mant_tareas", { enumerable: true, get: function () { return labores_mant_tareas_1.labores_mant_tareas; } });
const labores_maquinarias_1 = require("./labores_maquinarias");
Object.defineProperty(exports, "labores_maquinarias", { enumerable: true, get: function () { return labores_maquinarias_1.labores_maquinarias; } });
const labores_personal_1 = require("./labores_personal");
Object.defineProperty(exports, "labores_personal", { enumerable: true, get: function () { return labores_personal_1.labores_personal; } });
const lista_precios_1 = require("./lista_precios");
Object.defineProperty(exports, "lista_precios", { enumerable: true, get: function () { return lista_precios_1.lista_precios; } });
const lluvias_1 = require("./lluvias");
Object.defineProperty(exports, "lluvias", { enumerable: true, get: function () { return lluvias_1.lluvias; } });
const localidad_1 = require("./localidad");
Object.defineProperty(exports, "localidad", { enumerable: true, get: function () { return localidad_1.localidad; } });
const lote_actividad_1 = require("./lote_actividad");
Object.defineProperty(exports, "lote_actividad", { enumerable: true, get: function () { return lote_actividad_1.lote_actividad; } });
const lote_actividad_up_1 = require("./lote_actividad_up");
Object.defineProperty(exports, "lote_actividad_up", { enumerable: true, get: function () { return lote_actividad_up_1.lote_actividad_up; } });
const lotes_1 = require("./lotes");
Object.defineProperty(exports, "lotes", { enumerable: true, get: function () { return lotes_1.lotes; } });
const lotes_coordenadas_1 = require("./lotes_coordenadas");
Object.defineProperty(exports, "lotes_coordenadas", { enumerable: true, get: function () { return lotes_coordenadas_1.lotes_coordenadas; } });
const lotes_unidad_productiva_1 = require("./lotes_unidad_productiva");
Object.defineProperty(exports, "lotes_unidad_productiva", { enumerable: true, get: function () { return lotes_unidad_productiva_1.lotes_unidad_productiva; } });
const maquinar_1 = require("./maquinar");
Object.defineProperty(exports, "maquinar", { enumerable: true, get: function () { return maquinar_1.maquinar; } });
const maquinas_mant_1 = require("./maquinas_mant");
Object.defineProperty(exports, "maquinas_mant", { enumerable: true, get: function () { return maquinas_mant_1.maquinas_mant; } });
const maquinas_mant_insumos_1 = require("./maquinas_mant_insumos");
Object.defineProperty(exports, "maquinas_mant_insumos", { enumerable: true, get: function () { return maquinas_mant_insumos_1.maquinas_mant_insumos; } });
const maquinas_mant_tareas_1 = require("./maquinas_mant_tareas");
Object.defineProperty(exports, "maquinas_mant_tareas", { enumerable: true, get: function () { return maquinas_mant_tareas_1.maquinas_mant_tareas; } });
const mod_insu_1 = require("./mod_insu");
Object.defineProperty(exports, "mod_insu", { enumerable: true, get: function () { return mod_insu_1.mod_insu; } });
const mod_tare_1 = require("./mod_tare");
Object.defineProperty(exports, "mod_tare", { enumerable: true, get: function () { return mod_tare_1.mod_tare; } });
const mod_tareas_personal_1 = require("./mod_tareas_personal");
Object.defineProperty(exports, "mod_tareas_personal", { enumerable: true, get: function () { return mod_tareas_personal_1.mod_tareas_personal; } });
const mod_tareas_riego_1 = require("./mod_tareas_riego");
Object.defineProperty(exports, "mod_tareas_riego", { enumerable: true, get: function () { return mod_tareas_riego_1.mod_tareas_riego; } });
const modelos_1 = require("./modelos");
Object.defineProperty(exports, "modelos", { enumerable: true, get: function () { return modelos_1.modelos; } });
const moneda_1 = require("./moneda");
Object.defineProperty(exports, "moneda", { enumerable: true, get: function () { return moneda_1.moneda; } });
const movimientos_1 = require("./movimientos");
Object.defineProperty(exports, "movimientos", { enumerable: true, get: function () { return movimientos_1.movimientos; } });
const movimientos_maquinaria_1 = require("./movimientos_maquinaria");
Object.defineProperty(exports, "movimientos_maquinaria", { enumerable: true, get: function () { return movimientos_maquinaria_1.movimientos_maquinaria; } });
const nota_pedido_1 = require("./nota_pedido");
Object.defineProperty(exports, "nota_pedido", { enumerable: true, get: function () { return nota_pedido_1.nota_pedido; } });
const nota_pedido_insumos_1 = require("./nota_pedido_insumos");
Object.defineProperty(exports, "nota_pedido_insumos", { enumerable: true, get: function () { return nota_pedido_insumos_1.nota_pedido_insumos; } });
const nov_animales_1 = require("./nov_animales");
Object.defineProperty(exports, "nov_animales", { enumerable: true, get: function () { return nov_animales_1.nov_animales; } });
const novedades_1 = require("./novedades");
Object.defineProperty(exports, "novedades", { enumerable: true, get: function () { return novedades_1.novedades; } });
const orden_compra_1 = require("./orden_compra");
Object.defineProperty(exports, "orden_compra", { enumerable: true, get: function () { return orden_compra_1.orden_compra; } });
const orden_compra_centros_costo_1 = require("./orden_compra_centros_costo");
Object.defineProperty(exports, "orden_compra_centros_costo", { enumerable: true, get: function () { return orden_compra_centros_costo_1.orden_compra_centros_costo; } });
const orden_compra_insumos_1 = require("./orden_compra_insumos");
Object.defineProperty(exports, "orden_compra_insumos", { enumerable: true, get: function () { return orden_compra_insumos_1.orden_compra_insumos; } });
const orden_de_compra_1 = require("./orden_de_compra");
Object.defineProperty(exports, "orden_de_compra", { enumerable: true, get: function () { return orden_de_compra_1.orden_de_compra; } });
const orden_de_compra_items_1 = require("./orden_de_compra_items");
Object.defineProperty(exports, "orden_de_compra_items", { enumerable: true, get: function () { return orden_de_compra_items_1.orden_de_compra_items; } });
const ordenes_sql_1 = require("./ordenes_sql");
Object.defineProperty(exports, "ordenes_sql", { enumerable: true, get: function () { return ordenes_sql_1.ordenes_sql; } });
const ordentrabajo_1 = require("./ordentrabajo");
Object.defineProperty(exports, "ordentrabajo", { enumerable: true, get: function () { return ordentrabajo_1.ordentrabajo; } });
const ordentrabajo_insumos_1 = require("./ordentrabajo_insumos");
Object.defineProperty(exports, "ordentrabajo_insumos", { enumerable: true, get: function () { return ordentrabajo_insumos_1.ordentrabajo_insumos; } });
const ordentrabajo_maquinarias_1 = require("./ordentrabajo_maquinarias");
Object.defineProperty(exports, "ordentrabajo_maquinarias", { enumerable: true, get: function () { return ordentrabajo_maquinarias_1.ordentrabajo_maquinarias; } });
const ordentrabajo_personal_1 = require("./ordentrabajo_personal");
Object.defineProperty(exports, "ordentrabajo_personal", { enumerable: true, get: function () { return ordentrabajo_personal_1.ordentrabajo_personal; } });
const origen_1 = require("./origen");
Object.defineProperty(exports, "origen", { enumerable: true, get: function () { return origen_1.origen; } });
const pais_1 = require("./pais");
Object.defineProperty(exports, "pais", { enumerable: true, get: function () { return pais_1.pais; } });
//import { pbcatcol } from "./pbcatcol";
//import type { pbcatcolAttributes, pbcatcolCreationAttributes } from "./pbcatcol";
//import { pbcatedt } from "./pbcatedt";
//import type { pbcatedtAttributes, pbcatedtCreationAttributes } from "./pbcatedt";
//import { pbcatfmt } from "./pbcatfmt";
//import type { pbcatfmtAttributes, pbcatfmtCreationAttributes } from "./pbcatfmt";
//import { pbcattbl } from "./pbcattbl";
//import type { pbcattblAttributes, pbcattblCreationAttributes } from "./pbcattbl";
//import { pbcatvld } from "./pbcatvld";
//import type { pbcatvldAttributes, pbcatvldCreationAttributes } from "./pbcatvld";
const pcuentas_1 = require("./pcuentas");
Object.defineProperty(exports, "pcuentas", { enumerable: true, get: function () { return pcuentas_1.pcuentas; } });
const pcuentas_modelo_1 = require("./pcuentas_modelo");
Object.defineProperty(exports, "pcuentas_modelo", { enumerable: true, get: function () { return pcuentas_modelo_1.pcuentas_modelo; } });
const periodos_1 = require("./periodos");
Object.defineProperty(exports, "periodos", { enumerable: true, get: function () { return periodos_1.periodos; } });
const permisos_1 = require("./permisos");
Object.defineProperty(exports, "permisos", { enumerable: true, get: function () { return permisos_1.permisos; } });
const personal_1 = require("./personal");
Object.defineProperty(exports, "personal", { enumerable: true, get: function () { return personal_1.personal; } });
const personal_tareas_1 = require("./personal_tareas");
Object.defineProperty(exports, "personal_tareas", { enumerable: true, get: function () { return personal_tareas_1.personal_tareas; } });
const pid_cruce_factura_remito_1 = require("./pid_cruce_factura_remito");
Object.defineProperty(exports, "pid_cruce_factura_remito", { enumerable: true, get: function () { return pid_cruce_factura_remito_1.pid_cruce_factura_remito; } });
const pid_equivalencia_insumo_1 = require("./pid_equivalencia_insumo");
Object.defineProperty(exports, "pid_equivalencia_insumo", { enumerable: true, get: function () { return pid_equivalencia_insumo_1.pid_equivalencia_insumo; } });
const pid_equivalencia_proveedor_1 = require("./pid_equivalencia_proveedor");
Object.defineProperty(exports, "pid_equivalencia_proveedor", { enumerable: true, get: function () { return pid_equivalencia_proveedor_1.pid_equivalencia_proveedor; } });
const pla_comercializacion_1 = require("./pla_comercializacion");
Object.defineProperty(exports, "pla_comercializacion", { enumerable: true, get: function () { return pla_comercializacion_1.pla_comercializacion; } });
const pla_contratistas_1 = require("./pla_contratistas");
Object.defineProperty(exports, "pla_contratistas", { enumerable: true, get: function () { return pla_contratistas_1.pla_contratistas; } });
const pla_contratistas_items_1 = require("./pla_contratistas_items");
Object.defineProperty(exports, "pla_contratistas_items", { enumerable: true, get: function () { return pla_contratistas_items_1.pla_contratistas_items; } });
const pla_egresos_actividad_1 = require("./pla_egresos_actividad");
Object.defineProperty(exports, "pla_egresos_actividad", { enumerable: true, get: function () { return pla_egresos_actividad_1.pla_egresos_actividad; } });
const pla_egresos_actividad_items_1 = require("./pla_egresos_actividad_items");
Object.defineProperty(exports, "pla_egresos_actividad_items", { enumerable: true, get: function () { return pla_egresos_actividad_items_1.pla_egresos_actividad_items; } });
const pla_financiero_ctas_1 = require("./pla_financiero_ctas");
Object.defineProperty(exports, "pla_financiero_ctas", { enumerable: true, get: function () { return pla_financiero_ctas_1.pla_financiero_ctas; } });
const pla_financiero_ctas_items_1 = require("./pla_financiero_ctas_items");
Object.defineProperty(exports, "pla_financiero_ctas_items", { enumerable: true, get: function () { return pla_financiero_ctas_items_1.pla_financiero_ctas_items; } });
const pla_insu_1 = require("./pla_insu");
Object.defineProperty(exports, "pla_insu", { enumerable: true, get: function () { return pla_insu_1.pla_insu; } });
const pla_insumos_1 = require("./pla_insumos");
Object.defineProperty(exports, "pla_insumos", { enumerable: true, get: function () { return pla_insumos_1.pla_insumos; } });
const pla_insumos_items_1 = require("./pla_insumos_items");
Object.defineProperty(exports, "pla_insumos_items", { enumerable: true, get: function () { return pla_insumos_items_1.pla_insumos_items; } });
const pla_lotes_1 = require("./pla_lotes");
Object.defineProperty(exports, "pla_lotes", { enumerable: true, get: function () { return pla_lotes_1.pla_lotes; } });
const pla_lotes_tareas_1 = require("./pla_lotes_tareas");
Object.defineProperty(exports, "pla_lotes_tareas", { enumerable: true, get: function () { return pla_lotes_tareas_1.pla_lotes_tareas; } });
const pla_lotes_tareas_insumos_1 = require("./pla_lotes_tareas_insumos");
Object.defineProperty(exports, "pla_lotes_tareas_insumos", { enumerable: true, get: function () { return pla_lotes_tareas_insumos_1.pla_lotes_tareas_insumos; } });
const pla_lotes_tareas_riego_1 = require("./pla_lotes_tareas_riego");
Object.defineProperty(exports, "pla_lotes_tareas_riego", { enumerable: true, get: function () { return pla_lotes_tareas_riego_1.pla_lotes_tareas_riego; } });
const pla_modelos_1 = require("./pla_modelos");
Object.defineProperty(exports, "pla_modelos", { enumerable: true, get: function () { return pla_modelos_1.pla_modelos; } });
const pla_modelos_tareas_1 = require("./pla_modelos_tareas");
Object.defineProperty(exports, "pla_modelos_tareas", { enumerable: true, get: function () { return pla_modelos_tareas_1.pla_modelos_tareas; } });
const pla_modelos_tareas_insumos_1 = require("./pla_modelos_tareas_insumos");
Object.defineProperty(exports, "pla_modelos_tareas_insumos", { enumerable: true, get: function () { return pla_modelos_tareas_insumos_1.pla_modelos_tareas_insumos; } });
const pla_modelos_tareas_riego_1 = require("./pla_modelos_tareas_riego");
Object.defineProperty(exports, "pla_modelos_tareas_riego", { enumerable: true, get: function () { return pla_modelos_tareas_riego_1.pla_modelos_tareas_riego; } });
const pla_tare_1 = require("./pla_tare");
Object.defineProperty(exports, "pla_tare", { enumerable: true, get: function () { return pla_tare_1.pla_tare; } });
const pla_tareas_1 = require("./pla_tareas");
Object.defineProperty(exports, "pla_tareas", { enumerable: true, get: function () { return pla_tareas_1.pla_tareas; } });
const pla_tareas_items_1 = require("./pla_tareas_items");
Object.defineProperty(exports, "pla_tareas_items", { enumerable: true, get: function () { return pla_tareas_items_1.pla_tareas_items; } });
const pla_tareas_personal_1 = require("./pla_tareas_personal");
Object.defineProperty(exports, "pla_tareas_personal", { enumerable: true, get: function () { return pla_tareas_personal_1.pla_tareas_personal; } });
const pla_tareas_riego_1 = require("./pla_tareas_riego");
Object.defineProperty(exports, "pla_tareas_riego", { enumerable: true, get: function () { return pla_tareas_riego_1.pla_tareas_riego; } });
const pla_ventas_produccion_1 = require("./pla_ventas_produccion");
Object.defineProperty(exports, "pla_ventas_produccion", { enumerable: true, get: function () { return pla_ventas_produccion_1.pla_ventas_produccion; } });
const pla_ventas_produccion_items_1 = require("./pla_ventas_produccion_items");
Object.defineProperty(exports, "pla_ventas_produccion_items", { enumerable: true, get: function () { return pla_ventas_produccion_items_1.pla_ventas_produccion_items; } });
const plan_1 = require("./plan");
Object.defineProperty(exports, "plan", { enumerable: true, get: function () { return plan_1.plan; } });
const planeamiento_lotes_1 = require("./planeamiento_lotes");
Object.defineProperty(exports, "planeamiento_lotes", { enumerable: true, get: function () { return planeamiento_lotes_1.planeamiento_lotes; } });
const plani_lluvias_1 = require("./plani_lluvias");
Object.defineProperty(exports, "plani_lluvias", { enumerable: true, get: function () { return plani_lluvias_1.plani_lluvias; } });
const presupuesto_1 = require("./presupuesto");
Object.defineProperty(exports, "presupuesto", { enumerable: true, get: function () { return presupuesto_1.presupuesto; } });
const presupuestos_1 = require("./presupuestos");
Object.defineProperty(exports, "presupuestos", { enumerable: true, get: function () { return presupuestos_1.presupuestos; } });
const produccion_1 = require("./produccion");
Object.defineProperty(exports, "produccion", { enumerable: true, get: function () { return produccion_1.produccion; } });
const produccion_cania_1 = require("./produccion_cania");
Object.defineProperty(exports, "produccion_cania", { enumerable: true, get: function () { return produccion_cania_1.produccion_cania; } });
const produccion_citrus_1 = require("./produccion_citrus");
Object.defineProperty(exports, "produccion_citrus", { enumerable: true, get: function () { return produccion_citrus_1.produccion_citrus; } });
const produccion_olivo_1 = require("./produccion_olivo");
Object.defineProperty(exports, "produccion_olivo", { enumerable: true, get: function () { return produccion_olivo_1.produccion_olivo; } });
//import { producto_rubro } from "./producto_rubro";
//import type { producto_rubroAttributes, producto_rubroCreationAttributes } from "./producto_rubro";
//import { producto_subrubro } from "./producto_subrubro";
//import type { producto_subrubroAttributes, producto_subrubroCreationAttributes } from "./producto_subrubro";
const promocion_empresa_1 = require("./promocion_empresa");
Object.defineProperty(exports, "promocion_empresa", { enumerable: true, get: function () { return promocion_empresa_1.promocion_empresa; } });
const promociones_1 = require("./promociones");
Object.defineProperty(exports, "promociones", { enumerable: true, get: function () { return promociones_1.promociones; } });
const promociones_plan_1 = require("./promociones_plan");
Object.defineProperty(exports, "promociones_plan", { enumerable: true, get: function () { return promociones_plan_1.promociones_plan; } });
const promociones_plan_empresas_1 = require("./promociones_plan_empresas");
Object.defineProperty(exports, "promociones_plan_empresas", { enumerable: true, get: function () { return promociones_plan_empresas_1.promociones_plan_empresas; } });
const proveedor_impuestos_1 = require("./proveedor_impuestos");
Object.defineProperty(exports, "proveedor_impuestos", { enumerable: true, get: function () { return proveedor_impuestos_1.proveedor_impuestos; } });
const proveedores_1 = require("./proveedores");
Object.defineProperty(exports, "proveedores", { enumerable: true, get: function () { return proveedores_1.proveedores; } });
const proveedores_pagos_1 = require("./proveedores_pagos");
Object.defineProperty(exports, "proveedores_pagos", { enumerable: true, get: function () { return proveedores_pagos_1.proveedores_pagos; } });
const proveedores_precios_articulos_1 = require("./proveedores_precios_articulos");
Object.defineProperty(exports, "proveedores_precios_articulos", { enumerable: true, get: function () { return proveedores_precios_articulos_1.proveedores_precios_articulos; } });
const provincia_1 = require("./provincia");
Object.defineProperty(exports, "provincia", { enumerable: true, get: function () { return provincia_1.provincia; } });
const puntos_articulos_1 = require("./puntos_articulos");
Object.defineProperty(exports, "puntos_articulos", { enumerable: true, get: function () { return puntos_articulos_1.puntos_articulos; } });
const puntos_clientes_1 = require("./puntos_clientes");
Object.defineProperty(exports, "puntos_clientes", { enumerable: true, get: function () { return puntos_clientes_1.puntos_clientes; } });
const puntos_config_1 = require("./puntos_config");
Object.defineProperty(exports, "puntos_config", { enumerable: true, get: function () { return puntos_config_1.puntos_config; } });
const puntos_de_reposicion_1 = require("./puntos_de_reposicion");
Object.defineProperty(exports, "puntos_de_reposicion", { enumerable: true, get: function () { return puntos_de_reposicion_1.puntos_de_reposicion; } });
const puntos_de_venta_1 = require("./puntos_de_venta");
Object.defineProperty(exports, "puntos_de_venta", { enumerable: true, get: function () { return puntos_de_venta_1.puntos_de_venta; } });
const puntos_de_venta_usuarios_1 = require("./puntos_de_venta_usuarios");
Object.defineProperty(exports, "puntos_de_venta_usuarios", { enumerable: true, get: function () { return puntos_de_venta_usuarios_1.puntos_de_venta_usuarios; } });
const puntos_empresas_1 = require("./puntos_empresas");
Object.defineProperty(exports, "puntos_empresas", { enumerable: true, get: function () { return puntos_empresas_1.puntos_empresas; } });
const puntos_x_venta_1 = require("./puntos_x_venta");
Object.defineProperty(exports, "puntos_x_venta", { enumerable: true, get: function () { return puntos_x_venta_1.puntos_x_venta; } });
const raza_1 = require("./raza");
Object.defineProperty(exports, "raza", { enumerable: true, get: function () { return raza_1.raza; } });
const registros_borrados_1 = require("./registros_borrados");
Object.defineProperty(exports, "registros_borrados", { enumerable: true, get: function () { return registros_borrados_1.registros_borrados; } });
const remitos_campo_1 = require("./remitos_campo");
Object.defineProperty(exports, "remitos_campo", { enumerable: true, get: function () { return remitos_campo_1.remitos_campo; } });
const rendicion_1 = require("./rendicion");
Object.defineProperty(exports, "rendicion", { enumerable: true, get: function () { return rendicion_1.rendicion; } });
const rendicion_items_1 = require("./rendicion_items");
Object.defineProperty(exports, "rendicion_items", { enumerable: true, get: function () { return rendicion_items_1.rendicion_items; } });
const rodeo_1 = require("./rodeo");
Object.defineProperty(exports, "rodeo", { enumerable: true, get: function () { return rodeo_1.rodeo; } });
const rubros_1 = require("./rubros");
Object.defineProperty(exports, "rubros", { enumerable: true, get: function () { return rubros_1.rubros; } });
const rubros_clientes_1 = require("./rubros_clientes");
Object.defineProperty(exports, "rubros_clientes", { enumerable: true, get: function () { return rubros_clientes_1.rubros_clientes; } });
const rubros_iva_1 = require("./rubros_iva");
Object.defineProperty(exports, "rubros_iva", { enumerable: true, get: function () { return rubros_iva_1.rubros_iva; } });
const sanidad_1 = require("./sanidad");
Object.defineProperty(exports, "sanidad", { enumerable: true, get: function () { return sanidad_1.sanidad; } });
const secuencia_1 = require("./secuencia");
Object.defineProperty(exports, "secuencia", { enumerable: true, get: function () { return secuencia_1.secuencia; } });
const stock_1 = require("./stock");
Object.defineProperty(exports, "stock", { enumerable: true, get: function () { return stock_1.stock; } });
const stock_campo_1 = require("./stock_campo");
Object.defineProperty(exports, "stock_campo", { enumerable: true, get: function () { return stock_campo_1.stock_campo; } });
const stock_header_1 = require("./stock_header");
Object.defineProperty(exports, "stock_header", { enumerable: true, get: function () { return stock_header_1.stock_header; } });
const stock_item_1 = require("./stock_item");
Object.defineProperty(exports, "stock_item", { enumerable: true, get: function () { return stock_item_1.stock_item; } });
const stockheader_estados_1 = require("./stockheader_estados");
Object.defineProperty(exports, "stockheader_estados", { enumerable: true, get: function () { return stockheader_estados_1.stockheader_estados; } });
const stockheader_movimientos_1 = require("./stockheader_movimientos");
Object.defineProperty(exports, "stockheader_movimientos", { enumerable: true, get: function () { return stockheader_movimientos_1.stockheader_movimientos; } });
const subrubros_1 = require("./subrubros");
Object.defineProperty(exports, "subrubros", { enumerable: true, get: function () { return subrubros_1.subrubros; } });
const superficie_ganadera_1 = require("./superficie_ganadera");
Object.defineProperty(exports, "superficie_ganadera", { enumerable: true, get: function () { return superficie_ganadera_1.superficie_ganadera; } });
const t_ctacte_marca_saldos_1 = require("./t_ctacte_marca_saldos");
Object.defineProperty(exports, "t_ctacte_marca_saldos", { enumerable: true, get: function () { return t_ctacte_marca_saldos_1.t_ctacte_marca_saldos; } });
const t_empresas_servicios_1 = require("./t_empresas_servicios");
Object.defineProperty(exports, "t_empresas_servicios", { enumerable: true, get: function () { return t_empresas_servicios_1.t_empresas_servicios; } });
const t_inf_saldos_hist_1 = require("./t_inf_saldos_hist");
Object.defineProperty(exports, "t_inf_saldos_hist", { enumerable: true, get: function () { return t_inf_saldos_hist_1.t_inf_saldos_hist; } });
const t_log_1 = require("./t_log");
Object.defineProperty(exports, "t_log", { enumerable: true, get: function () { return t_log_1.t_log; } });
const t_pcuentas_establecimientos_1 = require("./t_pcuentas_establecimientos");
Object.defineProperty(exports, "t_pcuentas_establecimientos", { enumerable: true, get: function () { return t_pcuentas_establecimientos_1.t_pcuentas_establecimientos; } });
const t_proveedores_marca_saldos_1 = require("./t_proveedores_marca_saldos");
Object.defineProperty(exports, "t_proveedores_marca_saldos", { enumerable: true, get: function () { return t_proveedores_marca_saldos_1.t_proveedores_marca_saldos; } });
const tablas_1 = require("./tablas");
Object.defineProperty(exports, "tablas", { enumerable: true, get: function () { return tablas_1.tablas; } });
const tarea_concepto_1 = require("./tarea_concepto");
Object.defineProperty(exports, "tarea_concepto", { enumerable: true, get: function () { return tarea_concepto_1.tarea_concepto; } });
const tareas_1 = require("./tareas");
Object.defineProperty(exports, "tareas", { enumerable: true, get: function () { return tareas_1.tareas; } });
const tareas_precios_1 = require("./tareas_precios");
Object.defineProperty(exports, "tareas_precios", { enumerable: true, get: function () { return tareas_precios_1.tareas_precios; } });
const tareas_seguridad_1 = require("./tareas_seguridad");
Object.defineProperty(exports, "tareas_seguridad", { enumerable: true, get: function () { return tareas_seguridad_1.tareas_seguridad; } });
const tarjetas_1 = require("./tarjetas");
Object.defineProperty(exports, "tarjetas", { enumerable: true, get: function () { return tarjetas_1.tarjetas; } });
const tarjetas_plan_1 = require("./tarjetas_plan");
Object.defineProperty(exports, "tarjetas_plan", { enumerable: true, get: function () { return tarjetas_plan_1.tarjetas_plan; } });
const tarjetas_plan_empresas_1 = require("./tarjetas_plan_empresas");
Object.defineProperty(exports, "tarjetas_plan_empresas", { enumerable: true, get: function () { return tarjetas_plan_empresas_1.tarjetas_plan_empresas; } });
const testing_1 = require("./testing");
Object.defineProperty(exports, "testing", { enumerable: true, get: function () { return testing_1.testing; } });
const ticket_comprobante_1 = require("./ticket_comprobante");
Object.defineProperty(exports, "ticket_comprobante", { enumerable: true, get: function () { return ticket_comprobante_1.ticket_comprobante; } });
const tipo_destino_1 = require("./tipo_destino");
Object.defineProperty(exports, "tipo_destino", { enumerable: true, get: function () { return tipo_destino_1.tipo_destino; } });
const tipo_impuesto_1 = require("./tipo_impuesto");
Object.defineProperty(exports, "tipo_impuesto", { enumerable: true, get: function () { return tipo_impuesto_1.tipo_impuesto; } });
const tipo_mov_1 = require("./tipo_mov");
Object.defineProperty(exports, "tipo_mov", { enumerable: true, get: function () { return tipo_mov_1.tipo_mov; } });
const tipo_servicio_ganaderia_1 = require("./tipo_servicio_ganaderia");
Object.defineProperty(exports, "tipo_servicio_ganaderia", { enumerable: true, get: function () { return tipo_servicio_ganaderia_1.tipo_servicio_ganaderia; } });
const tipo_ticket_1 = require("./tipo_ticket");
Object.defineProperty(exports, "tipo_ticket", { enumerable: true, get: function () { return tipo_ticket_1.tipo_ticket; } });
const tipos_dinero_1 = require("./tipos_dinero");
Object.defineProperty(exports, "tipos_dinero", { enumerable: true, get: function () { return tipos_dinero_1.tipos_dinero; } });
const tipos_documentos_1 = require("./tipos_documentos");
Object.defineProperty(exports, "tipos_documentos", { enumerable: true, get: function () { return tipos_documentos_1.tipos_documentos; } });
const tipos_documentos_py_1 = require("./tipos_documentos_py");
Object.defineProperty(exports, "tipos_documentos_py", { enumerable: true, get: function () { return tipos_documentos_py_1.tipos_documentos_py; } });
const tmp_articulos_c_1 = require("./tmp_articulos_c");
Object.defineProperty(exports, "tmp_articulos_c", { enumerable: true, get: function () { return tmp_articulos_c_1.tmp_articulos_c; } });
const tmp_libro_mayor_1 = require("./tmp_libro_mayor");
Object.defineProperty(exports, "tmp_libro_mayor", { enumerable: true, get: function () { return tmp_libro_mayor_1.tmp_libro_mayor; } });
const tmp_resultado_x_un_1 = require("./tmp_resultado_x_un");
Object.defineProperty(exports, "tmp_resultado_x_un", { enumerable: true, get: function () { return tmp_resultado_x_un_1.tmp_resultado_x_un; } });
const transformacion_1 = require("./transformacion");
Object.defineProperty(exports, "transformacion", { enumerable: true, get: function () { return transformacion_1.transformacion; } });
const transformacion_items_1 = require("./transformacion_items");
Object.defineProperty(exports, "transformacion_items", { enumerable: true, get: function () { return transformacion_items_1.transformacion_items; } });
const transporte_1 = require("./transporte");
Object.defineProperty(exports, "transporte", { enumerable: true, get: function () { return transporte_1.transporte; } });
const tt_actividades_1 = require("./tt_actividades");
Object.defineProperty(exports, "tt_actividades", { enumerable: true, get: function () { return tt_actividades_1.tt_actividades; } });
//import { tt_admstrgest } from "./tt_admstrgest";
//import type { tt_admstrgestAttributes, tt_admstrgestCreationAttributes } from "./tt_admstrgest";
//import { tt_admstrgest_aux } from "./tt_admstrgest_aux";
//import type { tt_admstrgest_auxAttributes, tt_admstrgest_auxCreationAttributes } from "./tt_admstrgest_aux";
//import { tt_admstrmen } from "./tt_admstrmen";
//import type { tt_admstrmenAttributes, tt_admstrmenCreationAttributes } from "./tt_admstrmen";
//import { tt_admstrmen_aux } from "./tt_admstrmen_aux";
//import type { tt_admstrmen_auxAttributes, tt_admstrmen_auxCreationAttributes } from "./tt_admstrmen_aux";
const tt_animales_1 = require("./tt_animales");
Object.defineProperty(exports, "tt_animales", { enumerable: true, get: function () { return tt_animales_1.tt_animales; } });
const tt_anticiposvscancel_1 = require("./tt_anticiposvscancel");
Object.defineProperty(exports, "tt_anticiposvscancel", { enumerable: true, get: function () { return tt_anticiposvscancel_1.tt_anticiposvscancel; } });
const tt_articulos_1 = require("./tt_articulos");
Object.defineProperty(exports, "tt_articulos", { enumerable: true, get: function () { return tt_articulos_1.tt_articulos; } });
//import { tt_articulos_existencia } from "./tt_articulos_existencia";
//import type { tt_articulos_existenciaAttributes, tt_articulos_existenciaCreationAttributes } from "./tt_articulos_existencia";
const tt_articulos_precios_aux_1 = require("./tt_articulos_precios_aux");
Object.defineProperty(exports, "tt_articulos_precios_aux", { enumerable: true, get: function () { return tt_articulos_precios_aux_1.tt_articulos_precios_aux; } });
const tt_balance_1 = require("./tt_balance");
Object.defineProperty(exports, "tt_balance", { enumerable: true, get: function () { return tt_balance_1.tt_balance; } });
//import { tt_balance_paso } from "./tt_balance_paso";
//import type { tt_balance_pasoAttributes, tt_balance_pasoCreationAttributes } from "./tt_balance_paso";
const tt_balance_temp_1 = require("./tt_balance_temp");
Object.defineProperty(exports, "tt_balance_temp", { enumerable: true, get: function () { return tt_balance_temp_1.tt_balance_temp; } });
//import { tt_cab_admstrmen } from "./tt_cab_admstrmen";
//import type { tt_cab_admstrmenAttributes, tt_cab_admstrmenCreationAttributes } from "./tt_cab_admstrmen";
const tt_cashflow_aux1_1 = require("./tt_cashflow_aux1");
Object.defineProperty(exports, "tt_cashflow_aux1", { enumerable: true, get: function () { return tt_cashflow_aux1_1.tt_cashflow_aux1; } });
const tt_cheques_1 = require("./tt_cheques");
Object.defineProperty(exports, "tt_cheques", { enumerable: true, get: function () { return tt_cheques_1.tt_cheques; } });
const tt_cheques_salidos_1 = require("./tt_cheques_salidos");
Object.defineProperty(exports, "tt_cheques_salidos", { enumerable: true, get: function () { return tt_cheques_salidos_1.tt_cheques_salidos; } });
const tt_clientes_1 = require("./tt_clientes");
Object.defineProperty(exports, "tt_clientes", { enumerable: true, get: function () { return tt_clientes_1.tt_clientes; } });
const tt_clientes_ctacte_saldos_1 = require("./tt_clientes_ctacte_saldos");
Object.defineProperty(exports, "tt_clientes_ctacte_saldos", { enumerable: true, get: function () { return tt_clientes_ctacte_saldos_1.tt_clientes_ctacte_saldos; } });
const tt_clientes_ctacte_saldos_aux_1 = require("./tt_clientes_ctacte_saldos_aux");
Object.defineProperty(exports, "tt_clientes_ctacte_saldos_aux", { enumerable: true, get: function () { return tt_clientes_ctacte_saldos_aux_1.tt_clientes_ctacte_saldos_aux; } });
const tt_clientes_saldos_aux_1 = require("./tt_clientes_saldos_aux");
Object.defineProperty(exports, "tt_clientes_saldos_aux", { enumerable: true, get: function () { return tt_clientes_saldos_aux_1.tt_clientes_saldos_aux; } });
const tt_comp_numero_1 = require("./tt_comp_numero");
Object.defineProperty(exports, "tt_comp_numero", { enumerable: true, get: function () { return tt_comp_numero_1.tt_comp_numero; } });
const tt_comprobantes_pendientes_1 = require("./tt_comprobantes_pendientes");
Object.defineProperty(exports, "tt_comprobantes_pendientes", { enumerable: true, get: function () { return tt_comprobantes_pendientes_1.tt_comprobantes_pendientes; } });
const tt_cons_stock_1 = require("./tt_cons_stock");
Object.defineProperty(exports, "tt_cons_stock", { enumerable: true, get: function () { return tt_cons_stock_1.tt_cons_stock; } });
const tt_cons_stock_aux_1 = require("./tt_cons_stock_aux");
Object.defineProperty(exports, "tt_cons_stock_aux", { enumerable: true, get: function () { return tt_cons_stock_aux_1.tt_cons_stock_aux; } });
const tt_cosecha_1 = require("./tt_cosecha");
Object.defineProperty(exports, "tt_cosecha", { enumerable: true, get: function () { return tt_cosecha_1.tt_cosecha; } });
const tt_cotizacion_1 = require("./tt_cotizacion");
Object.defineProperty(exports, "tt_cotizacion", { enumerable: true, get: function () { return tt_cotizacion_1.tt_cotizacion; } });
const tt_cpro_aux_1 = require("./tt_cpro_aux");
Object.defineProperty(exports, "tt_cpro_aux", { enumerable: true, get: function () { return tt_cpro_aux_1.tt_cpro_aux; } });
const tt_ctas_aux_1 = require("./tt_ctas_aux");
Object.defineProperty(exports, "tt_ctas_aux", { enumerable: true, get: function () { return tt_ctas_aux_1.tt_ctas_aux; } });
//import { tt_ctrl_cosecha } from "./tt_ctrl_cosecha";
//import type { tt_ctrl_cosechaAttributes, tt_ctrl_cosechaCreationAttributes } from "./tt_ctrl_cosecha";
//import { tt_ctrl_cosecha_aux } from "./tt_ctrl_cosecha_aux";
//import type { tt_ctrl_cosecha_auxAttributes, tt_ctrl_cosecha_auxCreationAttributes } from "./tt_ctrl_cosecha_aux";
const tt_cuentas_1 = require("./tt_cuentas");
Object.defineProperty(exports, "tt_cuentas", { enumerable: true, get: function () { return tt_cuentas_1.tt_cuentas; } });
//import { tt_cuentas_cashflow } from "./tt_cuentas_cashflow";
//import type { tt_cuentas_cashflowAttributes, tt_cuentas_cashflowCreationAttributes } from "./tt_cuentas_cashflow";
const tt_cuentas_disponibilidades_saldos_1 = require("./tt_cuentas_disponibilidades_saldos");
Object.defineProperty(exports, "tt_cuentas_disponibilidades_saldos", { enumerable: true, get: function () { return tt_cuentas_disponibilidades_saldos_1.tt_cuentas_disponibilidades_saldos; } });
const tt_cuentas_disponibilidades_saldos_aux_1 = require("./tt_cuentas_disponibilidades_saldos_aux");
Object.defineProperty(exports, "tt_cuentas_disponibilidades_saldos_aux", { enumerable: true, get: function () { return tt_cuentas_disponibilidades_saldos_aux_1.tt_cuentas_disponibilidades_saldos_aux; } });
const tt_cuentas_nivel_1 = require("./tt_cuentas_nivel");
Object.defineProperty(exports, "tt_cuentas_nivel", { enumerable: true, get: function () { return tt_cuentas_nivel_1.tt_cuentas_nivel; } });
const tt_cuentas_saldos_1 = require("./tt_cuentas_saldos");
Object.defineProperty(exports, "tt_cuentas_saldos", { enumerable: true, get: function () { return tt_cuentas_saldos_1.tt_cuentas_saldos; } });
const tt_cuentas_saldos_aux_1 = require("./tt_cuentas_saldos_aux");
Object.defineProperty(exports, "tt_cuentas_saldos_aux", { enumerable: true, get: function () { return tt_cuentas_saldos_aux_1.tt_cuentas_saldos_aux; } });
const tt_debug_1 = require("./tt_debug");
Object.defineProperty(exports, "tt_debug", { enumerable: true, get: function () { return tt_debug_1.tt_debug; } });
const tt_deposito_1 = require("./tt_deposito");
Object.defineProperty(exports, "tt_deposito", { enumerable: true, get: function () { return tt_deposito_1.tt_deposito; } });
const tt_empresa_1 = require("./tt_empresa");
Object.defineProperty(exports, "tt_empresa", { enumerable: true, get: function () { return tt_empresa_1.tt_empresa; } });
const tt_empresas_servicios_1 = require("./tt_empresas_servicios");
Object.defineProperty(exports, "tt_empresas_servicios", { enumerable: true, get: function () { return tt_empresas_servicios_1.tt_empresas_servicios; } });
const tt_establecimientos_1 = require("./tt_establecimientos");
Object.defineProperty(exports, "tt_establecimientos", { enumerable: true, get: function () { return tt_establecimientos_1.tt_establecimientos; } });
const tt_existencias_stock_1 = require("./tt_existencias_stock");
Object.defineProperty(exports, "tt_existencias_stock", { enumerable: true, get: function () { return tt_existencias_stock_1.tt_existencias_stock; } });
//import { tt_fechas_cashflow } from "./tt_fechas_cashflow";
//import type { tt_fechas_cashflowAttributes, tt_fechas_cashflowCreationAttributes } from "./tt_fechas_cashflow";
const tt_fiscal_1 = require("./tt_fiscal");
Object.defineProperty(exports, "tt_fiscal", { enumerable: true, get: function () { return tt_fiscal_1.tt_fiscal; } });
const tt_import_archivo_ingenio_1 = require("./tt_import_archivo_ingenio");
Object.defineProperty(exports, "tt_import_archivo_ingenio", { enumerable: true, get: function () { return tt_import_archivo_ingenio_1.tt_import_archivo_ingenio; } });
//import { tt_inf_provcontflet } from "./tt_inf_provcontflet";
//import type { tt_inf_provcontfletAttributes, tt_inf_provcontfletCreationAttributes } from "./tt_inf_provcontflet";
//import { tt_inf_provcontflet_aux } from "./tt_inf_provcontflet_aux";
//import type { tt_inf_provcontflet_auxAttributes, tt_inf_provcontflet_auxCreationAttributes } from "./tt_inf_provcontflet_aux";
const tt_inventario_1 = require("./tt_inventario");
Object.defineProperty(exports, "tt_inventario", { enumerable: true, get: function () { return tt_inventario_1.tt_inventario; } });
const tt_inventario_animales_1 = require("./tt_inventario_animales");
Object.defineProperty(exports, "tt_inventario_animales", { enumerable: true, get: function () { return tt_inventario_animales_1.tt_inventario_animales; } });
const tt_invganadero_1 = require("./tt_invganadero");
Object.defineProperty(exports, "tt_invganadero", { enumerable: true, get: function () { return tt_invganadero_1.tt_invganadero; } });
const tt_invganadero_aux_1 = require("./tt_invganadero_aux");
Object.defineProperty(exports, "tt_invganadero_aux", { enumerable: true, get: function () { return tt_invganadero_aux_1.tt_invganadero_aux; } });
const tt_log_1 = require("./tt_log");
Object.defineProperty(exports, "tt_log", { enumerable: true, get: function () { return tt_log_1.tt_log; } });
const tt_lote_actividad_1 = require("./tt_lote_actividad");
Object.defineProperty(exports, "tt_lote_actividad", { enumerable: true, get: function () { return tt_lote_actividad_1.tt_lote_actividad; } });
const tt_nov_animales_1 = require("./tt_nov_animales");
Object.defineProperty(exports, "tt_nov_animales", { enumerable: true, get: function () { return tt_nov_animales_1.tt_nov_animales; } });
const tt_nov_insumos_1 = require("./tt_nov_insumos");
Object.defineProperty(exports, "tt_nov_insumos", { enumerable: true, get: function () { return tt_nov_insumos_1.tt_nov_insumos; } });
const tt_novedades_1 = require("./tt_novedades");
Object.defineProperty(exports, "tt_novedades", { enumerable: true, get: function () { return tt_novedades_1.tt_novedades; } });
const tt_parametros_1 = require("./tt_parametros");
Object.defineProperty(exports, "tt_parametros", { enumerable: true, get: function () { return tt_parametros_1.tt_parametros; } });
const tt_periodos_1 = require("./tt_periodos");
Object.defineProperty(exports, "tt_periodos", { enumerable: true, get: function () { return tt_periodos_1.tt_periodos; } });
const tt_pla_insumos_1 = require("./tt_pla_insumos");
Object.defineProperty(exports, "tt_pla_insumos", { enumerable: true, get: function () { return tt_pla_insumos_1.tt_pla_insumos; } });
const tt_plapaggral_1 = require("./tt_plapaggral");
Object.defineProperty(exports, "tt_plapaggral", { enumerable: true, get: function () { return tt_plapaggral_1.tt_plapaggral; } });
const tt_plapaggral_aux_1 = require("./tt_plapaggral_aux");
Object.defineProperty(exports, "tt_plapaggral_aux", { enumerable: true, get: function () { return tt_plapaggral_aux_1.tt_plapaggral_aux; } });
const tt_proveedor_cliente_1 = require("./tt_proveedor_cliente");
Object.defineProperty(exports, "tt_proveedor_cliente", { enumerable: true, get: function () { return tt_proveedor_cliente_1.tt_proveedor_cliente; } });
const tt_proveedores_1 = require("./tt_proveedores");
Object.defineProperty(exports, "tt_proveedores", { enumerable: true, get: function () { return tt_proveedores_1.tt_proveedores; } });
const tt_proveedores_ctacte_saldos_1 = require("./tt_proveedores_ctacte_saldos");
Object.defineProperty(exports, "tt_proveedores_ctacte_saldos", { enumerable: true, get: function () { return tt_proveedores_ctacte_saldos_1.tt_proveedores_ctacte_saldos; } });
const tt_proveedores_ctacte_saldos_aux_1 = require("./tt_proveedores_ctacte_saldos_aux");
Object.defineProperty(exports, "tt_proveedores_ctacte_saldos_aux", { enumerable: true, get: function () { return tt_proveedores_ctacte_saldos_aux_1.tt_proveedores_ctacte_saldos_aux; } });
const tt_proveedores_saldos_aux_1 = require("./tt_proveedores_saldos_aux");
Object.defineProperty(exports, "tt_proveedores_saldos_aux", { enumerable: true, get: function () { return tt_proveedores_saldos_aux_1.tt_proveedores_saldos_aux; } });
//import { tt_renumera } from "./tt_renumera";
//import type { tt_renumeraAttributes, tt_renumeraCreationAttributes } from "./tt_renumera";
const tt_res_emp_servicios_1 = require("./tt_res_emp_servicios");
Object.defineProperty(exports, "tt_res_emp_servicios", { enumerable: true, get: function () { return tt_res_emp_servicios_1.tt_res_emp_servicios; } });
const tt_res_emp_servicios_aux_1 = require("./tt_res_emp_servicios_aux");
Object.defineProperty(exports, "tt_res_emp_servicios_aux", { enumerable: true, get: function () { return tt_res_emp_servicios_aux_1.tt_res_emp_servicios_aux; } });
const tt_resultado_actividades_1 = require("./tt_resultado_actividades");
Object.defineProperty(exports, "tt_resultado_actividades", { enumerable: true, get: function () { return tt_resultado_actividades_1.tt_resultado_actividades; } });
const tt_resultado_actividades_aux_1 = require("./tt_resultado_actividades_aux");
Object.defineProperty(exports, "tt_resultado_actividades_aux", { enumerable: true, get: function () { return tt_resultado_actividades_aux_1.tt_resultado_actividades_aux; } });
const tt_sql_1 = require("./tt_sql");
Object.defineProperty(exports, "tt_sql", { enumerable: true, get: function () { return tt_sql_1.tt_sql; } });
const tt_stock_paso_1 = require("./tt_stock_paso");
Object.defineProperty(exports, "tt_stock_paso", { enumerable: true, get: function () { return tt_stock_paso_1.tt_stock_paso; } });
const tt_tesoreria_1 = require("./tt_tesoreria");
Object.defineProperty(exports, "tt_tesoreria", { enumerable: true, get: function () { return tt_tesoreria_1.tt_tesoreria; } });
//import { tt_tesoreria_aux } from "./tt_tesoreria_aux";
//import type { tt_tesoreria_auxAttributes, tt_tesoreria_auxCreationAttributes } from "./tt_tesoreria_aux";
const tt_tesoreria_caso1_1 = require("./tt_tesoreria_caso1");
Object.defineProperty(exports, "tt_tesoreria_caso1", { enumerable: true, get: function () { return tt_tesoreria_caso1_1.tt_tesoreria_caso1; } });
const tt_tesoreria_retenciones_1 = require("./tt_tesoreria_retenciones");
Object.defineProperty(exports, "tt_tesoreria_retenciones", { enumerable: true, get: function () { return tt_tesoreria_retenciones_1.tt_tesoreria_retenciones; } });
//import { tt_tipo_comprobante } from "./tt_tipo_comprobante";
//import type { tt_tipo_comprobanteAttributes, tt_tipo_comprobanteCreationAttributes } from "./tt_tipo_comprobante";
const tt_unidad_negocio_1 = require("./tt_unidad_negocio");
Object.defineProperty(exports, "tt_unidad_negocio", { enumerable: true, get: function () { return tt_unidad_negocio_1.tt_unidad_negocio; } });
const tt_up_1 = require("./tt_up");
Object.defineProperty(exports, "tt_up", { enumerable: true, get: function () { return tt_up_1.tt_up; } });
const tt_usuarios_seleccion_1 = require("./tt_usuarios_seleccion");
Object.defineProperty(exports, "tt_usuarios_seleccion", { enumerable: true, get: function () { return tt_usuarios_seleccion_1.tt_usuarios_seleccion; } });
const tt_volcado_impuestos_1 = require("./tt_volcado_impuestos");
Object.defineProperty(exports, "tt_volcado_impuestos", { enumerable: true, get: function () { return tt_volcado_impuestos_1.tt_volcado_impuestos; } });
const turnos_1 = require("./turnos");
Object.defineProperty(exports, "turnos", { enumerable: true, get: function () { return turnos_1.turnos; } });
const unidad_de_medida_1 = require("./unidad_de_medida");
Object.defineProperty(exports, "unidad_de_medida", { enumerable: true, get: function () { return unidad_de_medida_1.unidad_de_medida; } });
const unidad_negocio_1 = require("./unidad_negocio");
Object.defineProperty(exports, "unidad_negocio", { enumerable: true, get: function () { return unidad_negocio_1.unidad_negocio; } });
const unidad_productiva_1 = require("./unidad_productiva");
Object.defineProperty(exports, "unidad_productiva", { enumerable: true, get: function () { return unidad_productiva_1.unidad_productiva; } });
const unidades_1 = require("./unidades");
Object.defineProperty(exports, "unidades", { enumerable: true, get: function () { return unidades_1.unidades; } });
const usuarios_1 = require("./usuarios");
Object.defineProperty(exports, "usuarios", { enumerable: true, get: function () { return usuarios_1.usuarios; } });
const usuarios_campo_1 = require("./usuarios_campo");
Object.defineProperty(exports, "usuarios_campo", { enumerable: true, get: function () { return usuarios_campo_1.usuarios_campo; } });
const usuarios_depositos_1 = require("./usuarios_depositos");
Object.defineProperty(exports, "usuarios_depositos", { enumerable: true, get: function () { return usuarios_depositos_1.usuarios_depositos; } });
const usuarios_permisos_1 = require("./usuarios_permisos");
Object.defineProperty(exports, "usuarios_permisos", { enumerable: true, get: function () { return usuarios_permisos_1.usuarios_permisos; } });
const usuarios_tareas_1 = require("./usuarios_tareas");
Object.defineProperty(exports, "usuarios_tareas", { enumerable: true, get: function () { return usuarios_tareas_1.usuarios_tareas; } });
const vendedores_1 = require("./vendedores");
Object.defineProperty(exports, "vendedores", { enumerable: true, get: function () { return vendedores_1.vendedores; } });
const ventas_1 = require("./ventas");
Object.defineProperty(exports, "ventas", { enumerable: true, get: function () { return ventas_1.ventas; } });
const ventas_cert_deposito_1 = require("./ventas_cert_deposito");
Object.defineProperty(exports, "ventas_cert_deposito", { enumerable: true, get: function () { return ventas_cert_deposito_1.ventas_cert_deposito; } });
const ventas_facturas_1 = require("./ventas_facturas");
Object.defineProperty(exports, "ventas_facturas", { enumerable: true, get: function () { return ventas_facturas_1.ventas_facturas; } });
const ventas_items_1 = require("./ventas_items");
Object.defineProperty(exports, "ventas_items", { enumerable: true, get: function () { return ventas_items_1.ventas_items; } });
const ventas_items_serie_1 = require("./ventas_items_serie");
Object.defineProperty(exports, "ventas_items_serie", { enumerable: true, get: function () { return ventas_items_serie_1.ventas_items_serie; } });
const ventas_medio_de_pago_1 = require("./ventas_medio_de_pago");
Object.defineProperty(exports, "ventas_medio_de_pago", { enumerable: true, get: function () { return ventas_medio_de_pago_1.ventas_medio_de_pago; } });
const ventas_pagos_1 = require("./ventas_pagos");
Object.defineProperty(exports, "ventas_pagos", { enumerable: true, get: function () { return ventas_pagos_1.ventas_pagos; } });
const ventas_produccion_1 = require("./ventas_produccion");
Object.defineProperty(exports, "ventas_produccion", { enumerable: true, get: function () { return ventas_produccion_1.ventas_produccion; } });
const ventas_remitos_facturas_1 = require("./ventas_remitos_facturas");
Object.defineProperty(exports, "ventas_remitos_facturas", { enumerable: true, get: function () { return ventas_remitos_facturas_1.ventas_remitos_facturas; } });
const ventas_retenciones_1 = require("./ventas_retenciones");
Object.defineProperty(exports, "ventas_retenciones", { enumerable: true, get: function () { return ventas_retenciones_1.ventas_retenciones; } });
const ventas_transporte_1 = require("./ventas_transporte");
Object.defineProperty(exports, "ventas_transporte", { enumerable: true, get: function () { return ventas_transporte_1.ventas_transporte; } });
const ventas_unidad_item_1 = require("./ventas_unidad_item");
Object.defineProperty(exports, "ventas_unidad_item", { enumerable: true, get: function () { return ventas_unidad_item_1.ventas_unidad_item; } });
const ventas_vencimientos_1 = require("./ventas_vencimientos");
Object.defineProperty(exports, "ventas_vencimientos", { enumerable: true, get: function () { return ventas_vencimientos_1.ventas_vencimientos; } });
const volcada_1 = require("./volcada");
Object.defineProperty(exports, "volcada", { enumerable: true, get: function () { return volcada_1.volcada; } });
const webservice_1 = require("./webservice");
Object.defineProperty(exports, "webservice", { enumerable: true, get: function () { return webservice_1.webservice; } });
const webservice_afip_1 = require("./webservice_afip");
Object.defineProperty(exports, "webservice_afip", { enumerable: true, get: function () { return webservice_afip_1.webservice_afip; } });
function initModels(sequelize) {
    act_categoria_1.act_categoria.initModel(sequelize);
    actividad_1.actividad.initModel(sequelize);
    actividad_periodo_1.actividad_periodo.initModel(sequelize);
    actividades_campo_1.actividades_campo.initModel(sequelize);
    actualizacion_1.actualizacion.initModel(sequelize);
    actualizacion_dolar_1.actualizacion_dolar.initModel(sequelize);
    actualizacion_utas_1.actualizacion_utas.initModel(sequelize);
    afip_comprobantes_1.afip_comprobantes.initModel(sequelize);
    afip_comprobantes_codigos_1.afip_comprobantes_codigos.initModel(sequelize);
    afip_conceptos_1.afip_conceptos.initModel(sequelize);
    afip_cosechas_1.afip_cosechas.initModel(sequelize);
    afip_cuitdest_1.afip_cuitdest.initModel(sequelize);
    afip_especies_1.afip_especies.initModel(sequelize);
    afip_idiomas_1.afip_idiomas.initModel(sequelize);
    afip_incoterms_1.afip_incoterms.initModel(sequelize);
    afip_localidades_1.afip_localidades.initModel(sequelize);
    afip_monedas_1.afip_monedas.initModel(sequelize);
    afip_nomenclador_1.afip_nomenclador.initModel(sequelize);
    afip_paises_1.afip_paises.initModel(sequelize);
    afip_provincias_1.afip_provincias.initModel(sequelize);
    afip_puntos_ventas_1.afip_puntos_ventas.initModel(sequelize);
    afip_texportacion_1.afip_texportacion.initModel(sequelize);
    afip_tipos_datos_opcional_1.afip_tipos_datos_opcional.initModel(sequelize);
    afip_tipos_documentos_1.afip_tipos_documentos.initModel(sequelize);
    afip_tipos_iva_1.afip_tipos_iva.initModel(sequelize);
    afip_tipos_tributos_1.afip_tipos_tributos.initModel(sequelize);
    afip_unimed_1.afip_unimed.initModel(sequelize);
    ajustes_1.ajustes.initModel(sequelize);
    amortizaciones_1.amortizaciones.initModel(sequelize);
    animales_1.animales.initModel(sequelize);
    animales_estados_1.animales_estados.initModel(sequelize);
    aplicaciones_1.aplicaciones.initModel(sequelize);
    arch_importados_1.arch_importados.initModel(sequelize);
    //archivo_arba.initModel(sequelize);
    articulo_equiv_unidades_1.articulo_equiv_unidades.initModel(sequelize);
    articulos_1.articulos.initModel(sequelize);
    articulos_caracteristicas_1.articulos_caracteristicas.initModel(sequelize);
    articulos_caracteristicas_valores_1.articulos_caracteristicas_valores.initModel(sequelize);
    articulos_serie_1.articulos_serie.initModel(sequelize);
    articulos_tags_1.articulos_tags.initModel(sequelize);
    articulos_transformacion_1.articulos_transformacion.initModel(sequelize);
    articulos_unidad_medida_1.articulos_unidad_medida.initModel(sequelize);
    asientos_1.asientos.initModel(sequelize);
    asientos_items_1.asientos_items.initModel(sequelize);
    asientos_iva_1.asientos_iva.initModel(sequelize);
    asignar_rubros_1.asignar_rubros.initModel(sequelize);
    //atributo.initModel(sequelize);
    atributos_de_precios_1.atributos_de_precios.initModel(sequelize);
    bancos_1.bancos.initModel(sequelize);
    bases_contables_1.bases_contables.initModel(sequelize);
    basicos_1.basicos.initModel(sequelize);
    borrados_1.borrados.initModel(sequelize);
    cab_lista_precio_1.cab_lista_precio.initModel(sequelize);
    cajas_1.cajas.initModel(sequelize);
    cania_peladores_1.cania_peladores.initModel(sequelize);
    //carta_porte.initModel(sequelize);
    //carta_porte_det.initModel(sequelize);
    categoria_1.categoria.initModel(sequelize);
    categoria_aplicativos_1.categoria_aplicativos.initModel(sequelize);
    categoria_iva_1.categoria_iva.initModel(sequelize);
    chequeras_1.chequeras.initModel(sequelize);
    cierres_fiscales_1.cierres_fiscales.initModel(sequelize);
    clientes_1.clientes.initModel(sequelize);
    clientes2_1.clientes2.initModel(sequelize);
    clientes_acuerdos_1.clientes_acuerdos.initModel(sequelize);
    clientes_destinos_1.clientes_destinos.initModel(sequelize);
    clientes_domicilios_1.clientes_domicilios.initModel(sequelize);
    clientes_impuestos_1.clientes_impuestos.initModel(sequelize);
    clientes_pagos_1.clientes_pagos.initModel(sequelize);
    clientes_seguimiento_1.clientes_seguimiento.initModel(sequelize);
    colores_1.colores.initModel(sequelize);
    comision_x_vendedor_1.comision_x_vendedor.initModel(sequelize);
    compras_1.compras.initModel(sequelize);
    compras_comprob_ingresos_bruto_1.compras_comprob_ingresos_bruto.initModel(sequelize);
    compras_comprob_retencion_1.compras_comprob_retencion.initModel(sequelize);
    compras_facturas_1.compras_facturas.initModel(sequelize);
    compras_items_1.compras_items.initModel(sequelize);
    //compras_items_remitos.initModel(sequelize);
    compras_labores_1.compras_labores.initModel(sequelize);
    compras_pagos_1.compras_pagos.initModel(sequelize);
    compras_produccion_1.compras_produccion.initModel(sequelize);
    compras_remitos_1.compras_remitos.initModel(sequelize);
    compras_retenciones_1.compras_retenciones.initModel(sequelize);
    compras_retenciones_detalle_1.compras_retenciones_detalle.initModel(sequelize);
    compras_stock_items_1.compras_stock_items.initModel(sequelize);
    compras_vencimientos_1.compras_vencimientos.initModel(sequelize);
    comprobantes_destino_1.comprobantes_destino.initModel(sequelize);
    comprobantes_formatos_1.comprobantes_formatos.initModel(sequelize);
    comprobantes_formatos_default_1.comprobantes_formatos_default.initModel(sequelize);
    comprobantes_relacion_1.comprobantes_relacion.initModel(sequelize);
    //conceptos.initModel(sequelize);
    condicion_venta_tipo_1.condicion_venta_tipo.initModel(sequelize);
    conf_colores_deudas_1.conf_colores_deudas.initModel(sequelize);
    conf_ejercicio_economico_1.conf_ejercicio_economico.initModel(sequelize);
    config_1.config.initModel(sequelize);
    config_app_1.config_app.initModel(sequelize);
    config_campo_1.config_campo.initModel(sequelize);
    config_circuitos_1.config_circuitos.initModel(sequelize);
    config_importacion_1.config_importacion.initModel(sequelize);
    config_iva_1.config_iva.initModel(sequelize);
    config_parametros_1.config_parametros.initModel(sequelize);
    config_redondeos_1.config_redondeos.initModel(sequelize);
    config_volcado_impuestos_1.config_volcado_impuestos.initModel(sequelize);
    configuracion_libro_iva_1.configuracion_libro_iva.initModel(sequelize);
    //contratos.initModel(sequelize);
    coordenadas_1.coordenadas.initModel(sequelize);
    cotizacion_1.cotizacion.initModel(sequelize);
    cta_cble_grupo_1.cta_cble_grupo.initModel(sequelize);
    cta_cble_grupo_item_1.cta_cble_grupo_item.initModel(sequelize);
    cuadrillas_1.cuadrillas.initModel(sequelize);
    cuentas_1.cuentas.initModel(sequelize);
    cuentas_cash_flow_1.cuentas_cash_flow.initModel(sequelize);
    cuentas_cruce_1.cuentas_cruce.initModel(sequelize);
    cuentas_disponibilidades_1.cuentas_disponibilidades.initModel(sequelize);
    cuentas_frecuentes_1.cuentas_frecuentes.initModel(sequelize);
    cuentas_ingenio_1.cuentas_ingenio.initModel(sequelize);
    cuentas_lotes_1.cuentas_lotes.initModel(sequelize);
    cuentas_predef_ganaderia_1.cuentas_predef_ganaderia.initModel(sequelize);
    cuentas_predefinidas_1.cuentas_predefinidas.initModel(sequelize);
    datawindows_1.datawindows.initModel(sequelize);
    datos_basicos1_1.datos_basicos1.initModel(sequelize);
    datos_basicos2_1.datos_basicos2.initModel(sequelize);
    datos_basicos3_1.datos_basicos3.initModel(sequelize);
    datos_basicos4_1.datos_basicos4.initModel(sequelize);
    datos_climaticos_1.datos_climaticos.initModel(sequelize);
    datos_climaticos_items_1.datos_climaticos_items.initModel(sequelize);
    depositos_1.depositos.initModel(sequelize);
    destino_precios_1.destino_precios.initModel(sequelize);
    //destinos.initModel(sequelize);
    destinos_campo_1.destinos_campo.initModel(sequelize);
    destinos_direcciones_1.destinos_direcciones.initModel(sequelize);
    //destinos_formulas.initModel(sequelize);
    destinos_stock_1.destinos_stock.initModel(sequelize);
    distanci_1.distanci.initModel(sequelize);
    ec_articulos_1.ec_articulos.initModel(sequelize);
    ec_articulos_imagenes_1.ec_articulos_imagenes.initModel(sequelize);
    ec_carrito_1.ec_carrito.initModel(sequelize);
    ec_categorias_ml_1.ec_categorias_ml.initModel(sequelize);
    ec_clientes_1.ec_clientes.initModel(sequelize);
    ec_config_1.ec_config.initModel(sequelize);
    ec_config_circuitos_1.ec_config_circuitos.initModel(sequelize);
    ec_config_parametros_1.ec_config_parametros.initModel(sequelize);
    ec_rubros_1.ec_rubros.initModel(sequelize);
    ec_subrubros_1.ec_subrubros.initModel(sequelize);
    ec_tipos_envios_1.ec_tipos_envios.initModel(sequelize);
    ec_ventas_1.ec_ventas.initModel(sequelize);
    ec_ventas_items_1.ec_ventas_items.initModel(sequelize);
    empresa_choferes_1.empresa_choferes.initModel(sequelize);
    empresas_1.empresas.initModel(sequelize);
    entidades_1.entidades.initModel(sequelize);
    equivalencias_packing_1.equivalencias_packing.initModel(sequelize);
    estab_actividad_1.estab_actividad.initModel(sequelize);
    estab_categoria_1.estab_categoria.initModel(sequelize);
    establecimiento_1.establecimiento.initModel(sequelize);
    establecimientos_depositos_1.establecimientos_depositos.initModel(sequelize);
    fac_elect_xempresa_1.fac_elect_xempresa.initModel(sequelize);
    figuras_1.figuras.initModel(sequelize);
    figuras_items_1.figuras_items.initModel(sequelize);
    filtro_animales_1.filtro_animales.initModel(sequelize);
    filtro_cania_1.filtro_cania.initModel(sequelize);
    filtro_citrus_1.filtro_citrus.initModel(sequelize);
    filtro_granos_1.filtro_granos.initModel(sequelize);
    filtro_labores_1.filtro_labores.initModel(sequelize);
    filtro_mov_per_1.filtro_mov_per.initModel(sequelize);
    filtro_orden_trabajo_1.filtro_orden_trabajo.initModel(sequelize);
    filtro_plantacion_1.filtro_plantacion.initModel(sequelize);
    filtro_stock_1.filtro_stock.initModel(sequelize);
    filtro_vales_1.filtro_vales.initModel(sequelize);
    finan_contratistas_1.finan_contratistas.initModel(sequelize);
    fmt_carta_porte_1.fmt_carta_porte.initModel(sequelize);
    //fmt_carta_porte_det.initModel(sequelize);
    formato_aplicativo_1.formato_aplicativo.initModel(sequelize);
    formulas_variables_1.formulas_variables.initModel(sequelize);
    generador_formula_1.generador_formula.initModel(sequelize);
    gest_identificador_1.gest_identificador.initModel(sequelize);
    gest_identificador_movimientos_1.gest_identificador_movimientos.initModel(sequelize);
    grafico_1.grafico.initModel(sequelize);
    grupo_animales_1.grupo_animales.initModel(sequelize);
    grupo_caracteristicas_1.grupo_caracteristicas.initModel(sequelize);
    //grupo_destino.initModel(sequelize);
    harroz_1.harroz.initModel(sequelize);
    havena_1.havena.initModel(sequelize);
    hcebada_1.hcebada.initModel(sequelize);
    hcenteno_1.hcenteno.initModel(sequelize);
    hchia_1.hchia.initModel(sequelize);
    hcolza_1.hcolza.initModel(sequelize);
    hgarbanzo_1.hgarbanzo.initModel(sequelize);
    hgirasol_1.hgirasol.initModel(sequelize);
    hist_peso_categoria_1.hist_peso_categoria.initModel(sequelize);
    hist_precio_categoria_1.hist_precio_categoria.initModel(sequelize);
    hlino_1.hlino.initModel(sequelize);
    hlupino_1.hlupino.initModel(sequelize);
    hmaiz_1.hmaiz.initModel(sequelize);
    hmani_1.hmani.initModel(sequelize);
    hmijo_1.hmijo.initModel(sequelize);
    hmoha_1.hmoha.initModel(sequelize);
    hoja_de_ruta_1.hoja_de_ruta.initModel(sequelize);
    hoja_de_ruta_items_1.hoja_de_ruta_items.initModel(sequelize);
    hoja_ruta_estado_1.hoja_ruta_estado.initModel(sequelize);
    hquinoa_1.hquinoa.initModel(sequelize);
    hsoja_1.hsoja.initModel(sequelize);
    hsorgo_1.hsorgo.initModel(sequelize);
    htrigo_1.htrigo.initModel(sequelize);
    htriticale_1.htriticale.initModel(sequelize);
    hviciavillosa_1.hviciavillosa.initModel(sequelize);
    identificador_1.identificador.initModel(sequelize);
    identificador_campo_1.identificador_campo.initModel(sequelize);
    im_usuarios_1.im_usuarios.initModel(sequelize);
    importacion_declaracion_1.importacion_declaracion.initModel(sequelize);
    importacion_items_1.importacion_items.initModel(sequelize);
    impresoras_1.impresoras.initModel(sequelize);
    impresoras_fiscales_1.impresoras_fiscales.initModel(sequelize);
    impuestos_1.impuestos.initModel(sequelize);
    impuestos_cabecera_1.impuestos_cabecera.initModel(sequelize);
    impuestotercero_1.impuestotercero.initModel(sequelize);
    impuestotercero_items_1.impuestotercero_items.initModel(sequelize);
    indice_de_precios_1.indice_de_precios.initModel(sequelize);
    inseminacion_1.inseminacion.initModel(sequelize);
    insumos_ordenes_trabajo_1.insumos_ordenes_trabajo.initModel(sequelize);
    items_cruces_1.items_cruces.initModel(sequelize);
    items_facturas_cpos_1.items_facturas_cpos.initModel(sequelize);
    l_margen_bruto_1.l_margen_bruto.initModel(sequelize);
    labores_1.labores.initModel(sequelize);
    labores_insumos_1.labores_insumos.initModel(sequelize);
    labores_log_externo_1.labores_log_externo.initModel(sequelize);
    labores_mant_tareas_1.labores_mant_tareas.initModel(sequelize);
    labores_maquinarias_1.labores_maquinarias.initModel(sequelize);
    labores_personal_1.labores_personal.initModel(sequelize);
    lista_precios_1.lista_precios.initModel(sequelize);
    lluvias_1.lluvias.initModel(sequelize);
    localidad_1.localidad.initModel(sequelize);
    lote_actividad_1.lote_actividad.initModel(sequelize);
    lote_actividad_up_1.lote_actividad_up.initModel(sequelize);
    lotes_1.lotes.initModel(sequelize);
    lotes_coordenadas_1.lotes_coordenadas.initModel(sequelize);
    lotes_unidad_productiva_1.lotes_unidad_productiva.initModel(sequelize);
    maquinar_1.maquinar.initModel(sequelize);
    maquinas_mant_1.maquinas_mant.initModel(sequelize);
    maquinas_mant_insumos_1.maquinas_mant_insumos.initModel(sequelize);
    maquinas_mant_tareas_1.maquinas_mant_tareas.initModel(sequelize);
    mod_insu_1.mod_insu.initModel(sequelize);
    mod_tare_1.mod_tare.initModel(sequelize);
    mod_tareas_personal_1.mod_tareas_personal.initModel(sequelize);
    mod_tareas_riego_1.mod_tareas_riego.initModel(sequelize);
    modelos_1.modelos.initModel(sequelize);
    moneda_1.moneda.initModel(sequelize);
    movimientos_1.movimientos.initModel(sequelize);
    movimientos_maquinaria_1.movimientos_maquinaria.initModel(sequelize);
    nota_pedido_1.nota_pedido.initModel(sequelize);
    nota_pedido_insumos_1.nota_pedido_insumos.initModel(sequelize);
    nov_animales_1.nov_animales.initModel(sequelize);
    novedades_1.novedades.initModel(sequelize);
    orden_compra_1.orden_compra.initModel(sequelize);
    orden_compra_centros_costo_1.orden_compra_centros_costo.initModel(sequelize);
    orden_compra_insumos_1.orden_compra_insumos.initModel(sequelize);
    orden_de_compra_1.orden_de_compra.initModel(sequelize);
    orden_de_compra_items_1.orden_de_compra_items.initModel(sequelize);
    ordenes_sql_1.ordenes_sql.initModel(sequelize);
    ordentrabajo_1.ordentrabajo.initModel(sequelize);
    ordentrabajo_insumos_1.ordentrabajo_insumos.initModel(sequelize);
    ordentrabajo_maquinarias_1.ordentrabajo_maquinarias.initModel(sequelize);
    ordentrabajo_personal_1.ordentrabajo_personal.initModel(sequelize);
    origen_1.origen.initModel(sequelize);
    pais_1.pais.initModel(sequelize);
    //pbcatcol.initModel(sequelize);
    //pbcatedt.initModel(sequelize);
    //pbcatfmt.initModel(sequelize);
    //pbcattbl.initModel(sequelize);
    //pbcatvld.initModel(sequelize);
    pcuentas_1.pcuentas.initModel(sequelize);
    pcuentas_modelo_1.pcuentas_modelo.initModel(sequelize);
    periodos_1.periodos.initModel(sequelize);
    permisos_1.permisos.initModel(sequelize);
    personal_1.personal.initModel(sequelize);
    personal_tareas_1.personal_tareas.initModel(sequelize);
    pid_cruce_factura_remito_1.pid_cruce_factura_remito.initModel(sequelize);
    pid_equivalencia_insumo_1.pid_equivalencia_insumo.initModel(sequelize);
    pid_equivalencia_proveedor_1.pid_equivalencia_proveedor.initModel(sequelize);
    pla_comercializacion_1.pla_comercializacion.initModel(sequelize);
    pla_contratistas_1.pla_contratistas.initModel(sequelize);
    pla_contratistas_items_1.pla_contratistas_items.initModel(sequelize);
    pla_egresos_actividad_1.pla_egresos_actividad.initModel(sequelize);
    pla_egresos_actividad_items_1.pla_egresos_actividad_items.initModel(sequelize);
    pla_financiero_ctas_1.pla_financiero_ctas.initModel(sequelize);
    pla_financiero_ctas_items_1.pla_financiero_ctas_items.initModel(sequelize);
    pla_insu_1.pla_insu.initModel(sequelize);
    pla_insumos_1.pla_insumos.initModel(sequelize);
    pla_insumos_items_1.pla_insumos_items.initModel(sequelize);
    pla_lotes_1.pla_lotes.initModel(sequelize);
    pla_lotes_tareas_1.pla_lotes_tareas.initModel(sequelize);
    pla_lotes_tareas_insumos_1.pla_lotes_tareas_insumos.initModel(sequelize);
    pla_lotes_tareas_riego_1.pla_lotes_tareas_riego.initModel(sequelize);
    pla_modelos_1.pla_modelos.initModel(sequelize);
    pla_modelos_tareas_1.pla_modelos_tareas.initModel(sequelize);
    pla_modelos_tareas_insumos_1.pla_modelos_tareas_insumos.initModel(sequelize);
    pla_modelos_tareas_riego_1.pla_modelos_tareas_riego.initModel(sequelize);
    pla_tare_1.pla_tare.initModel(sequelize);
    pla_tareas_1.pla_tareas.initModel(sequelize);
    pla_tareas_items_1.pla_tareas_items.initModel(sequelize);
    pla_tareas_personal_1.pla_tareas_personal.initModel(sequelize);
    pla_tareas_riego_1.pla_tareas_riego.initModel(sequelize);
    pla_ventas_produccion_1.pla_ventas_produccion.initModel(sequelize);
    pla_ventas_produccion_items_1.pla_ventas_produccion_items.initModel(sequelize);
    plan_1.plan.initModel(sequelize);
    planeamiento_lotes_1.planeamiento_lotes.initModel(sequelize);
    plani_lluvias_1.plani_lluvias.initModel(sequelize);
    presupuesto_1.presupuesto.initModel(sequelize);
    presupuestos_1.presupuestos.initModel(sequelize);
    produccion_1.produccion.initModel(sequelize);
    produccion_cania_1.produccion_cania.initModel(sequelize);
    produccion_citrus_1.produccion_citrus.initModel(sequelize);
    produccion_olivo_1.produccion_olivo.initModel(sequelize);
    //producto_rubro.initModel(sequelize);
    //producto_subrubro.initModel(sequelize);
    promocion_empresa_1.promocion_empresa.initModel(sequelize);
    promociones_1.promociones.initModel(sequelize);
    promociones_plan_1.promociones_plan.initModel(sequelize);
    promociones_plan_empresas_1.promociones_plan_empresas.initModel(sequelize);
    proveedor_impuestos_1.proveedor_impuestos.initModel(sequelize);
    proveedores_1.proveedores.initModel(sequelize);
    proveedores_pagos_1.proveedores_pagos.initModel(sequelize);
    proveedores_precios_articulos_1.proveedores_precios_articulos.initModel(sequelize);
    provincia_1.provincia.initModel(sequelize);
    puntos_articulos_1.puntos_articulos.initModel(sequelize);
    puntos_clientes_1.puntos_clientes.initModel(sequelize);
    puntos_config_1.puntos_config.initModel(sequelize);
    puntos_de_reposicion_1.puntos_de_reposicion.initModel(sequelize);
    puntos_de_venta_1.puntos_de_venta.initModel(sequelize);
    puntos_de_venta_usuarios_1.puntos_de_venta_usuarios.initModel(sequelize);
    puntos_empresas_1.puntos_empresas.initModel(sequelize);
    puntos_x_venta_1.puntos_x_venta.initModel(sequelize);
    raza_1.raza.initModel(sequelize);
    registros_borrados_1.registros_borrados.initModel(sequelize);
    remitos_campo_1.remitos_campo.initModel(sequelize);
    rendicion_1.rendicion.initModel(sequelize);
    rendicion_items_1.rendicion_items.initModel(sequelize);
    rodeo_1.rodeo.initModel(sequelize);
    rubros_1.rubros.initModel(sequelize);
    rubros_clientes_1.rubros_clientes.initModel(sequelize);
    rubros_iva_1.rubros_iva.initModel(sequelize);
    sanidad_1.sanidad.initModel(sequelize);
    secuencia_1.secuencia.initModel(sequelize);
    stock_1.stock.initModel(sequelize);
    stock_campo_1.stock_campo.initModel(sequelize);
    stock_header_1.stock_header.initModel(sequelize);
    stock_item_1.stock_item.initModel(sequelize);
    stockheader_estados_1.stockheader_estados.initModel(sequelize);
    stockheader_movimientos_1.stockheader_movimientos.initModel(sequelize);
    subrubros_1.subrubros.initModel(sequelize);
    superficie_ganadera_1.superficie_ganadera.initModel(sequelize);
    t_ctacte_marca_saldos_1.t_ctacte_marca_saldos.initModel(sequelize);
    t_empresas_servicios_1.t_empresas_servicios.initModel(sequelize);
    t_inf_saldos_hist_1.t_inf_saldos_hist.initModel(sequelize);
    t_log_1.t_log.initModel(sequelize);
    t_pcuentas_establecimientos_1.t_pcuentas_establecimientos.initModel(sequelize);
    t_proveedores_marca_saldos_1.t_proveedores_marca_saldos.initModel(sequelize);
    tablas_1.tablas.initModel(sequelize);
    tarea_concepto_1.tarea_concepto.initModel(sequelize);
    tareas_1.tareas.initModel(sequelize);
    tareas_precios_1.tareas_precios.initModel(sequelize);
    tareas_seguridad_1.tareas_seguridad.initModel(sequelize);
    tarjetas_1.tarjetas.initModel(sequelize);
    tarjetas_plan_1.tarjetas_plan.initModel(sequelize);
    tarjetas_plan_empresas_1.tarjetas_plan_empresas.initModel(sequelize);
    testing_1.testing.initModel(sequelize);
    ticket_comprobante_1.ticket_comprobante.initModel(sequelize);
    tipo_destino_1.tipo_destino.initModel(sequelize);
    tipo_impuesto_1.tipo_impuesto.initModel(sequelize);
    tipo_mov_1.tipo_mov.initModel(sequelize);
    tipo_servicio_ganaderia_1.tipo_servicio_ganaderia.initModel(sequelize);
    tipo_ticket_1.tipo_ticket.initModel(sequelize);
    tipos_dinero_1.tipos_dinero.initModel(sequelize);
    tipos_documentos_1.tipos_documentos.initModel(sequelize);
    tipos_documentos_py_1.tipos_documentos_py.initModel(sequelize);
    tmp_articulos_c_1.tmp_articulos_c.initModel(sequelize);
    tmp_libro_mayor_1.tmp_libro_mayor.initModel(sequelize);
    tmp_resultado_x_un_1.tmp_resultado_x_un.initModel(sequelize);
    transformacion_1.transformacion.initModel(sequelize);
    transformacion_items_1.transformacion_items.initModel(sequelize);
    transporte_1.transporte.initModel(sequelize);
    tt_actividades_1.tt_actividades.initModel(sequelize);
    //tt_admstrgest.initModel(sequelize);
    //tt_admstrgest_aux.initModel(sequelize);
    //tt_admstrmen.initModel(sequelize);
    //tt_admstrmen_aux.initModel(sequelize);
    tt_animales_1.tt_animales.initModel(sequelize);
    tt_anticiposvscancel_1.tt_anticiposvscancel.initModel(sequelize);
    tt_articulos_1.tt_articulos.initModel(sequelize);
    //tt_articulos_existencia.initModel(sequelize);
    tt_articulos_precios_aux_1.tt_articulos_precios_aux.initModel(sequelize);
    tt_balance_1.tt_balance.initModel(sequelize);
    //tt_balance_paso.initModel(sequelize);
    tt_balance_temp_1.tt_balance_temp.initModel(sequelize);
    //tt_cab_admstrmen.initModel(sequelize);
    tt_cashflow_aux1_1.tt_cashflow_aux1.initModel(sequelize);
    tt_cheques_1.tt_cheques.initModel(sequelize);
    tt_cheques_salidos_1.tt_cheques_salidos.initModel(sequelize);
    tt_clientes_1.tt_clientes.initModel(sequelize);
    tt_clientes_ctacte_saldos_1.tt_clientes_ctacte_saldos.initModel(sequelize);
    tt_clientes_ctacte_saldos_aux_1.tt_clientes_ctacte_saldos_aux.initModel(sequelize);
    tt_clientes_saldos_aux_1.tt_clientes_saldos_aux.initModel(sequelize);
    tt_comp_numero_1.tt_comp_numero.initModel(sequelize);
    tt_comprobantes_pendientes_1.tt_comprobantes_pendientes.initModel(sequelize);
    tt_cons_stock_1.tt_cons_stock.initModel(sequelize);
    tt_cons_stock_aux_1.tt_cons_stock_aux.initModel(sequelize);
    tt_cosecha_1.tt_cosecha.initModel(sequelize);
    tt_cotizacion_1.tt_cotizacion.initModel(sequelize);
    tt_cpro_aux_1.tt_cpro_aux.initModel(sequelize);
    tt_ctas_aux_1.tt_ctas_aux.initModel(sequelize);
    //tt_ctrl_cosecha.initModel(sequelize);
    //tt_ctrl_cosecha_aux.initModel(sequelize);
    tt_cuentas_1.tt_cuentas.initModel(sequelize);
    //tt_cuentas_cashflow.initModel(sequelize);
    tt_cuentas_disponibilidades_saldos_1.tt_cuentas_disponibilidades_saldos.initModel(sequelize);
    tt_cuentas_disponibilidades_saldos_aux_1.tt_cuentas_disponibilidades_saldos_aux.initModel(sequelize);
    tt_cuentas_nivel_1.tt_cuentas_nivel.initModel(sequelize);
    tt_cuentas_saldos_1.tt_cuentas_saldos.initModel(sequelize);
    tt_cuentas_saldos_aux_1.tt_cuentas_saldos_aux.initModel(sequelize);
    tt_debug_1.tt_debug.initModel(sequelize);
    tt_deposito_1.tt_deposito.initModel(sequelize);
    tt_empresa_1.tt_empresa.initModel(sequelize);
    tt_empresas_servicios_1.tt_empresas_servicios.initModel(sequelize);
    tt_establecimientos_1.tt_establecimientos.initModel(sequelize);
    tt_existencias_stock_1.tt_existencias_stock.initModel(sequelize);
    //tt_fechas_cashflow.initModel(sequelize);
    tt_fiscal_1.tt_fiscal.initModel(sequelize);
    tt_import_archivo_ingenio_1.tt_import_archivo_ingenio.initModel(sequelize);
    //tt_inf_provcontflet.initModel(sequelize);
    //tt_inf_provcontflet_aux.initModel(sequelize);
    tt_inventario_1.tt_inventario.initModel(sequelize);
    tt_inventario_animales_1.tt_inventario_animales.initModel(sequelize);
    tt_invganadero_1.tt_invganadero.initModel(sequelize);
    tt_invganadero_aux_1.tt_invganadero_aux.initModel(sequelize);
    tt_log_1.tt_log.initModel(sequelize);
    tt_lote_actividad_1.tt_lote_actividad.initModel(sequelize);
    tt_nov_animales_1.tt_nov_animales.initModel(sequelize);
    tt_nov_insumos_1.tt_nov_insumos.initModel(sequelize);
    tt_novedades_1.tt_novedades.initModel(sequelize);
    tt_parametros_1.tt_parametros.initModel(sequelize);
    tt_periodos_1.tt_periodos.initModel(sequelize);
    tt_pla_insumos_1.tt_pla_insumos.initModel(sequelize);
    tt_plapaggral_1.tt_plapaggral.initModel(sequelize);
    tt_plapaggral_aux_1.tt_plapaggral_aux.initModel(sequelize);
    tt_proveedor_cliente_1.tt_proveedor_cliente.initModel(sequelize);
    tt_proveedores_1.tt_proveedores.initModel(sequelize);
    tt_proveedores_ctacte_saldos_1.tt_proveedores_ctacte_saldos.initModel(sequelize);
    tt_proveedores_ctacte_saldos_aux_1.tt_proveedores_ctacte_saldos_aux.initModel(sequelize);
    tt_proveedores_saldos_aux_1.tt_proveedores_saldos_aux.initModel(sequelize);
    //tt_renumera.initModel(sequelize);
    tt_res_emp_servicios_1.tt_res_emp_servicios.initModel(sequelize);
    tt_res_emp_servicios_aux_1.tt_res_emp_servicios_aux.initModel(sequelize);
    tt_resultado_actividades_1.tt_resultado_actividades.initModel(sequelize);
    tt_resultado_actividades_aux_1.tt_resultado_actividades_aux.initModel(sequelize);
    tt_sql_1.tt_sql.initModel(sequelize);
    tt_stock_paso_1.tt_stock_paso.initModel(sequelize);
    tt_tesoreria_1.tt_tesoreria.initModel(sequelize);
    //tt_tesoreria_aux.initModel(sequelize);
    tt_tesoreria_caso1_1.tt_tesoreria_caso1.initModel(sequelize);
    tt_tesoreria_retenciones_1.tt_tesoreria_retenciones.initModel(sequelize);
    //tt_tipo_comprobante.initModel(sequelize);
    tt_unidad_negocio_1.tt_unidad_negocio.initModel(sequelize);
    tt_up_1.tt_up.initModel(sequelize);
    tt_usuarios_seleccion_1.tt_usuarios_seleccion.initModel(sequelize);
    tt_volcado_impuestos_1.tt_volcado_impuestos.initModel(sequelize);
    turnos_1.turnos.initModel(sequelize);
    unidad_de_medida_1.unidad_de_medida.initModel(sequelize);
    unidad_negocio_1.unidad_negocio.initModel(sequelize);
    unidad_productiva_1.unidad_productiva.initModel(sequelize);
    unidades_1.unidades.initModel(sequelize);
    usuarios_1.usuarios.initModel(sequelize);
    usuarios_campo_1.usuarios_campo.initModel(sequelize);
    usuarios_depositos_1.usuarios_depositos.initModel(sequelize);
    usuarios_permisos_1.usuarios_permisos.initModel(sequelize);
    usuarios_tareas_1.usuarios_tareas.initModel(sequelize);
    vendedores_1.vendedores.initModel(sequelize);
    ventas_1.ventas.initModel(sequelize);
    ventas_cert_deposito_1.ventas_cert_deposito.initModel(sequelize);
    ventas_facturas_1.ventas_facturas.initModel(sequelize);
    ventas_items_1.ventas_items.initModel(sequelize);
    ventas_items_serie_1.ventas_items_serie.initModel(sequelize);
    ventas_medio_de_pago_1.ventas_medio_de_pago.initModel(sequelize);
    ventas_pagos_1.ventas_pagos.initModel(sequelize);
    ventas_produccion_1.ventas_produccion.initModel(sequelize);
    ventas_remitos_facturas_1.ventas_remitos_facturas.initModel(sequelize);
    ventas_retenciones_1.ventas_retenciones.initModel(sequelize);
    ventas_transporte_1.ventas_transporte.initModel(sequelize);
    ventas_unidad_item_1.ventas_unidad_item.initModel(sequelize);
    ventas_vencimientos_1.ventas_vencimientos.initModel(sequelize);
    volcada_1.volcada.initModel(sequelize);
    webservice_1.webservice.initModel(sequelize);
    webservice_afip_1.webservice_afip.initModel(sequelize);
    return {
        act_categoria: act_categoria_1.act_categoria,
        actividad: actividad_1.actividad,
        actividad_periodo: actividad_periodo_1.actividad_periodo,
        actividades_campo: actividades_campo_1.actividades_campo,
        actualizacion: actualizacion_1.actualizacion,
        actualizacion_dolar: actualizacion_dolar_1.actualizacion_dolar,
        actualizacion_utas: actualizacion_utas_1.actualizacion_utas,
        afip_comprobantes: afip_comprobantes_1.afip_comprobantes,
        afip_comprobantes_codigos: afip_comprobantes_codigos_1.afip_comprobantes_codigos,
        afip_conceptos: afip_conceptos_1.afip_conceptos,
        afip_cosechas: afip_cosechas_1.afip_cosechas,
        afip_cuitdest: afip_cuitdest_1.afip_cuitdest,
        afip_especies: afip_especies_1.afip_especies,
        afip_idiomas: afip_idiomas_1.afip_idiomas,
        afip_incoterms: afip_incoterms_1.afip_incoterms,
        afip_localidades: afip_localidades_1.afip_localidades,
        afip_monedas: afip_monedas_1.afip_monedas,
        afip_nomenclador: afip_nomenclador_1.afip_nomenclador,
        afip_paises: afip_paises_1.afip_paises,
        afip_provincias: afip_provincias_1.afip_provincias,
        afip_puntos_ventas: afip_puntos_ventas_1.afip_puntos_ventas,
        afip_texportacion: afip_texportacion_1.afip_texportacion,
        afip_tipos_datos_opcional: afip_tipos_datos_opcional_1.afip_tipos_datos_opcional,
        afip_tipos_documentos: afip_tipos_documentos_1.afip_tipos_documentos,
        afip_tipos_iva: afip_tipos_iva_1.afip_tipos_iva,
        afip_tipos_tributos: afip_tipos_tributos_1.afip_tipos_tributos,
        afip_unimed: afip_unimed_1.afip_unimed,
        ajustes: ajustes_1.ajustes,
        amortizaciones: amortizaciones_1.amortizaciones,
        animales: animales_1.animales,
        animales_estados: animales_estados_1.animales_estados,
        aplicaciones: aplicaciones_1.aplicaciones,
        arch_importados: arch_importados_1.arch_importados,
        //archivo_arba: archivo_arba,
        articulo_equiv_unidades: articulo_equiv_unidades_1.articulo_equiv_unidades,
        articulos: articulos_1.articulos,
        articulos_caracteristicas: articulos_caracteristicas_1.articulos_caracteristicas,
        articulos_caracteristicas_valores: articulos_caracteristicas_valores_1.articulos_caracteristicas_valores,
        articulos_serie: articulos_serie_1.articulos_serie,
        articulos_tags: articulos_tags_1.articulos_tags,
        articulos_transformacion: articulos_transformacion_1.articulos_transformacion,
        articulos_unidad_medida: articulos_unidad_medida_1.articulos_unidad_medida,
        asientos: asientos_1.asientos,
        asientos_items: asientos_items_1.asientos_items,
        asientos_iva: asientos_iva_1.asientos_iva,
        asignar_rubros: asignar_rubros_1.asignar_rubros,
        //atributo: atributo,
        atributos_de_precios: atributos_de_precios_1.atributos_de_precios,
        bancos: bancos_1.bancos,
        bases_contables: bases_contables_1.bases_contables,
        basicos: basicos_1.basicos,
        borrados: borrados_1.borrados,
        cab_lista_precio: cab_lista_precio_1.cab_lista_precio,
        cajas: cajas_1.cajas,
        cania_peladores: cania_peladores_1.cania_peladores,
        //carta_porte: carta_porte,
        //carta_porte_det: carta_porte_det,
        categoria: categoria_1.categoria,
        categoria_aplicativos: categoria_aplicativos_1.categoria_aplicativos,
        categoria_iva: categoria_iva_1.categoria_iva,
        chequeras: chequeras_1.chequeras,
        cierres_fiscales: cierres_fiscales_1.cierres_fiscales,
        clientes: clientes_1.clientes,
        clientes2: clientes2_1.clientes2,
        clientes_acuerdos: clientes_acuerdos_1.clientes_acuerdos,
        clientes_destinos: clientes_destinos_1.clientes_destinos,
        clientes_domicilios: clientes_domicilios_1.clientes_domicilios,
        clientes_impuestos: clientes_impuestos_1.clientes_impuestos,
        clientes_pagos: clientes_pagos_1.clientes_pagos,
        clientes_seguimiento: clientes_seguimiento_1.clientes_seguimiento,
        colores: colores_1.colores,
        comision_x_vendedor: comision_x_vendedor_1.comision_x_vendedor,
        compras: compras_1.compras,
        compras_comprob_ingresos_bruto: compras_comprob_ingresos_bruto_1.compras_comprob_ingresos_bruto,
        compras_comprob_retencion: compras_comprob_retencion_1.compras_comprob_retencion,
        compras_facturas: compras_facturas_1.compras_facturas,
        compras_items: compras_items_1.compras_items,
        //compras_items_remitos: compras_items_remitos,
        compras_labores: compras_labores_1.compras_labores,
        compras_pagos: compras_pagos_1.compras_pagos,
        compras_produccion: compras_produccion_1.compras_produccion,
        compras_remitos: compras_remitos_1.compras_remitos,
        compras_retenciones: compras_retenciones_1.compras_retenciones,
        compras_retenciones_detalle: compras_retenciones_detalle_1.compras_retenciones_detalle,
        compras_stock_items: compras_stock_items_1.compras_stock_items,
        compras_vencimientos: compras_vencimientos_1.compras_vencimientos,
        comprobantes_destino: comprobantes_destino_1.comprobantes_destino,
        comprobantes_formatos: comprobantes_formatos_1.comprobantes_formatos,
        comprobantes_formatos_default: comprobantes_formatos_default_1.comprobantes_formatos_default,
        comprobantes_relacion: comprobantes_relacion_1.comprobantes_relacion,
        //conceptos: conceptos,
        condicion_venta_tipo: condicion_venta_tipo_1.condicion_venta_tipo,
        conf_colores_deudas: conf_colores_deudas_1.conf_colores_deudas,
        conf_ejercicio_economico: conf_ejercicio_economico_1.conf_ejercicio_economico,
        config: config_1.config,
        config_app: config_app_1.config_app,
        config_campo: config_campo_1.config_campo,
        config_circuitos: config_circuitos_1.config_circuitos,
        config_importacion: config_importacion_1.config_importacion,
        config_iva: config_iva_1.config_iva,
        config_parametros: config_parametros_1.config_parametros,
        config_redondeos: config_redondeos_1.config_redondeos,
        config_volcado_impuestos: config_volcado_impuestos_1.config_volcado_impuestos,
        configuracion_libro_iva: configuracion_libro_iva_1.configuracion_libro_iva,
        //contratos: contratos,
        coordenadas: coordenadas_1.coordenadas,
        cotizacion: cotizacion_1.cotizacion,
        cta_cble_grupo: cta_cble_grupo_1.cta_cble_grupo,
        cta_cble_grupo_item: cta_cble_grupo_item_1.cta_cble_grupo_item,
        cuadrillas: cuadrillas_1.cuadrillas,
        cuentas: cuentas_1.cuentas,
        cuentas_cash_flow: cuentas_cash_flow_1.cuentas_cash_flow,
        cuentas_cruce: cuentas_cruce_1.cuentas_cruce,
        cuentas_disponibilidades: cuentas_disponibilidades_1.cuentas_disponibilidades,
        cuentas_frecuentes: cuentas_frecuentes_1.cuentas_frecuentes,
        cuentas_ingenio: cuentas_ingenio_1.cuentas_ingenio,
        cuentas_lotes: cuentas_lotes_1.cuentas_lotes,
        cuentas_predef_ganaderia: cuentas_predef_ganaderia_1.cuentas_predef_ganaderia,
        cuentas_predefinidas: cuentas_predefinidas_1.cuentas_predefinidas,
        datawindows: datawindows_1.datawindows,
        datos_basicos1: datos_basicos1_1.datos_basicos1,
        datos_basicos2: datos_basicos2_1.datos_basicos2,
        datos_basicos3: datos_basicos3_1.datos_basicos3,
        datos_basicos4: datos_basicos4_1.datos_basicos4,
        datos_climaticos: datos_climaticos_1.datos_climaticos,
        datos_climaticos_items: datos_climaticos_items_1.datos_climaticos_items,
        depositos: depositos_1.depositos,
        destino_precios: destino_precios_1.destino_precios,
        //destinos: destinos,
        destinos_campo: destinos_campo_1.destinos_campo,
        destinos_direcciones: destinos_direcciones_1.destinos_direcciones,
        //destinos_formulas: destinos_formulas,
        destinos_stock: destinos_stock_1.destinos_stock,
        distanci: distanci_1.distanci,
        ec_articulos: ec_articulos_1.ec_articulos,
        ec_articulos_imagenes: ec_articulos_imagenes_1.ec_articulos_imagenes,
        ec_carrito: ec_carrito_1.ec_carrito,
        ec_categorias_ml: ec_categorias_ml_1.ec_categorias_ml,
        ec_clientes: ec_clientes_1.ec_clientes,
        ec_config: ec_config_1.ec_config,
        ec_config_circuitos: ec_config_circuitos_1.ec_config_circuitos,
        ec_config_parametros: ec_config_parametros_1.ec_config_parametros,
        ec_rubros: ec_rubros_1.ec_rubros,
        ec_subrubros: ec_subrubros_1.ec_subrubros,
        ec_tipos_envios: ec_tipos_envios_1.ec_tipos_envios,
        ec_ventas: ec_ventas_1.ec_ventas,
        ec_ventas_items: ec_ventas_items_1.ec_ventas_items,
        empresa_choferes: empresa_choferes_1.empresa_choferes,
        empresas: empresas_1.empresas,
        entidades: entidades_1.entidades,
        equivalencias_packing: equivalencias_packing_1.equivalencias_packing,
        estab_actividad: estab_actividad_1.estab_actividad,
        estab_categoria: estab_categoria_1.estab_categoria,
        establecimiento: establecimiento_1.establecimiento,
        establecimientos_depositos: establecimientos_depositos_1.establecimientos_depositos,
        fac_elect_xempresa: fac_elect_xempresa_1.fac_elect_xempresa,
        figuras: figuras_1.figuras,
        figuras_items: figuras_items_1.figuras_items,
        filtro_animales: filtro_animales_1.filtro_animales,
        filtro_cania: filtro_cania_1.filtro_cania,
        filtro_citrus: filtro_citrus_1.filtro_citrus,
        filtro_granos: filtro_granos_1.filtro_granos,
        filtro_labores: filtro_labores_1.filtro_labores,
        filtro_mov_per: filtro_mov_per_1.filtro_mov_per,
        filtro_orden_trabajo: filtro_orden_trabajo_1.filtro_orden_trabajo,
        filtro_plantacion: filtro_plantacion_1.filtro_plantacion,
        filtro_stock: filtro_stock_1.filtro_stock,
        filtro_vales: filtro_vales_1.filtro_vales,
        finan_contratistas: finan_contratistas_1.finan_contratistas,
        fmt_carta_porte: fmt_carta_porte_1.fmt_carta_porte,
        //fmt_carta_porte_det: fmt_carta_porte_det,
        formato_aplicativo: formato_aplicativo_1.formato_aplicativo,
        formulas_variables: formulas_variables_1.formulas_variables,
        generador_formula: generador_formula_1.generador_formula,
        gest_identificador: gest_identificador_1.gest_identificador,
        gest_identificador_movimientos: gest_identificador_movimientos_1.gest_identificador_movimientos,
        grafico: grafico_1.grafico,
        grupo_animales: grupo_animales_1.grupo_animales,
        grupo_caracteristicas: grupo_caracteristicas_1.grupo_caracteristicas,
        //grupo_destino: grupo_destino,
        harroz: harroz_1.harroz,
        havena: havena_1.havena,
        hcebada: hcebada_1.hcebada,
        hcenteno: hcenteno_1.hcenteno,
        hchia: hchia_1.hchia,
        hcolza: hcolza_1.hcolza,
        hgarbanzo: hgarbanzo_1.hgarbanzo,
        hgirasol: hgirasol_1.hgirasol,
        hist_peso_categoria: hist_peso_categoria_1.hist_peso_categoria,
        hist_precio_categoria: hist_precio_categoria_1.hist_precio_categoria,
        hlino: hlino_1.hlino,
        hlupino: hlupino_1.hlupino,
        hmaiz: hmaiz_1.hmaiz,
        hmani: hmani_1.hmani,
        hmijo: hmijo_1.hmijo,
        hmoha: hmoha_1.hmoha,
        hoja_de_ruta: hoja_de_ruta_1.hoja_de_ruta,
        hoja_de_ruta_items: hoja_de_ruta_items_1.hoja_de_ruta_items,
        hoja_ruta_estado: hoja_ruta_estado_1.hoja_ruta_estado,
        hquinoa: hquinoa_1.hquinoa,
        hsoja: hsoja_1.hsoja,
        hsorgo: hsorgo_1.hsorgo,
        htrigo: htrigo_1.htrigo,
        htriticale: htriticale_1.htriticale,
        hviciavillosa: hviciavillosa_1.hviciavillosa,
        identificador: identificador_1.identificador,
        identificador_campo: identificador_campo_1.identificador_campo,
        im_usuarios: im_usuarios_1.im_usuarios,
        importacion_declaracion: importacion_declaracion_1.importacion_declaracion,
        importacion_items: importacion_items_1.importacion_items,
        impresoras: impresoras_1.impresoras,
        impresoras_fiscales: impresoras_fiscales_1.impresoras_fiscales,
        impuestos: impuestos_1.impuestos,
        impuestos_cabecera: impuestos_cabecera_1.impuestos_cabecera,
        impuestotercero: impuestotercero_1.impuestotercero,
        impuestotercero_items: impuestotercero_items_1.impuestotercero_items,
        indice_de_precios: indice_de_precios_1.indice_de_precios,
        inseminacion: inseminacion_1.inseminacion,
        insumos_ordenes_trabajo: insumos_ordenes_trabajo_1.insumos_ordenes_trabajo,
        items_cruces: items_cruces_1.items_cruces,
        items_facturas_cpos: items_facturas_cpos_1.items_facturas_cpos,
        l_margen_bruto: l_margen_bruto_1.l_margen_bruto,
        labores: labores_1.labores,
        labores_insumos: labores_insumos_1.labores_insumos,
        labores_log_externo: labores_log_externo_1.labores_log_externo,
        labores_mant_tareas: labores_mant_tareas_1.labores_mant_tareas,
        labores_maquinarias: labores_maquinarias_1.labores_maquinarias,
        labores_personal: labores_personal_1.labores_personal,
        lista_precios: lista_precios_1.lista_precios,
        lluvias: lluvias_1.lluvias,
        localidad: localidad_1.localidad,
        lote_actividad: lote_actividad_1.lote_actividad,
        lote_actividad_up: lote_actividad_up_1.lote_actividad_up,
        lotes: lotes_1.lotes,
        lotes_coordenadas: lotes_coordenadas_1.lotes_coordenadas,
        lotes_unidad_productiva: lotes_unidad_productiva_1.lotes_unidad_productiva,
        maquinar: maquinar_1.maquinar,
        maquinas_mant: maquinas_mant_1.maquinas_mant,
        maquinas_mant_insumos: maquinas_mant_insumos_1.maquinas_mant_insumos,
        maquinas_mant_tareas: maquinas_mant_tareas_1.maquinas_mant_tareas,
        mod_insu: mod_insu_1.mod_insu,
        mod_tare: mod_tare_1.mod_tare,
        mod_tareas_personal: mod_tareas_personal_1.mod_tareas_personal,
        mod_tareas_riego: mod_tareas_riego_1.mod_tareas_riego,
        modelos: modelos_1.modelos,
        moneda: moneda_1.moneda,
        movimientos: movimientos_1.movimientos,
        movimientos_maquinaria: movimientos_maquinaria_1.movimientos_maquinaria,
        nota_pedido: nota_pedido_1.nota_pedido,
        nota_pedido_insumos: nota_pedido_insumos_1.nota_pedido_insumos,
        nov_animales: nov_animales_1.nov_animales,
        novedades: novedades_1.novedades,
        orden_compra: orden_compra_1.orden_compra,
        orden_compra_centros_costo: orden_compra_centros_costo_1.orden_compra_centros_costo,
        orden_compra_insumos: orden_compra_insumos_1.orden_compra_insumos,
        orden_de_compra: orden_de_compra_1.orden_de_compra,
        orden_de_compra_items: orden_de_compra_items_1.orden_de_compra_items,
        ordenes_sql: ordenes_sql_1.ordenes_sql,
        ordentrabajo: ordentrabajo_1.ordentrabajo,
        ordentrabajo_insumos: ordentrabajo_insumos_1.ordentrabajo_insumos,
        ordentrabajo_maquinarias: ordentrabajo_maquinarias_1.ordentrabajo_maquinarias,
        ordentrabajo_personal: ordentrabajo_personal_1.ordentrabajo_personal,
        origen: origen_1.origen,
        pais: pais_1.pais,
        //pbcatcol: pbcatcol,
        //pbcatedt: pbcatedt,
        //pbcatfmt: pbcatfmt,
        //pbcattbl: pbcattbl,
        //pbcatvld: pbcatvld,
        pcuentas: pcuentas_1.pcuentas,
        pcuentas_modelo: pcuentas_modelo_1.pcuentas_modelo,
        periodos: periodos_1.periodos,
        permisos: permisos_1.permisos,
        personal: personal_1.personal,
        personal_tareas: personal_tareas_1.personal_tareas,
        pid_cruce_factura_remito: pid_cruce_factura_remito_1.pid_cruce_factura_remito,
        pid_equivalencia_insumo: pid_equivalencia_insumo_1.pid_equivalencia_insumo,
        pid_equivalencia_proveedor: pid_equivalencia_proveedor_1.pid_equivalencia_proveedor,
        pla_comercializacion: pla_comercializacion_1.pla_comercializacion,
        pla_contratistas: pla_contratistas_1.pla_contratistas,
        pla_contratistas_items: pla_contratistas_items_1.pla_contratistas_items,
        pla_egresos_actividad: pla_egresos_actividad_1.pla_egresos_actividad,
        pla_egresos_actividad_items: pla_egresos_actividad_items_1.pla_egresos_actividad_items,
        pla_financiero_ctas: pla_financiero_ctas_1.pla_financiero_ctas,
        pla_financiero_ctas_items: pla_financiero_ctas_items_1.pla_financiero_ctas_items,
        pla_insu: pla_insu_1.pla_insu,
        pla_insumos: pla_insumos_1.pla_insumos,
        pla_insumos_items: pla_insumos_items_1.pla_insumos_items,
        pla_lotes: pla_lotes_1.pla_lotes,
        pla_lotes_tareas: pla_lotes_tareas_1.pla_lotes_tareas,
        pla_lotes_tareas_insumos: pla_lotes_tareas_insumos_1.pla_lotes_tareas_insumos,
        pla_lotes_tareas_riego: pla_lotes_tareas_riego_1.pla_lotes_tareas_riego,
        pla_modelos: pla_modelos_1.pla_modelos,
        pla_modelos_tareas: pla_modelos_tareas_1.pla_modelos_tareas,
        pla_modelos_tareas_insumos: pla_modelos_tareas_insumos_1.pla_modelos_tareas_insumos,
        pla_modelos_tareas_riego: pla_modelos_tareas_riego_1.pla_modelos_tareas_riego,
        pla_tare: pla_tare_1.pla_tare,
        pla_tareas: pla_tareas_1.pla_tareas,
        pla_tareas_items: pla_tareas_items_1.pla_tareas_items,
        pla_tareas_personal: pla_tareas_personal_1.pla_tareas_personal,
        pla_tareas_riego: pla_tareas_riego_1.pla_tareas_riego,
        pla_ventas_produccion: pla_ventas_produccion_1.pla_ventas_produccion,
        pla_ventas_produccion_items: pla_ventas_produccion_items_1.pla_ventas_produccion_items,
        plan: plan_1.plan,
        planeamiento_lotes: planeamiento_lotes_1.planeamiento_lotes,
        plani_lluvias: plani_lluvias_1.plani_lluvias,
        presupuesto: presupuesto_1.presupuesto,
        presupuestos: presupuestos_1.presupuestos,
        produccion: produccion_1.produccion,
        produccion_cania: produccion_cania_1.produccion_cania,
        produccion_citrus: produccion_citrus_1.produccion_citrus,
        produccion_olivo: produccion_olivo_1.produccion_olivo,
        //producto_rubro: producto_rubro,
        //producto_subrubro: producto_subrubro,
        promocion_empresa: promocion_empresa_1.promocion_empresa,
        promociones: promociones_1.promociones,
        promociones_plan: promociones_plan_1.promociones_plan,
        promociones_plan_empresas: promociones_plan_empresas_1.promociones_plan_empresas,
        proveedor_impuestos: proveedor_impuestos_1.proveedor_impuestos,
        proveedores: proveedores_1.proveedores,
        proveedores_pagos: proveedores_pagos_1.proveedores_pagos,
        proveedores_precios_articulos: proveedores_precios_articulos_1.proveedores_precios_articulos,
        provincia: provincia_1.provincia,
        puntos_articulos: puntos_articulos_1.puntos_articulos,
        puntos_clientes: puntos_clientes_1.puntos_clientes,
        puntos_config: puntos_config_1.puntos_config,
        puntos_de_reposicion: puntos_de_reposicion_1.puntos_de_reposicion,
        puntos_de_venta: puntos_de_venta_1.puntos_de_venta,
        puntos_de_venta_usuarios: puntos_de_venta_usuarios_1.puntos_de_venta_usuarios,
        puntos_empresas: puntos_empresas_1.puntos_empresas,
        puntos_x_venta: puntos_x_venta_1.puntos_x_venta,
        raza: raza_1.raza,
        registros_borrados: registros_borrados_1.registros_borrados,
        remitos_campo: remitos_campo_1.remitos_campo,
        rendicion: rendicion_1.rendicion,
        rendicion_items: rendicion_items_1.rendicion_items,
        rodeo: rodeo_1.rodeo,
        rubros: rubros_1.rubros,
        rubros_clientes: rubros_clientes_1.rubros_clientes,
        rubros_iva: rubros_iva_1.rubros_iva,
        sanidad: sanidad_1.sanidad,
        secuencia: secuencia_1.secuencia,
        stock: stock_1.stock,
        stock_campo: stock_campo_1.stock_campo,
        stock_header: stock_header_1.stock_header,
        stock_item: stock_item_1.stock_item,
        stockheader_estados: stockheader_estados_1.stockheader_estados,
        stockheader_movimientos: stockheader_movimientos_1.stockheader_movimientos,
        subrubros: subrubros_1.subrubros,
        superficie_ganadera: superficie_ganadera_1.superficie_ganadera,
        t_ctacte_marca_saldos: t_ctacte_marca_saldos_1.t_ctacte_marca_saldos,
        t_empresas_servicios: t_empresas_servicios_1.t_empresas_servicios,
        t_inf_saldos_hist: t_inf_saldos_hist_1.t_inf_saldos_hist,
        t_log: t_log_1.t_log,
        t_pcuentas_establecimientos: t_pcuentas_establecimientos_1.t_pcuentas_establecimientos,
        t_proveedores_marca_saldos: t_proveedores_marca_saldos_1.t_proveedores_marca_saldos,
        tablas: tablas_1.tablas,
        tarea_concepto: tarea_concepto_1.tarea_concepto,
        tareas: tareas_1.tareas,
        tareas_precios: tareas_precios_1.tareas_precios,
        tareas_seguridad: tareas_seguridad_1.tareas_seguridad,
        tarjetas: tarjetas_1.tarjetas,
        tarjetas_plan: tarjetas_plan_1.tarjetas_plan,
        tarjetas_plan_empresas: tarjetas_plan_empresas_1.tarjetas_plan_empresas,
        testing: testing_1.testing,
        ticket_comprobante: ticket_comprobante_1.ticket_comprobante,
        tipo_destino: tipo_destino_1.tipo_destino,
        tipo_impuesto: tipo_impuesto_1.tipo_impuesto,
        tipo_mov: tipo_mov_1.tipo_mov,
        tipo_servicio_ganaderia: tipo_servicio_ganaderia_1.tipo_servicio_ganaderia,
        tipo_ticket: tipo_ticket_1.tipo_ticket,
        tipos_dinero: tipos_dinero_1.tipos_dinero,
        tipos_documentos: tipos_documentos_1.tipos_documentos,
        tipos_documentos_py: tipos_documentos_py_1.tipos_documentos_py,
        tmp_articulos_c: tmp_articulos_c_1.tmp_articulos_c,
        tmp_libro_mayor: tmp_libro_mayor_1.tmp_libro_mayor,
        tmp_resultado_x_un: tmp_resultado_x_un_1.tmp_resultado_x_un,
        transformacion: transformacion_1.transformacion,
        transformacion_items: transformacion_items_1.transformacion_items,
        transporte: transporte_1.transporte,
        tt_actividades: tt_actividades_1.tt_actividades,
        //tt_admstrgest: tt_admstrgest,
        //tt_admstrgest_aux: tt_admstrgest_aux,
        //tt_admstrmen: tt_admstrmen,
        //tt_admstrmen_aux: tt_admstrmen_aux,
        tt_animales: tt_animales_1.tt_animales,
        tt_anticiposvscancel: tt_anticiposvscancel_1.tt_anticiposvscancel,
        tt_articulos: tt_articulos_1.tt_articulos,
        //tt_articulos_existencia: tt_articulos_existencia,
        tt_articulos_precios_aux: tt_articulos_precios_aux_1.tt_articulos_precios_aux,
        tt_balance: tt_balance_1.tt_balance,
        //tt_balance_paso: tt_balance_paso,
        tt_balance_temp: tt_balance_temp_1.tt_balance_temp,
        //tt_cab_admstrmen: tt_cab_admstrmen,
        tt_cashflow_aux1: tt_cashflow_aux1_1.tt_cashflow_aux1,
        tt_cheques: tt_cheques_1.tt_cheques,
        tt_cheques_salidos: tt_cheques_salidos_1.tt_cheques_salidos,
        tt_clientes: tt_clientes_1.tt_clientes,
        tt_clientes_ctacte_saldos: tt_clientes_ctacte_saldos_1.tt_clientes_ctacte_saldos,
        tt_clientes_ctacte_saldos_aux: tt_clientes_ctacte_saldos_aux_1.tt_clientes_ctacte_saldos_aux,
        tt_clientes_saldos_aux: tt_clientes_saldos_aux_1.tt_clientes_saldos_aux,
        tt_comp_numero: tt_comp_numero_1.tt_comp_numero,
        tt_comprobantes_pendientes: tt_comprobantes_pendientes_1.tt_comprobantes_pendientes,
        tt_cons_stock: tt_cons_stock_1.tt_cons_stock,
        tt_cons_stock_aux: tt_cons_stock_aux_1.tt_cons_stock_aux,
        tt_cosecha: tt_cosecha_1.tt_cosecha,
        tt_cotizacion: tt_cotizacion_1.tt_cotizacion,
        tt_cpro_aux: tt_cpro_aux_1.tt_cpro_aux,
        tt_ctas_aux: tt_ctas_aux_1.tt_ctas_aux,
        //tt_ctrl_cosecha: tt_ctrl_cosecha,
        //tt_ctrl_cosecha_aux: tt_ctrl_cosecha_aux,
        tt_cuentas: tt_cuentas_1.tt_cuentas,
        //tt_cuentas_cashflow: tt_cuentas_cashflow,
        tt_cuentas_disponibilidades_saldos: tt_cuentas_disponibilidades_saldos_1.tt_cuentas_disponibilidades_saldos,
        tt_cuentas_disponibilidades_saldos_aux: tt_cuentas_disponibilidades_saldos_aux_1.tt_cuentas_disponibilidades_saldos_aux,
        tt_cuentas_nivel: tt_cuentas_nivel_1.tt_cuentas_nivel,
        tt_cuentas_saldos: tt_cuentas_saldos_1.tt_cuentas_saldos,
        tt_cuentas_saldos_aux: tt_cuentas_saldos_aux_1.tt_cuentas_saldos_aux,
        tt_debug: tt_debug_1.tt_debug,
        tt_deposito: tt_deposito_1.tt_deposito,
        tt_empresa: tt_empresa_1.tt_empresa,
        tt_empresas_servicios: tt_empresas_servicios_1.tt_empresas_servicios,
        tt_establecimientos: tt_establecimientos_1.tt_establecimientos,
        tt_existencias_stock: tt_existencias_stock_1.tt_existencias_stock,
        //tt_fechas_cashflow: tt_fechas_cashflow,
        tt_fiscal: tt_fiscal_1.tt_fiscal,
        tt_import_archivo_ingenio: tt_import_archivo_ingenio_1.tt_import_archivo_ingenio,
        //tt_inf_provcontflet: tt_inf_provcontflet,
        //tt_inf_provcontflet_aux: tt_inf_provcontflet_aux,
        tt_inventario: tt_inventario_1.tt_inventario,
        tt_inventario_animales: tt_inventario_animales_1.tt_inventario_animales,
        tt_invganadero: tt_invganadero_1.tt_invganadero,
        tt_invganadero_aux: tt_invganadero_aux_1.tt_invganadero_aux,
        tt_log: tt_log_1.tt_log,
        tt_lote_actividad: tt_lote_actividad_1.tt_lote_actividad,
        tt_nov_animales: tt_nov_animales_1.tt_nov_animales,
        tt_nov_insumos: tt_nov_insumos_1.tt_nov_insumos,
        tt_novedades: tt_novedades_1.tt_novedades,
        tt_parametros: tt_parametros_1.tt_parametros,
        tt_periodos: tt_periodos_1.tt_periodos,
        tt_pla_insumos: tt_pla_insumos_1.tt_pla_insumos,
        tt_plapaggral: tt_plapaggral_1.tt_plapaggral,
        tt_plapaggral_aux: tt_plapaggral_aux_1.tt_plapaggral_aux,
        tt_proveedor_cliente: tt_proveedor_cliente_1.tt_proveedor_cliente,
        tt_proveedores: tt_proveedores_1.tt_proveedores,
        tt_proveedores_ctacte_saldos: tt_proveedores_ctacte_saldos_1.tt_proveedores_ctacte_saldos,
        tt_proveedores_ctacte_saldos_aux: tt_proveedores_ctacte_saldos_aux_1.tt_proveedores_ctacte_saldos_aux,
        tt_proveedores_saldos_aux: tt_proveedores_saldos_aux_1.tt_proveedores_saldos_aux,
        //tt_renumera: tt_renumera,
        tt_res_emp_servicios: tt_res_emp_servicios_1.tt_res_emp_servicios,
        tt_res_emp_servicios_aux: tt_res_emp_servicios_aux_1.tt_res_emp_servicios_aux,
        tt_resultado_actividades: tt_resultado_actividades_1.tt_resultado_actividades,
        tt_resultado_actividades_aux: tt_resultado_actividades_aux_1.tt_resultado_actividades_aux,
        tt_sql: tt_sql_1.tt_sql,
        tt_stock_paso: tt_stock_paso_1.tt_stock_paso,
        tt_tesoreria: tt_tesoreria_1.tt_tesoreria,
        //tt_tesoreria_aux: tt_tesoreria_aux,
        tt_tesoreria_caso1: tt_tesoreria_caso1_1.tt_tesoreria_caso1,
        tt_tesoreria_retenciones: tt_tesoreria_retenciones_1.tt_tesoreria_retenciones,
        //tt_tipo_comprobante: tt_tipo_comprobante,
        tt_unidad_negocio: tt_unidad_negocio_1.tt_unidad_negocio,
        tt_up: tt_up_1.tt_up,
        tt_usuarios_seleccion: tt_usuarios_seleccion_1.tt_usuarios_seleccion,
        tt_volcado_impuestos: tt_volcado_impuestos_1.tt_volcado_impuestos,
        turnos: turnos_1.turnos,
        unidad_de_medida: unidad_de_medida_1.unidad_de_medida,
        unidad_negocio: unidad_negocio_1.unidad_negocio,
        unidad_productiva: unidad_productiva_1.unidad_productiva,
        unidades: unidades_1.unidades,
        usuarios: usuarios_1.usuarios,
        usuarios_campo: usuarios_campo_1.usuarios_campo,
        usuarios_depositos: usuarios_depositos_1.usuarios_depositos,
        usuarios_permisos: usuarios_permisos_1.usuarios_permisos,
        usuarios_tareas: usuarios_tareas_1.usuarios_tareas,
        vendedores: vendedores_1.vendedores,
        ventas: ventas_1.ventas,
        ventas_cert_deposito: ventas_cert_deposito_1.ventas_cert_deposito,
        ventas_facturas: ventas_facturas_1.ventas_facturas,
        ventas_items: ventas_items_1.ventas_items,
        ventas_items_serie: ventas_items_serie_1.ventas_items_serie,
        ventas_medio_de_pago: ventas_medio_de_pago_1.ventas_medio_de_pago,
        ventas_pagos: ventas_pagos_1.ventas_pagos,
        ventas_produccion: ventas_produccion_1.ventas_produccion,
        ventas_remitos_facturas: ventas_remitos_facturas_1.ventas_remitos_facturas,
        ventas_retenciones: ventas_retenciones_1.ventas_retenciones,
        ventas_transporte: ventas_transporte_1.ventas_transporte,
        ventas_unidad_item: ventas_unidad_item_1.ventas_unidad_item,
        ventas_vencimientos: ventas_vencimientos_1.ventas_vencimientos,
        volcada: volcada_1.volcada,
        webservice: webservice_1.webservice,
        webservice_afip: webservice_afip_1.webservice_afip,
    };
}
exports.initModels = initModels;
//# sourceMappingURL=init-models.js.map