import type { Sequelize, Model } from "sequelize";
import { act_categoria } from "./act_categoria";
import type { act_categoriaAttributes, act_categoriaCreationAttributes } from "./act_categoria";
import { actividad } from "./actividad";
import type { actividadAttributes, actividadCreationAttributes } from "./actividad";
import { actividad_periodo } from "./actividad_periodo";
import type { actividad_periodoAttributes, actividad_periodoCreationAttributes } from "./actividad_periodo";
import { actividades_campo } from "./actividades_campo";
import type { actividades_campoAttributes, actividades_campoCreationAttributes } from "./actividades_campo";
import { actualizacion } from "./actualizacion";
import type { actualizacionAttributes, actualizacionCreationAttributes } from "./actualizacion";
import { actualizacion_dolar } from "./actualizacion_dolar";
import type { actualizacion_dolarAttributes, actualizacion_dolarCreationAttributes } from "./actualizacion_dolar";
import { actualizacion_utas } from "./actualizacion_utas";
import type { actualizacion_utasAttributes, actualizacion_utasCreationAttributes } from "./actualizacion_utas";
import { afip_comprobantes } from "./afip_comprobantes";
import type { afip_comprobantesAttributes, afip_comprobantesCreationAttributes } from "./afip_comprobantes";
import { afip_comprobantes_codigos } from "./afip_comprobantes_codigos";
import type { afip_comprobantes_codigosAttributes, afip_comprobantes_codigosCreationAttributes } from "./afip_comprobantes_codigos";
import { afip_conceptos } from "./afip_conceptos";
import type { afip_conceptosAttributes, afip_conceptosCreationAttributes } from "./afip_conceptos";
import { afip_cosechas } from "./afip_cosechas";
import type { afip_cosechasAttributes, afip_cosechasCreationAttributes } from "./afip_cosechas";
import { afip_cuitdest } from "./afip_cuitdest";
import type { afip_cuitdestAttributes, afip_cuitdestCreationAttributes } from "./afip_cuitdest";
import { afip_especies } from "./afip_especies";
import type { afip_especiesAttributes, afip_especiesCreationAttributes } from "./afip_especies";
import { afip_idiomas } from "./afip_idiomas";
import type { afip_idiomasAttributes, afip_idiomasCreationAttributes } from "./afip_idiomas";
import { afip_incoterms } from "./afip_incoterms";
import type { afip_incotermsAttributes, afip_incotermsCreationAttributes } from "./afip_incoterms";
import { afip_localidades } from "./afip_localidades";
import type { afip_localidadesAttributes, afip_localidadesCreationAttributes } from "./afip_localidades";
import { afip_monedas } from "./afip_monedas";
import type { afip_monedasAttributes, afip_monedasCreationAttributes } from "./afip_monedas";
import { afip_nomenclador } from "./afip_nomenclador";
import type { afip_nomencladorAttributes, afip_nomencladorCreationAttributes } from "./afip_nomenclador";
import { afip_paises } from "./afip_paises";
import type { afip_paisesAttributes, afip_paisesCreationAttributes } from "./afip_paises";
import { afip_provincias } from "./afip_provincias";
import type { afip_provinciasAttributes, afip_provinciasCreationAttributes } from "./afip_provincias";
import { afip_puntos_ventas } from "./afip_puntos_ventas";
import type { afip_puntos_ventasAttributes, afip_puntos_ventasCreationAttributes } from "./afip_puntos_ventas";
import { afip_texportacion } from "./afip_texportacion";
import type { afip_texportacionAttributes, afip_texportacionCreationAttributes } from "./afip_texportacion";
import { afip_tipos_datos_opcional } from "./afip_tipos_datos_opcional";
import type { afip_tipos_datos_opcionalAttributes, afip_tipos_datos_opcionalCreationAttributes } from "./afip_tipos_datos_opcional";
import { afip_tipos_documentos } from "./afip_tipos_documentos";
import type { afip_tipos_documentosAttributes, afip_tipos_documentosCreationAttributes } from "./afip_tipos_documentos";
import { afip_tipos_iva } from "./afip_tipos_iva";
import type { afip_tipos_ivaAttributes, afip_tipos_ivaCreationAttributes } from "./afip_tipos_iva";
import { afip_tipos_tributos } from "./afip_tipos_tributos";
import type { afip_tipos_tributosAttributes, afip_tipos_tributosCreationAttributes } from "./afip_tipos_tributos";
import { afip_unimed } from "./afip_unimed";
import type { afip_unimedAttributes, afip_unimedCreationAttributes } from "./afip_unimed";
import { ajustes } from "./ajustes";
import type { ajustesAttributes, ajustesCreationAttributes } from "./ajustes";
import { amortizaciones } from "./amortizaciones";
import type { amortizacionesAttributes, amortizacionesCreationAttributes } from "./amortizaciones";
import { animales } from "./animales";
import type { animalesAttributes, animalesCreationAttributes } from "./animales";
import { animales_estados } from "./animales_estados";
import type { animales_estadosAttributes, animales_estadosCreationAttributes } from "./animales_estados";
import { aplicaciones } from "./aplicaciones";
import type { aplicacionesAttributes, aplicacionesCreationAttributes } from "./aplicaciones";
import { arch_importados } from "./arch_importados";
import type { arch_importadosAttributes, arch_importadosCreationAttributes } from "./arch_importados";
//import { archivo_arba } from "./archivo_arba";
//import type { archivo_arbaAttributes, archivo_arbaCreationAttributes } from "./archivo_arba";
import { articulo_equiv_unidades } from "./articulo_equiv_unidades";
import type { articulo_equiv_unidadesAttributes, articulo_equiv_unidadesCreationAttributes } from "./articulo_equiv_unidades";
import { articulos } from "./articulos";
import type { articulosAttributes, articulosCreationAttributes } from "./articulos";
import { articulos_caracteristicas } from "./articulos_caracteristicas";
import type { articulos_caracteristicasAttributes, articulos_caracteristicasCreationAttributes } from "./articulos_caracteristicas";
import { articulos_caracteristicas_valores } from "./articulos_caracteristicas_valores";
import type { articulos_caracteristicas_valoresAttributes, articulos_caracteristicas_valoresCreationAttributes } from "./articulos_caracteristicas_valores";
import { articulos_serie } from "./articulos_serie";
import type { articulos_serieAttributes, articulos_serieCreationAttributes } from "./articulos_serie";
import { articulos_tags } from "./articulos_tags";
import type { articulos_tagsAttributes, articulos_tagsCreationAttributes } from "./articulos_tags";
import { articulos_transformacion } from "./articulos_transformacion";
import type { articulos_transformacionAttributes, articulos_transformacionCreationAttributes } from "./articulos_transformacion";
import { articulos_unidad_medida } from "./articulos_unidad_medida";
import type { articulos_unidad_medidaAttributes, articulos_unidad_medidaCreationAttributes } from "./articulos_unidad_medida";
import { asientos } from "./asientos";
import type { asientosAttributes, asientosCreationAttributes } from "./asientos";
import { asientos_items } from "./asientos_items";
import type { asientos_itemsAttributes, asientos_itemsCreationAttributes } from "./asientos_items";
import { asientos_iva } from "./asientos_iva";
import type { asientos_ivaAttributes, asientos_ivaCreationAttributes } from "./asientos_iva";
import { asignar_rubros } from "./asignar_rubros";
import type { asignar_rubrosAttributes, asignar_rubrosCreationAttributes } from "./asignar_rubros";
//import { atributo } from "./atributo";
//import type { atributoAttributes, atributoCreationAttributes } from "./atributo";
import { atributos_de_precios } from "./atributos_de_precios";
import type { atributos_de_preciosAttributes, atributos_de_preciosCreationAttributes } from "./atributos_de_precios";
import { bancos } from "./bancos";
import type { bancosAttributes, bancosCreationAttributes } from "./bancos";
import { bases_contables } from "./bases_contables";
import type { bases_contablesAttributes, bases_contablesCreationAttributes } from "./bases_contables";
import { basicos } from "./basicos";
import type { basicosAttributes, basicosCreationAttributes } from "./basicos";
import { borrados } from "./borrados";
import type { borradosAttributes, borradosCreationAttributes } from "./borrados";
import { cab_lista_precio } from "./cab_lista_precio";
import type { cab_lista_precioAttributes, cab_lista_precioCreationAttributes } from "./cab_lista_precio";
import { cajas } from "./cajas";
import type { cajasAttributes, cajasCreationAttributes } from "./cajas";
import { cania_peladores } from "./cania_peladores";
import type { cania_peladoresAttributes, cania_peladoresCreationAttributes } from "./cania_peladores";
//import { carta_porte } from "./carta_porte";
//import type { carta_porteAttributes, carta_porteCreationAttributes } from "./carta_porte";
//import { carta_porte_det } from "./carta_porte_det";
//import type { carta_porte_detAttributes, carta_porte_detCreationAttributes } from "./carta_porte_det";
import { categoria } from "./categoria";
import type { categoriaAttributes, categoriaCreationAttributes } from "./categoria";
import { categoria_aplicativos } from "./categoria_aplicativos";
import type { categoria_aplicativosAttributes, categoria_aplicativosCreationAttributes } from "./categoria_aplicativos";
import { categoria_iva } from "./categoria_iva";
import type { categoria_ivaAttributes, categoria_ivaCreationAttributes } from "./categoria_iva";
import { chequeras } from "./chequeras";
import type { chequerasAttributes, chequerasCreationAttributes } from "./chequeras";
import { cierres_fiscales } from "./cierres_fiscales";
import type { cierres_fiscalesAttributes, cierres_fiscalesCreationAttributes } from "./cierres_fiscales";
import { clientes } from "./clientes";
import type { clientesAttributes, clientesCreationAttributes } from "./clientes";
import { clientes2 } from "./clientes2";
import type { clientes2Attributes, clientes2CreationAttributes } from "./clientes2";
import { clientes_acuerdos } from "./clientes_acuerdos";
import type { clientes_acuerdosAttributes, clientes_acuerdosCreationAttributes } from "./clientes_acuerdos";
import { clientes_destinos } from "./clientes_destinos";
import type { clientes_destinosAttributes, clientes_destinosCreationAttributes } from "./clientes_destinos";
import { clientes_domicilios } from "./clientes_domicilios";
import type { clientes_domiciliosAttributes, clientes_domiciliosCreationAttributes } from "./clientes_domicilios";
import { clientes_impuestos } from "./clientes_impuestos";
import type { clientes_impuestosAttributes, clientes_impuestosCreationAttributes } from "./clientes_impuestos";
import { clientes_pagos } from "./clientes_pagos";
import type { clientes_pagosAttributes, clientes_pagosCreationAttributes } from "./clientes_pagos";
import { clientes_seguimiento } from "./clientes_seguimiento";
import type { clientes_seguimientoAttributes, clientes_seguimientoCreationAttributes } from "./clientes_seguimiento";
import { colores } from "./colores";
import type { coloresAttributes, coloresCreationAttributes } from "./colores";
import { comision_x_vendedor } from "./comision_x_vendedor";
import type { comision_x_vendedorAttributes, comision_x_vendedorCreationAttributes } from "./comision_x_vendedor";
import { compras } from "./compras";
import type { comprasAttributes, comprasCreationAttributes } from "./compras";
import { compras_comprob_ingresos_bruto } from "./compras_comprob_ingresos_bruto";
import type { compras_comprob_ingresos_brutoAttributes, compras_comprob_ingresos_brutoCreationAttributes } from "./compras_comprob_ingresos_bruto";
import { compras_comprob_retencion } from "./compras_comprob_retencion";
import type { compras_comprob_retencionAttributes, compras_comprob_retencionCreationAttributes } from "./compras_comprob_retencion";
import { compras_facturas } from "./compras_facturas";
import type { compras_facturasAttributes, compras_facturasCreationAttributes } from "./compras_facturas";
import { compras_items } from "./compras_items";
import type { compras_itemsAttributes, compras_itemsCreationAttributes } from "./compras_items";
//import { compras_items_remitos } from "./compras_items_remitos";
//import type { compras_items_remitosAttributes, compras_items_remitosCreationAttributes } from "./compras_items_remitos";
import { compras_labores } from "./compras_labores";
import type { compras_laboresAttributes, compras_laboresCreationAttributes } from "./compras_labores";
import { compras_pagos } from "./compras_pagos";
import type { compras_pagosAttributes, compras_pagosCreationAttributes } from "./compras_pagos";
import { compras_produccion } from "./compras_produccion";
import type { compras_produccionAttributes, compras_produccionCreationAttributes } from "./compras_produccion";
import { compras_remitos } from "./compras_remitos";
import type { compras_remitosAttributes, compras_remitosCreationAttributes } from "./compras_remitos";
import { compras_retenciones } from "./compras_retenciones";
import type { compras_retencionesAttributes, compras_retencionesCreationAttributes } from "./compras_retenciones";
import { compras_retenciones_detalle } from "./compras_retenciones_detalle";
import type { compras_retenciones_detalleAttributes, compras_retenciones_detalleCreationAttributes } from "./compras_retenciones_detalle";
import { compras_stock_items } from "./compras_stock_items";
import type { compras_stock_itemsAttributes, compras_stock_itemsCreationAttributes } from "./compras_stock_items";
import { compras_vencimientos } from "./compras_vencimientos";
import type { compras_vencimientosAttributes, compras_vencimientosCreationAttributes } from "./compras_vencimientos";
import { comprobantes_destino } from "./comprobantes_destino";
import type { comprobantes_destinoAttributes, comprobantes_destinoCreationAttributes } from "./comprobantes_destino";
import { comprobantes_formatos } from "./comprobantes_formatos";
import type { comprobantes_formatosAttributes, comprobantes_formatosCreationAttributes } from "./comprobantes_formatos";
import { comprobantes_formatos_default } from "./comprobantes_formatos_default";
import type { comprobantes_formatos_defaultAttributes, comprobantes_formatos_defaultCreationAttributes } from "./comprobantes_formatos_default";
import { comprobantes_relacion } from "./comprobantes_relacion";
import type { comprobantes_relacionAttributes, comprobantes_relacionCreationAttributes } from "./comprobantes_relacion";
//import { conceptos } from "./conceptos";
//import type { conceptosAttributes, conceptosCreationAttributes } from "./conceptos";
import { condicion_venta_tipo } from "./condicion_venta_tipo";
import type { condicion_venta_tipoAttributes, condicion_venta_tipoCreationAttributes } from "./condicion_venta_tipo";
import { conf_colores_deudas } from "./conf_colores_deudas";
import type { conf_colores_deudasAttributes, conf_colores_deudasCreationAttributes } from "./conf_colores_deudas";
import { conf_ejercicio_economico } from "./conf_ejercicio_economico";
import type { conf_ejercicio_economicoAttributes, conf_ejercicio_economicoCreationAttributes } from "./conf_ejercicio_economico";
import { config } from "./config";
import type { configAttributes, configCreationAttributes } from "./config";
import { config_app } from "./config_app";
import type { config_appAttributes, config_appCreationAttributes } from "./config_app";
import { config_campo } from "./config_campo";
import type { config_campoAttributes, config_campoCreationAttributes } from "./config_campo";
import { config_circuitos } from "./config_circuitos";
import type { config_circuitosAttributes, config_circuitosCreationAttributes } from "./config_circuitos";
import { config_importacion } from "./config_importacion";
import type { config_importacionAttributes, config_importacionCreationAttributes } from "./config_importacion";
import { config_iva } from "./config_iva";
import type { config_ivaAttributes, config_ivaCreationAttributes } from "./config_iva";
import { config_parametros } from "./config_parametros";
import type { config_parametrosAttributes, config_parametrosCreationAttributes } from "./config_parametros";
import { config_redondeos } from "./config_redondeos";
import type { config_redondeosAttributes, config_redondeosCreationAttributes } from "./config_redondeos";
import { config_volcado_impuestos } from "./config_volcado_impuestos";
import type { config_volcado_impuestosAttributes, config_volcado_impuestosCreationAttributes } from "./config_volcado_impuestos";
import { configuracion_libro_iva } from "./configuracion_libro_iva";
import type { configuracion_libro_ivaAttributes, configuracion_libro_ivaCreationAttributes } from "./configuracion_libro_iva";
//import { contratos } from "./contratos";
//import type { contratosAttributes, contratosCreationAttributes } from "./contratos";
import { coordenadas } from "./coordenadas";
import type { coordenadasAttributes, coordenadasCreationAttributes } from "./coordenadas";
import { cotizacion } from "./cotizacion";
import type { cotizacionAttributes, cotizacionCreationAttributes } from "./cotizacion";
import { cta_cble_grupo } from "./cta_cble_grupo";
import type { cta_cble_grupoAttributes, cta_cble_grupoCreationAttributes } from "./cta_cble_grupo";
import { cta_cble_grupo_item } from "./cta_cble_grupo_item";
import type { cta_cble_grupo_itemAttributes, cta_cble_grupo_itemCreationAttributes } from "./cta_cble_grupo_item";
import { cuadrillas } from "./cuadrillas";
import type { cuadrillasAttributes, cuadrillasCreationAttributes } from "./cuadrillas";
import { cuentas } from "./cuentas";
import type { cuentasAttributes, cuentasCreationAttributes } from "./cuentas";
import { cuentas_cash_flow } from "./cuentas_cash_flow";
import type { cuentas_cash_flowAttributes, cuentas_cash_flowCreationAttributes } from "./cuentas_cash_flow";
import { cuentas_cruce } from "./cuentas_cruce";
import type { cuentas_cruceAttributes, cuentas_cruceCreationAttributes } from "./cuentas_cruce";
import { cuentas_disponibilidades } from "./cuentas_disponibilidades";
import type { cuentas_disponibilidadesAttributes, cuentas_disponibilidadesCreationAttributes } from "./cuentas_disponibilidades";
import { cuentas_frecuentes } from "./cuentas_frecuentes";
import type { cuentas_frecuentesAttributes, cuentas_frecuentesCreationAttributes } from "./cuentas_frecuentes";
import { cuentas_ingenio } from "./cuentas_ingenio";
import type { cuentas_ingenioAttributes, cuentas_ingenioCreationAttributes } from "./cuentas_ingenio";
import { cuentas_lotes } from "./cuentas_lotes";
import type { cuentas_lotesAttributes, cuentas_lotesCreationAttributes } from "./cuentas_lotes";
import { cuentas_predef_ganaderia } from "./cuentas_predef_ganaderia";
import type { cuentas_predef_ganaderiaAttributes, cuentas_predef_ganaderiaCreationAttributes } from "./cuentas_predef_ganaderia";
import { cuentas_predefinidas } from "./cuentas_predefinidas";
import type { cuentas_predefinidasAttributes, cuentas_predefinidasCreationAttributes } from "./cuentas_predefinidas";
import { datawindows } from "./datawindows";
import type { datawindowsAttributes, datawindowsCreationAttributes } from "./datawindows";
import { datos_basicos1 } from "./datos_basicos1";
import type { datos_basicos1Attributes, datos_basicos1CreationAttributes } from "./datos_basicos1";
import { datos_basicos2 } from "./datos_basicos2";
import type { datos_basicos2Attributes, datos_basicos2CreationAttributes } from "./datos_basicos2";
import { datos_basicos3 } from "./datos_basicos3";
import type { datos_basicos3Attributes, datos_basicos3CreationAttributes } from "./datos_basicos3";
import { datos_basicos4 } from "./datos_basicos4";
import type { datos_basicos4Attributes, datos_basicos4CreationAttributes } from "./datos_basicos4";
import { datos_climaticos } from "./datos_climaticos";
import type { datos_climaticosAttributes, datos_climaticosCreationAttributes } from "./datos_climaticos";
import { datos_climaticos_items } from "./datos_climaticos_items";
import type { datos_climaticos_itemsAttributes, datos_climaticos_itemsCreationAttributes } from "./datos_climaticos_items";
import { depositos } from "./depositos";
import type { depositosAttributes, depositosCreationAttributes } from "./depositos";
import { destino_precios } from "./destino_precios";
import type { destino_preciosAttributes, destino_preciosCreationAttributes } from "./destino_precios";
//import { destinos } from "./destinos";
//import type { destinosAttributes, destinosCreationAttributes } from "./destinos";
import { destinos_campo } from "./destinos_campo";
import type { destinos_campoAttributes, destinos_campoCreationAttributes } from "./destinos_campo";
import { destinos_direcciones } from "./destinos_direcciones";
import type { destinos_direccionesAttributes, destinos_direccionesCreationAttributes } from "./destinos_direcciones";
//import { destinos_formulas } from "./destinos_formulas";
//import type { destinos_formulasAttributes, destinos_formulasCreationAttributes } from "./destinos_formulas";
import { destinos_stock } from "./destinos_stock";
import type { destinos_stockAttributes, destinos_stockCreationAttributes } from "./destinos_stock";
import { distanci } from "./distanci";
import type { distanciAttributes, distanciCreationAttributes } from "./distanci";
import { ec_articulos } from "./ec_articulos";
import type { ec_articulosAttributes, ec_articulosCreationAttributes } from "./ec_articulos";
import { ec_articulos_imagenes } from "./ec_articulos_imagenes";
import type { ec_articulos_imagenesAttributes, ec_articulos_imagenesCreationAttributes } from "./ec_articulos_imagenes";
import { ec_carrito } from "./ec_carrito";
import type { ec_carritoAttributes, ec_carritoCreationAttributes } from "./ec_carrito";
import { ec_categorias_ml } from "./ec_categorias_ml";
import type { ec_categorias_mlAttributes, ec_categorias_mlCreationAttributes } from "./ec_categorias_ml";
import { ec_clientes } from "./ec_clientes";
import type { ec_clientesAttributes, ec_clientesCreationAttributes } from "./ec_clientes";
import { ec_config } from "./ec_config";
import type { ec_configAttributes, ec_configCreationAttributes } from "./ec_config";
import { ec_config_circuitos } from "./ec_config_circuitos";
import type { ec_config_circuitosAttributes, ec_config_circuitosCreationAttributes } from "./ec_config_circuitos";
import { ec_config_parametros } from "./ec_config_parametros";
import type { ec_config_parametrosAttributes, ec_config_parametrosCreationAttributes } from "./ec_config_parametros";
import { ec_rubros } from "./ec_rubros";
import type { ec_rubrosAttributes, ec_rubrosCreationAttributes } from "./ec_rubros";
import { ec_subrubros } from "./ec_subrubros";
import type { ec_subrubrosAttributes, ec_subrubrosCreationAttributes } from "./ec_subrubros";
import { ec_tipos_envios } from "./ec_tipos_envios";
import type { ec_tipos_enviosAttributes, ec_tipos_enviosCreationAttributes } from "./ec_tipos_envios";
import { ec_ventas } from "./ec_ventas";
import type { ec_ventasAttributes, ec_ventasCreationAttributes } from "./ec_ventas";
import { ec_ventas_items } from "./ec_ventas_items";
import type { ec_ventas_itemsAttributes, ec_ventas_itemsCreationAttributes } from "./ec_ventas_items";
import { empresa_choferes } from "./empresa_choferes";
import type { empresa_choferesAttributes, empresa_choferesCreationAttributes } from "./empresa_choferes";
import { empresas } from "./empresas";
import type { empresasAttributes, empresasCreationAttributes } from "./empresas";
import { entidades } from "./entidades";
import type { entidadesAttributes, entidadesCreationAttributes } from "./entidades";
import { equivalencias_packing } from "./equivalencias_packing";
import type { equivalencias_packingAttributes, equivalencias_packingCreationAttributes } from "./equivalencias_packing";
import { estab_actividad } from "./estab_actividad";
import type { estab_actividadAttributes, estab_actividadCreationAttributes } from "./estab_actividad";
import { estab_categoria } from "./estab_categoria";
import type { estab_categoriaAttributes, estab_categoriaCreationAttributes } from "./estab_categoria";
import { establecimiento } from "./establecimiento";
import type { establecimientoAttributes, establecimientoCreationAttributes } from "./establecimiento";
import { establecimientos_depositos } from "./establecimientos_depositos";
import type { establecimientos_depositosAttributes, establecimientos_depositosCreationAttributes } from "./establecimientos_depositos";
import { fac_elect_xempresa } from "./fac_elect_xempresa";
import type { fac_elect_xempresaAttributes, fac_elect_xempresaCreationAttributes } from "./fac_elect_xempresa";
import { figuras } from "./figuras";
import type { figurasAttributes, figurasCreationAttributes } from "./figuras";
import { figuras_items } from "./figuras_items";
import type { figuras_itemsAttributes, figuras_itemsCreationAttributes } from "./figuras_items";
import { filtro_animales } from "./filtro_animales";
import type { filtro_animalesAttributes, filtro_animalesCreationAttributes } from "./filtro_animales";
import { filtro_cania } from "./filtro_cania";
import type { filtro_caniaAttributes, filtro_caniaCreationAttributes } from "./filtro_cania";
import { filtro_citrus } from "./filtro_citrus";
import type { filtro_citrusAttributes, filtro_citrusCreationAttributes } from "./filtro_citrus";
import { filtro_granos } from "./filtro_granos";
import type { filtro_granosAttributes, filtro_granosCreationAttributes } from "./filtro_granos";
import { filtro_labores } from "./filtro_labores";
import type { filtro_laboresAttributes, filtro_laboresCreationAttributes } from "./filtro_labores";
import { filtro_mov_per } from "./filtro_mov_per";
import type { filtro_mov_perAttributes, filtro_mov_perCreationAttributes } from "./filtro_mov_per";
import { filtro_orden_trabajo } from "./filtro_orden_trabajo";
import type { filtro_orden_trabajoAttributes, filtro_orden_trabajoCreationAttributes } from "./filtro_orden_trabajo";
import { filtro_plantacion } from "./filtro_plantacion";
import type { filtro_plantacionAttributes, filtro_plantacionCreationAttributes } from "./filtro_plantacion";
import { filtro_stock } from "./filtro_stock";
import type { filtro_stockAttributes, filtro_stockCreationAttributes } from "./filtro_stock";
import { filtro_vales } from "./filtro_vales";
import type { filtro_valesAttributes, filtro_valesCreationAttributes } from "./filtro_vales";
import { finan_contratistas } from "./finan_contratistas";
import type { finan_contratistasAttributes, finan_contratistasCreationAttributes } from "./finan_contratistas";
import { fmt_carta_porte } from "./fmt_carta_porte";
import type { fmt_carta_porteAttributes, fmt_carta_porteCreationAttributes } from "./fmt_carta_porte";
//import { fmt_carta_porte_det } from "./fmt_carta_porte_det";
//import type { fmt_carta_porte_detAttributes, fmt_carta_porte_detCreationAttributes } from "./fmt_carta_porte_det";
import { formato_aplicativo } from "./formato_aplicativo";
import type { formato_aplicativoAttributes, formato_aplicativoCreationAttributes } from "./formato_aplicativo";
import { formulas_variables } from "./formulas_variables";
import type { formulas_variablesAttributes, formulas_variablesCreationAttributes } from "./formulas_variables";
import { generador_formula } from "./generador_formula";
import type { generador_formulaAttributes, generador_formulaCreationAttributes } from "./generador_formula";
import { gest_identificador } from "./gest_identificador";
import type { gest_identificadorAttributes, gest_identificadorCreationAttributes } from "./gest_identificador";
import { gest_identificador_movimientos } from "./gest_identificador_movimientos";
import type { gest_identificador_movimientosAttributes, gest_identificador_movimientosCreationAttributes } from "./gest_identificador_movimientos";
import { grafico } from "./grafico";
import type { graficoAttributes, graficoCreationAttributes } from "./grafico";
import { grupo_animales } from "./grupo_animales";
import type { grupo_animalesAttributes, grupo_animalesCreationAttributes } from "./grupo_animales";
import { grupo_caracteristicas } from "./grupo_caracteristicas";
import type { grupo_caracteristicasAttributes, grupo_caracteristicasCreationAttributes } from "./grupo_caracteristicas";
//import { grupo_destino } from "./grupo_destino";
//import type { grupo_destinoAttributes, grupo_destinoCreationAttributes } from "./grupo_destino";
import { harroz } from "./harroz";
import type { harrozAttributes, harrozCreationAttributes } from "./harroz";
import { havena } from "./havena";
import type { havenaAttributes, havenaCreationAttributes } from "./havena";
import { hcebada } from "./hcebada";
import type { hcebadaAttributes, hcebadaCreationAttributes } from "./hcebada";
import { hcenteno } from "./hcenteno";
import type { hcentenoAttributes, hcentenoCreationAttributes } from "./hcenteno";
import { hchia } from "./hchia";
import type { hchiaAttributes, hchiaCreationAttributes } from "./hchia";
import { hcolza } from "./hcolza";
import type { hcolzaAttributes, hcolzaCreationAttributes } from "./hcolza";
import { hgarbanzo } from "./hgarbanzo";
import type { hgarbanzoAttributes, hgarbanzoCreationAttributes } from "./hgarbanzo";
import { hgirasol } from "./hgirasol";
import type { hgirasolAttributes, hgirasolCreationAttributes } from "./hgirasol";
import { hist_peso_categoria } from "./hist_peso_categoria";
import type { hist_peso_categoriaAttributes, hist_peso_categoriaCreationAttributes } from "./hist_peso_categoria";
import { hist_precio_categoria } from "./hist_precio_categoria";
import type { hist_precio_categoriaAttributes, hist_precio_categoriaCreationAttributes } from "./hist_precio_categoria";
import { hlino } from "./hlino";
import type { hlinoAttributes, hlinoCreationAttributes } from "./hlino";
import { hlupino } from "./hlupino";
import type { hlupinoAttributes, hlupinoCreationAttributes } from "./hlupino";
import { hmaiz } from "./hmaiz";
import type { hmaizAttributes, hmaizCreationAttributes } from "./hmaiz";
import { hmani } from "./hmani";
import type { hmaniAttributes, hmaniCreationAttributes } from "./hmani";
import { hmijo } from "./hmijo";
import type { hmijoAttributes, hmijoCreationAttributes } from "./hmijo";
import { hmoha } from "./hmoha";
import type { hmohaAttributes, hmohaCreationAttributes } from "./hmoha";
import { hoja_de_ruta } from "./hoja_de_ruta";
import type { hoja_de_rutaAttributes, hoja_de_rutaCreationAttributes } from "./hoja_de_ruta";
import { hoja_de_ruta_items } from "./hoja_de_ruta_items";
import type { hoja_de_ruta_itemsAttributes, hoja_de_ruta_itemsCreationAttributes } from "./hoja_de_ruta_items";
import { hoja_ruta_estado } from "./hoja_ruta_estado";
import type { hoja_ruta_estadoAttributes, hoja_ruta_estadoCreationAttributes } from "./hoja_ruta_estado";
import { hquinoa } from "./hquinoa";
import type { hquinoaAttributes, hquinoaCreationAttributes } from "./hquinoa";
import { hsoja } from "./hsoja";
import type { hsojaAttributes, hsojaCreationAttributes } from "./hsoja";
import { hsorgo } from "./hsorgo";
import type { hsorgoAttributes, hsorgoCreationAttributes } from "./hsorgo";
import { htrigo } from "./htrigo";
import type { htrigoAttributes, htrigoCreationAttributes } from "./htrigo";
import { htriticale } from "./htriticale";
import type { htriticaleAttributes, htriticaleCreationAttributes } from "./htriticale";
import { hviciavillosa } from "./hviciavillosa";
import type { hviciavillosaAttributes, hviciavillosaCreationAttributes } from "./hviciavillosa";
import { identificador } from "./identificador";
import type { identificadorAttributes, identificadorCreationAttributes } from "./identificador";
import { identificador_campo } from "./identificador_campo";
import type { identificador_campoAttributes, identificador_campoCreationAttributes } from "./identificador_campo";
import { im_usuarios } from "./im_usuarios";
import type { im_usuariosAttributes, im_usuariosCreationAttributes } from "./im_usuarios";
import { importacion_declaracion } from "./importacion_declaracion";
import type { importacion_declaracionAttributes, importacion_declaracionCreationAttributes } from "./importacion_declaracion";
import { importacion_items } from "./importacion_items";
import type { importacion_itemsAttributes, importacion_itemsCreationAttributes } from "./importacion_items";
import { impresoras } from "./impresoras";
import type { impresorasAttributes, impresorasCreationAttributes } from "./impresoras";
import { impresoras_fiscales } from "./impresoras_fiscales";
import type { impresoras_fiscalesAttributes, impresoras_fiscalesCreationAttributes } from "./impresoras_fiscales";
import { impuestos } from "./impuestos";
import type { impuestosAttributes, impuestosCreationAttributes } from "./impuestos";
import { impuestos_cabecera } from "./impuestos_cabecera";
import type { impuestos_cabeceraAttributes, impuestos_cabeceraCreationAttributes } from "./impuestos_cabecera";
import { impuestotercero } from "./impuestotercero";
import type { impuestoterceroAttributes, impuestoterceroCreationAttributes } from "./impuestotercero";
import { impuestotercero_items } from "./impuestotercero_items";
import type { impuestotercero_itemsAttributes, impuestotercero_itemsCreationAttributes } from "./impuestotercero_items";
import { indice_de_precios } from "./indice_de_precios";
import type { indice_de_preciosAttributes, indice_de_preciosCreationAttributes } from "./indice_de_precios";
import { inseminacion } from "./inseminacion";
import type { inseminacionAttributes, inseminacionCreationAttributes } from "./inseminacion";
import { insumos_ordenes_trabajo } from "./insumos_ordenes_trabajo";
import type { insumos_ordenes_trabajoAttributes, insumos_ordenes_trabajoCreationAttributes } from "./insumos_ordenes_trabajo";
import { items_cruces } from "./items_cruces";
import type { items_crucesAttributes, items_crucesCreationAttributes } from "./items_cruces";
import { items_facturas_cpos } from "./items_facturas_cpos";
import type { items_facturas_cposAttributes, items_facturas_cposCreationAttributes } from "./items_facturas_cpos";
import { l_margen_bruto } from "./l_margen_bruto";
import type { l_margen_brutoAttributes, l_margen_brutoCreationAttributes } from "./l_margen_bruto";
import { labores } from "./labores";
import type { laboresAttributes, laboresCreationAttributes } from "./labores";
import { labores_insumos } from "./labores_insumos";
import type { labores_insumosAttributes, labores_insumosCreationAttributes } from "./labores_insumos";
import { labores_log_externo } from "./labores_log_externo";
import type { labores_log_externoAttributes, labores_log_externoCreationAttributes } from "./labores_log_externo";
import { labores_mant_tareas } from "./labores_mant_tareas";
import type { labores_mant_tareasAttributes, labores_mant_tareasCreationAttributes } from "./labores_mant_tareas";
import { labores_maquinarias } from "./labores_maquinarias";
import type { labores_maquinariasAttributes, labores_maquinariasCreationAttributes } from "./labores_maquinarias";
import { labores_personal } from "./labores_personal";
import type { labores_personalAttributes, labores_personalCreationAttributes } from "./labores_personal";
import { lista_precios } from "./lista_precios";
import type { lista_preciosAttributes, lista_preciosCreationAttributes } from "./lista_precios";
import { lluvias } from "./lluvias";
import type { lluviasAttributes, lluviasCreationAttributes } from "./lluvias";
import { localidad } from "./localidad";
import type { localidadAttributes, localidadCreationAttributes } from "./localidad";
import { lote_actividad } from "./lote_actividad";
import type { lote_actividadAttributes, lote_actividadCreationAttributes } from "./lote_actividad";
import { lote_actividad_up } from "./lote_actividad_up";
import type { lote_actividad_upAttributes, lote_actividad_upCreationAttributes } from "./lote_actividad_up";
import { lotes } from "./lotes";
import type { lotesAttributes, lotesCreationAttributes } from "./lotes";
import { lotes_coordenadas } from "./lotes_coordenadas";
import type { lotes_coordenadasAttributes, lotes_coordenadasCreationAttributes } from "./lotes_coordenadas";
import { lotes_unidad_productiva } from "./lotes_unidad_productiva";
import type { lotes_unidad_productivaAttributes, lotes_unidad_productivaCreationAttributes } from "./lotes_unidad_productiva";
import { maquinar } from "./maquinar";
import type { maquinarAttributes, maquinarCreationAttributes } from "./maquinar";
import { maquinas_mant } from "./maquinas_mant";
import type { maquinas_mantAttributes, maquinas_mantCreationAttributes } from "./maquinas_mant";
import { maquinas_mant_insumos } from "./maquinas_mant_insumos";
import type { maquinas_mant_insumosAttributes, maquinas_mant_insumosCreationAttributes } from "./maquinas_mant_insumos";
import { maquinas_mant_tareas } from "./maquinas_mant_tareas";
import type { maquinas_mant_tareasAttributes, maquinas_mant_tareasCreationAttributes } from "./maquinas_mant_tareas";
import { mod_insu } from "./mod_insu";
import type { mod_insuAttributes, mod_insuCreationAttributes } from "./mod_insu";
import { mod_tare } from "./mod_tare";
import type { mod_tareAttributes, mod_tareCreationAttributes } from "./mod_tare";
import { mod_tareas_personal } from "./mod_tareas_personal";
import type { mod_tareas_personalAttributes, mod_tareas_personalCreationAttributes } from "./mod_tareas_personal";
import { mod_tareas_riego } from "./mod_tareas_riego";
import type { mod_tareas_riegoAttributes, mod_tareas_riegoCreationAttributes } from "./mod_tareas_riego";
import { modelos } from "./modelos";
import type { modelosAttributes, modelosCreationAttributes } from "./modelos";
import { moneda } from "./moneda";
import type { monedaAttributes, monedaCreationAttributes } from "./moneda";
import { movimientos } from "./movimientos";
import type { movimientosAttributes, movimientosCreationAttributes } from "./movimientos";
import { movimientos_maquinaria } from "./movimientos_maquinaria";
import type { movimientos_maquinariaAttributes, movimientos_maquinariaCreationAttributes } from "./movimientos_maquinaria";
import { nota_pedido } from "./nota_pedido";
import type { nota_pedidoAttributes, nota_pedidoCreationAttributes } from "./nota_pedido";
import { nota_pedido_insumos } from "./nota_pedido_insumos";
import type { nota_pedido_insumosAttributes, nota_pedido_insumosCreationAttributes } from "./nota_pedido_insumos";
import { nov_animales } from "./nov_animales";
import type { nov_animalesAttributes, nov_animalesCreationAttributes } from "./nov_animales";
import { novedades } from "./novedades";
import type { novedadesAttributes, novedadesCreationAttributes } from "./novedades";
import { orden_compra } from "./orden_compra";
import type { orden_compraAttributes, orden_compraCreationAttributes } from "./orden_compra";
import { orden_compra_centros_costo } from "./orden_compra_centros_costo";
import type { orden_compra_centros_costoAttributes, orden_compra_centros_costoCreationAttributes } from "./orden_compra_centros_costo";
import { orden_compra_insumos } from "./orden_compra_insumos";
import type { orden_compra_insumosAttributes, orden_compra_insumosCreationAttributes } from "./orden_compra_insumos";
import { orden_de_compra } from "./orden_de_compra";
import type { orden_de_compraAttributes, orden_de_compraCreationAttributes } from "./orden_de_compra";
import { orden_de_compra_items } from "./orden_de_compra_items";
import type { orden_de_compra_itemsAttributes, orden_de_compra_itemsCreationAttributes } from "./orden_de_compra_items";
import { ordenes_sql } from "./ordenes_sql";
import type { ordenes_sqlAttributes, ordenes_sqlCreationAttributes } from "./ordenes_sql";
import { ordentrabajo } from "./ordentrabajo";
import type { ordentrabajoAttributes, ordentrabajoCreationAttributes } from "./ordentrabajo";
import { ordentrabajo_insumos } from "./ordentrabajo_insumos";
import type { ordentrabajo_insumosAttributes, ordentrabajo_insumosCreationAttributes } from "./ordentrabajo_insumos";
import { ordentrabajo_maquinarias } from "./ordentrabajo_maquinarias";
import type { ordentrabajo_maquinariasAttributes, ordentrabajo_maquinariasCreationAttributes } from "./ordentrabajo_maquinarias";
import { ordentrabajo_personal } from "./ordentrabajo_personal";
import type { ordentrabajo_personalAttributes, ordentrabajo_personalCreationAttributes } from "./ordentrabajo_personal";
import { origen } from "./origen";
import type { origenAttributes, origenCreationAttributes } from "./origen";
import { pais } from "./pais";
import type { paisAttributes, paisCreationAttributes } from "./pais";
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
import { pcuentas } from "./pcuentas";
import type { pcuentasAttributes, pcuentasCreationAttributes } from "./pcuentas";
import { pcuentas_modelo } from "./pcuentas_modelo";
import type { pcuentas_modeloAttributes, pcuentas_modeloCreationAttributes } from "./pcuentas_modelo";
import { periodos } from "./periodos";
import type { periodosAttributes, periodosCreationAttributes } from "./periodos";
import { permisos } from "./permisos";
import type { permisosAttributes, permisosCreationAttributes } from "./permisos";
import { personal } from "./personal";
import type { personalAttributes, personalCreationAttributes } from "./personal";
import { personal_tareas } from "./personal_tareas";
import type { personal_tareasAttributes, personal_tareasCreationAttributes } from "./personal_tareas";
import { pid_cruce_factura_remito } from "./pid_cruce_factura_remito";
import type { pid_cruce_factura_remitoAttributes, pid_cruce_factura_remitoCreationAttributes } from "./pid_cruce_factura_remito";
import { pid_equivalencia_insumo } from "./pid_equivalencia_insumo";
import type { pid_equivalencia_insumoAttributes, pid_equivalencia_insumoCreationAttributes } from "./pid_equivalencia_insumo";
import { pid_equivalencia_proveedor } from "./pid_equivalencia_proveedor";
import type { pid_equivalencia_proveedorAttributes, pid_equivalencia_proveedorCreationAttributes } from "./pid_equivalencia_proveedor";
import { pla_comercializacion } from "./pla_comercializacion";
import type { pla_comercializacionAttributes, pla_comercializacionCreationAttributes } from "./pla_comercializacion";
import { pla_contratistas } from "./pla_contratistas";
import type { pla_contratistasAttributes, pla_contratistasCreationAttributes } from "./pla_contratistas";
import { pla_contratistas_items } from "./pla_contratistas_items";
import type { pla_contratistas_itemsAttributes, pla_contratistas_itemsCreationAttributes } from "./pla_contratistas_items";
import { pla_egresos_actividad } from "./pla_egresos_actividad";
import type { pla_egresos_actividadAttributes, pla_egresos_actividadCreationAttributes } from "./pla_egresos_actividad";
import { pla_egresos_actividad_items } from "./pla_egresos_actividad_items";
import type { pla_egresos_actividad_itemsAttributes, pla_egresos_actividad_itemsCreationAttributes } from "./pla_egresos_actividad_items";
import { pla_financiero_ctas } from "./pla_financiero_ctas";
import type { pla_financiero_ctasAttributes, pla_financiero_ctasCreationAttributes } from "./pla_financiero_ctas";
import { pla_financiero_ctas_items } from "./pla_financiero_ctas_items";
import type { pla_financiero_ctas_itemsAttributes, pla_financiero_ctas_itemsCreationAttributes } from "./pla_financiero_ctas_items";
import { pla_insu } from "./pla_insu";
import type { pla_insuAttributes, pla_insuCreationAttributes } from "./pla_insu";
import { pla_insumos } from "./pla_insumos";
import type { pla_insumosAttributes, pla_insumosCreationAttributes } from "./pla_insumos";
import { pla_insumos_items } from "./pla_insumos_items";
import type { pla_insumos_itemsAttributes, pla_insumos_itemsCreationAttributes } from "./pla_insumos_items";
import { pla_lotes } from "./pla_lotes";
import type { pla_lotesAttributes, pla_lotesCreationAttributes } from "./pla_lotes";
import { pla_lotes_tareas } from "./pla_lotes_tareas";
import type { pla_lotes_tareasAttributes, pla_lotes_tareasCreationAttributes } from "./pla_lotes_tareas";
import { pla_lotes_tareas_insumos } from "./pla_lotes_tareas_insumos";
import type { pla_lotes_tareas_insumosAttributes, pla_lotes_tareas_insumosCreationAttributes } from "./pla_lotes_tareas_insumos";
import { pla_lotes_tareas_riego } from "./pla_lotes_tareas_riego";
import type { pla_lotes_tareas_riegoAttributes, pla_lotes_tareas_riegoCreationAttributes } from "./pla_lotes_tareas_riego";
import { pla_modelos } from "./pla_modelos";
import type { pla_modelosAttributes, pla_modelosCreationAttributes } from "./pla_modelos";
import { pla_modelos_tareas } from "./pla_modelos_tareas";
import type { pla_modelos_tareasAttributes, pla_modelos_tareasCreationAttributes } from "./pla_modelos_tareas";
import { pla_modelos_tareas_insumos } from "./pla_modelos_tareas_insumos";
import type { pla_modelos_tareas_insumosAttributes, pla_modelos_tareas_insumosCreationAttributes } from "./pla_modelos_tareas_insumos";
import { pla_modelos_tareas_riego } from "./pla_modelos_tareas_riego";
import type { pla_modelos_tareas_riegoAttributes, pla_modelos_tareas_riegoCreationAttributes } from "./pla_modelos_tareas_riego";
import { pla_tare } from "./pla_tare";
import type { pla_tareAttributes, pla_tareCreationAttributes } from "./pla_tare";
import { pla_tareas } from "./pla_tareas";
import type { pla_tareasAttributes, pla_tareasCreationAttributes } from "./pla_tareas";
import { pla_tareas_items } from "./pla_tareas_items";
import type { pla_tareas_itemsAttributes, pla_tareas_itemsCreationAttributes } from "./pla_tareas_items";
import { pla_tareas_personal } from "./pla_tareas_personal";
import type { pla_tareas_personalAttributes, pla_tareas_personalCreationAttributes } from "./pla_tareas_personal";
import { pla_tareas_riego } from "./pla_tareas_riego";
import type { pla_tareas_riegoAttributes, pla_tareas_riegoCreationAttributes } from "./pla_tareas_riego";
import { pla_ventas_produccion } from "./pla_ventas_produccion";
import type { pla_ventas_produccionAttributes, pla_ventas_produccionCreationAttributes } from "./pla_ventas_produccion";
import { pla_ventas_produccion_items } from "./pla_ventas_produccion_items";
import type { pla_ventas_produccion_itemsAttributes, pla_ventas_produccion_itemsCreationAttributes } from "./pla_ventas_produccion_items";
import { plan } from "./plan";
import type { planAttributes, planCreationAttributes } from "./plan";
import { planeamiento_lotes } from "./planeamiento_lotes";
import type { planeamiento_lotesAttributes, planeamiento_lotesCreationAttributes } from "./planeamiento_lotes";
import { plani_lluvias } from "./plani_lluvias";
import type { plani_lluviasAttributes, plani_lluviasCreationAttributes } from "./plani_lluvias";
import { presupuesto } from "./presupuesto";
import type { presupuestoAttributes, presupuestoCreationAttributes } from "./presupuesto";
import { presupuestos } from "./presupuestos";
import type { presupuestosAttributes, presupuestosCreationAttributes } from "./presupuestos";
import { produccion } from "./produccion";
import type { produccionAttributes, produccionCreationAttributes } from "./produccion";
import { produccion_cania } from "./produccion_cania";
import type { produccion_caniaAttributes, produccion_caniaCreationAttributes } from "./produccion_cania";
import { produccion_citrus } from "./produccion_citrus";
import type { produccion_citrusAttributes, produccion_citrusCreationAttributes } from "./produccion_citrus";
import { produccion_olivo } from "./produccion_olivo";
import type { produccion_olivoAttributes, produccion_olivoCreationAttributes } from "./produccion_olivo";
//import { producto_rubro } from "./producto_rubro";
//import type { producto_rubroAttributes, producto_rubroCreationAttributes } from "./producto_rubro";
//import { producto_subrubro } from "./producto_subrubro";
//import type { producto_subrubroAttributes, producto_subrubroCreationAttributes } from "./producto_subrubro";
import { promocion_empresa } from "./promocion_empresa";
import type { promocion_empresaAttributes, promocion_empresaCreationAttributes } from "./promocion_empresa";
import { promociones } from "./promociones";
import type { promocionesAttributes, promocionesCreationAttributes } from "./promociones";
import { promociones_plan } from "./promociones_plan";
import type { promociones_planAttributes, promociones_planCreationAttributes } from "./promociones_plan";
import { promociones_plan_empresas } from "./promociones_plan_empresas";
import type { promociones_plan_empresasAttributes, promociones_plan_empresasCreationAttributes } from "./promociones_plan_empresas";
import { proveedor_impuestos } from "./proveedor_impuestos";
import type { proveedor_impuestosAttributes, proveedor_impuestosCreationAttributes } from "./proveedor_impuestos";
import { proveedores } from "./proveedores";
import type { proveedoresAttributes, proveedoresCreationAttributes } from "./proveedores";
import { proveedores_pagos } from "./proveedores_pagos";
import type { proveedores_pagosAttributes, proveedores_pagosCreationAttributes } from "./proveedores_pagos";
import { proveedores_precios_articulos } from "./proveedores_precios_articulos";
import type { proveedores_precios_articulosAttributes, proveedores_precios_articulosCreationAttributes } from "./proveedores_precios_articulos";
import { provincia } from "./provincia";
import type { provinciaAttributes, provinciaCreationAttributes } from "./provincia";
import { puntos_articulos } from "./puntos_articulos";
import type { puntos_articulosAttributes, puntos_articulosCreationAttributes } from "./puntos_articulos";
import { puntos_clientes } from "./puntos_clientes";
import type { puntos_clientesAttributes, puntos_clientesCreationAttributes } from "./puntos_clientes";
import { puntos_config } from "./puntos_config";
import type { puntos_configAttributes, puntos_configCreationAttributes } from "./puntos_config";
import { puntos_de_reposicion } from "./puntos_de_reposicion";
import type { puntos_de_reposicionAttributes, puntos_de_reposicionCreationAttributes } from "./puntos_de_reposicion";
import { puntos_de_venta } from "./puntos_de_venta";
import type { puntos_de_ventaAttributes, puntos_de_ventaCreationAttributes } from "./puntos_de_venta";
import { puntos_de_venta_usuarios } from "./puntos_de_venta_usuarios";
import type { puntos_de_venta_usuariosAttributes, puntos_de_venta_usuariosCreationAttributes } from "./puntos_de_venta_usuarios";
import { puntos_empresas } from "./puntos_empresas";
import type { puntos_empresasAttributes, puntos_empresasCreationAttributes } from "./puntos_empresas";
import { puntos_x_venta } from "./puntos_x_venta";
import type { puntos_x_ventaAttributes, puntos_x_ventaCreationAttributes } from "./puntos_x_venta";
import { raza } from "./raza";
import type { razaAttributes, razaCreationAttributes } from "./raza";
import { registros_borrados } from "./registros_borrados";
import type { registros_borradosAttributes, registros_borradosCreationAttributes } from "./registros_borrados";
import { remitos_campo } from "./remitos_campo";
import type { remitos_campoAttributes, remitos_campoCreationAttributes } from "./remitos_campo";
import { rendicion } from "./rendicion";
import type { rendicionAttributes, rendicionCreationAttributes } from "./rendicion";
import { rendicion_items } from "./rendicion_items";
import type { rendicion_itemsAttributes, rendicion_itemsCreationAttributes } from "./rendicion_items";
import { rodeo } from "./rodeo";
import type { rodeoAttributes, rodeoCreationAttributes } from "./rodeo";
import { rubros } from "./rubros";
import type { rubrosAttributes, rubrosCreationAttributes } from "./rubros";
import { rubros_clientes } from "./rubros_clientes";
import type { rubros_clientesAttributes, rubros_clientesCreationAttributes } from "./rubros_clientes";
import { rubros_iva } from "./rubros_iva";
import type { rubros_ivaAttributes, rubros_ivaCreationAttributes } from "./rubros_iva";
import { sanidad } from "./sanidad";
import type { sanidadAttributes, sanidadCreationAttributes } from "./sanidad";
import { secuencia } from "./secuencia";
import type { secuenciaAttributes, secuenciaCreationAttributes } from "./secuencia";
import { stock } from "./stock";
import type { stockAttributes, stockCreationAttributes } from "./stock";
import { stock_campo } from "./stock_campo";
import type { stock_campoAttributes, stock_campoCreationAttributes } from "./stock_campo";
import { stock_header } from "./stock_header";
import type { stock_headerAttributes, stock_headerCreationAttributes } from "./stock_header";
import { stock_item } from "./stock_item";
import type { stock_itemAttributes, stock_itemCreationAttributes } from "./stock_item";
import { stockheader_estados } from "./stockheader_estados";
import type { stockheader_estadosAttributes, stockheader_estadosCreationAttributes } from "./stockheader_estados";
import { stockheader_movimientos } from "./stockheader_movimientos";
import type { stockheader_movimientosAttributes, stockheader_movimientosCreationAttributes } from "./stockheader_movimientos";
import { subrubros } from "./subrubros";
import type { subrubrosAttributes, subrubrosCreationAttributes } from "./subrubros";
import { superficie_ganadera } from "./superficie_ganadera";
import type { superficie_ganaderaAttributes, superficie_ganaderaCreationAttributes } from "./superficie_ganadera";
import { t_ctacte_marca_saldos } from "./t_ctacte_marca_saldos";
import type { t_ctacte_marca_saldosAttributes, t_ctacte_marca_saldosCreationAttributes } from "./t_ctacte_marca_saldos";
import { t_empresas_servicios } from "./t_empresas_servicios";
import type { t_empresas_serviciosAttributes, t_empresas_serviciosCreationAttributes } from "./t_empresas_servicios";
import { t_inf_saldos_hist } from "./t_inf_saldos_hist";
import type { t_inf_saldos_histAttributes, t_inf_saldos_histCreationAttributes } from "./t_inf_saldos_hist";
import { t_log } from "./t_log";
import type { t_logAttributes, t_logCreationAttributes } from "./t_log";
import { t_pcuentas_establecimientos } from "./t_pcuentas_establecimientos";
import type { t_pcuentas_establecimientosAttributes, t_pcuentas_establecimientosCreationAttributes } from "./t_pcuentas_establecimientos";
import { t_proveedores_marca_saldos } from "./t_proveedores_marca_saldos";
import type { t_proveedores_marca_saldosAttributes, t_proveedores_marca_saldosCreationAttributes } from "./t_proveedores_marca_saldos";
import { tablas } from "./tablas";
import type { tablasAttributes, tablasCreationAttributes } from "./tablas";
import { tarea_concepto } from "./tarea_concepto";
import type { tarea_conceptoAttributes, tarea_conceptoCreationAttributes } from "./tarea_concepto";
import { tareas } from "./tareas";
import type { tareasAttributes, tareasCreationAttributes } from "./tareas";
import { tareas_precios } from "./tareas_precios";
import type { tareas_preciosAttributes, tareas_preciosCreationAttributes } from "./tareas_precios";
import { tareas_seguridad } from "./tareas_seguridad";
import type { tareas_seguridadAttributes, tareas_seguridadCreationAttributes } from "./tareas_seguridad";
import { tarjetas } from "./tarjetas";
import type { tarjetasAttributes, tarjetasCreationAttributes } from "./tarjetas";
import { tarjetas_plan } from "./tarjetas_plan";
import type { tarjetas_planAttributes, tarjetas_planCreationAttributes } from "./tarjetas_plan";
import { tarjetas_plan_empresas } from "./tarjetas_plan_empresas";
import type { tarjetas_plan_empresasAttributes, tarjetas_plan_empresasCreationAttributes } from "./tarjetas_plan_empresas";
import { testing } from "./testing";
import type { testingAttributes, testingCreationAttributes } from "./testing";
import { ticket_comprobante } from "./ticket_comprobante";
import type { ticket_comprobanteAttributes, ticket_comprobanteCreationAttributes } from "./ticket_comprobante";
import { tipo_destino } from "./tipo_destino";
import type { tipo_destinoAttributes, tipo_destinoCreationAttributes } from "./tipo_destino";
import { tipo_impuesto } from "./tipo_impuesto";
import type { tipo_impuestoAttributes, tipo_impuestoCreationAttributes } from "./tipo_impuesto";
import { tipo_mov } from "./tipo_mov";
import type { tipo_movAttributes, tipo_movCreationAttributes } from "./tipo_mov";
import { tipo_servicio_ganaderia } from "./tipo_servicio_ganaderia";
import type { tipo_servicio_ganaderiaAttributes, tipo_servicio_ganaderiaCreationAttributes } from "./tipo_servicio_ganaderia";
import { tipo_ticket } from "./tipo_ticket";
import type { tipo_ticketAttributes, tipo_ticketCreationAttributes } from "./tipo_ticket";
import { tipos_dinero } from "./tipos_dinero";
import type { tipos_dineroAttributes, tipos_dineroCreationAttributes } from "./tipos_dinero";
import { tipos_documentos } from "./tipos_documentos";
import type { tipos_documentosAttributes, tipos_documentosCreationAttributes } from "./tipos_documentos";
import { tipos_documentos_py } from "./tipos_documentos_py";
import type { tipos_documentos_pyAttributes, tipos_documentos_pyCreationAttributes } from "./tipos_documentos_py";
import { tmp_articulos_c } from "./tmp_articulos_c";
import type { tmp_articulos_cAttributes, tmp_articulos_cCreationAttributes } from "./tmp_articulos_c";
import { tmp_libro_mayor } from "./tmp_libro_mayor";
import type { tmp_libro_mayorAttributes, tmp_libro_mayorCreationAttributes } from "./tmp_libro_mayor";
import { tmp_resultado_x_un } from "./tmp_resultado_x_un";
import type { tmp_resultado_x_unAttributes, tmp_resultado_x_unCreationAttributes } from "./tmp_resultado_x_un";
import { transformacion } from "./transformacion";
import type { transformacionAttributes, transformacionCreationAttributes } from "./transformacion";
import { transformacion_items } from "./transformacion_items";
import type { transformacion_itemsAttributes, transformacion_itemsCreationAttributes } from "./transformacion_items";
import { transporte } from "./transporte";
import type { transporteAttributes, transporteCreationAttributes } from "./transporte";
import { tt_actividades } from "./tt_actividades";
import type { tt_actividadesAttributes, tt_actividadesCreationAttributes } from "./tt_actividades";
//import { tt_admstrgest } from "./tt_admstrgest";
//import type { tt_admstrgestAttributes, tt_admstrgestCreationAttributes } from "./tt_admstrgest";
//import { tt_admstrgest_aux } from "./tt_admstrgest_aux";
//import type { tt_admstrgest_auxAttributes, tt_admstrgest_auxCreationAttributes } from "./tt_admstrgest_aux";
//import { tt_admstrmen } from "./tt_admstrmen";
//import type { tt_admstrmenAttributes, tt_admstrmenCreationAttributes } from "./tt_admstrmen";
//import { tt_admstrmen_aux } from "./tt_admstrmen_aux";
//import type { tt_admstrmen_auxAttributes, tt_admstrmen_auxCreationAttributes } from "./tt_admstrmen_aux";
import { tt_animales } from "./tt_animales";
import type { tt_animalesAttributes, tt_animalesCreationAttributes } from "./tt_animales";
import { tt_anticiposvscancel } from "./tt_anticiposvscancel";
import type { tt_anticiposvscancelAttributes, tt_anticiposvscancelCreationAttributes } from "./tt_anticiposvscancel";
import { tt_articulos } from "./tt_articulos";
import type { tt_articulosAttributes, tt_articulosCreationAttributes } from "./tt_articulos";
//import { tt_articulos_existencia } from "./tt_articulos_existencia";
//import type { tt_articulos_existenciaAttributes, tt_articulos_existenciaCreationAttributes } from "./tt_articulos_existencia";
import { tt_articulos_precios_aux } from "./tt_articulos_precios_aux";
import type { tt_articulos_precios_auxAttributes, tt_articulos_precios_auxCreationAttributes } from "./tt_articulos_precios_aux";
import { tt_balance } from "./tt_balance";
import type { tt_balanceAttributes, tt_balanceCreationAttributes } from "./tt_balance";
//import { tt_balance_paso } from "./tt_balance_paso";
//import type { tt_balance_pasoAttributes, tt_balance_pasoCreationAttributes } from "./tt_balance_paso";
import { tt_balance_temp } from "./tt_balance_temp";
import type { tt_balance_tempAttributes, tt_balance_tempCreationAttributes } from "./tt_balance_temp";
//import { tt_cab_admstrmen } from "./tt_cab_admstrmen";
//import type { tt_cab_admstrmenAttributes, tt_cab_admstrmenCreationAttributes } from "./tt_cab_admstrmen";
import { tt_cashflow_aux1 } from "./tt_cashflow_aux1";
import type { tt_cashflow_aux1Attributes, tt_cashflow_aux1CreationAttributes } from "./tt_cashflow_aux1";
import { tt_cheques } from "./tt_cheques";
import type { tt_chequesAttributes, tt_chequesCreationAttributes } from "./tt_cheques";
import { tt_cheques_salidos } from "./tt_cheques_salidos";
import type { tt_cheques_salidosAttributes, tt_cheques_salidosCreationAttributes } from "./tt_cheques_salidos";
import { tt_clientes } from "./tt_clientes";
import type { tt_clientesAttributes, tt_clientesCreationAttributes } from "./tt_clientes";
import { tt_clientes_ctacte_saldos } from "./tt_clientes_ctacte_saldos";
import type { tt_clientes_ctacte_saldosAttributes, tt_clientes_ctacte_saldosCreationAttributes } from "./tt_clientes_ctacte_saldos";
import { tt_clientes_ctacte_saldos_aux } from "./tt_clientes_ctacte_saldos_aux";
import type { tt_clientes_ctacte_saldos_auxAttributes, tt_clientes_ctacte_saldos_auxCreationAttributes } from "./tt_clientes_ctacte_saldos_aux";
import { tt_clientes_saldos_aux } from "./tt_clientes_saldos_aux";
import type { tt_clientes_saldos_auxAttributes, tt_clientes_saldos_auxCreationAttributes } from "./tt_clientes_saldos_aux";
import { tt_comp_numero } from "./tt_comp_numero";
import type { tt_comp_numeroAttributes, tt_comp_numeroCreationAttributes } from "./tt_comp_numero";
import { tt_comprobantes_pendientes } from "./tt_comprobantes_pendientes";
import type { tt_comprobantes_pendientesAttributes, tt_comprobantes_pendientesCreationAttributes } from "./tt_comprobantes_pendientes";
import { tt_cons_stock } from "./tt_cons_stock";
import type { tt_cons_stockAttributes, tt_cons_stockCreationAttributes } from "./tt_cons_stock";
import { tt_cons_stock_aux } from "./tt_cons_stock_aux";
import type { tt_cons_stock_auxAttributes, tt_cons_stock_auxCreationAttributes } from "./tt_cons_stock_aux";
import { tt_cosecha } from "./tt_cosecha";
import type { tt_cosechaAttributes, tt_cosechaCreationAttributes } from "./tt_cosecha";
import { tt_cotizacion } from "./tt_cotizacion";
import type { tt_cotizacionAttributes, tt_cotizacionCreationAttributes } from "./tt_cotizacion";
import { tt_cpro_aux } from "./tt_cpro_aux";
import type { tt_cpro_auxAttributes, tt_cpro_auxCreationAttributes } from "./tt_cpro_aux";
import { tt_ctas_aux } from "./tt_ctas_aux";
import type { tt_ctas_auxAttributes, tt_ctas_auxCreationAttributes } from "./tt_ctas_aux";
//import { tt_ctrl_cosecha } from "./tt_ctrl_cosecha";
//import type { tt_ctrl_cosechaAttributes, tt_ctrl_cosechaCreationAttributes } from "./tt_ctrl_cosecha";
//import { tt_ctrl_cosecha_aux } from "./tt_ctrl_cosecha_aux";
//import type { tt_ctrl_cosecha_auxAttributes, tt_ctrl_cosecha_auxCreationAttributes } from "./tt_ctrl_cosecha_aux";
import { tt_cuentas } from "./tt_cuentas";
import type { tt_cuentasAttributes, tt_cuentasCreationAttributes } from "./tt_cuentas";
//import { tt_cuentas_cashflow } from "./tt_cuentas_cashflow";
//import type { tt_cuentas_cashflowAttributes, tt_cuentas_cashflowCreationAttributes } from "./tt_cuentas_cashflow";
import { tt_cuentas_disponibilidades_saldos } from "./tt_cuentas_disponibilidades_saldos";
import type { tt_cuentas_disponibilidades_saldosAttributes, tt_cuentas_disponibilidades_saldosCreationAttributes } from "./tt_cuentas_disponibilidades_saldos";
import { tt_cuentas_disponibilidades_saldos_aux } from "./tt_cuentas_disponibilidades_saldos_aux";
import type { tt_cuentas_disponibilidades_saldos_auxAttributes, tt_cuentas_disponibilidades_saldos_auxCreationAttributes } from "./tt_cuentas_disponibilidades_saldos_aux";
import { tt_cuentas_nivel } from "./tt_cuentas_nivel";
import type { tt_cuentas_nivelAttributes, tt_cuentas_nivelCreationAttributes } from "./tt_cuentas_nivel";
import { tt_cuentas_saldos } from "./tt_cuentas_saldos";
import type { tt_cuentas_saldosAttributes, tt_cuentas_saldosCreationAttributes } from "./tt_cuentas_saldos";
import { tt_cuentas_saldos_aux } from "./tt_cuentas_saldos_aux";
import type { tt_cuentas_saldos_auxAttributes, tt_cuentas_saldos_auxCreationAttributes } from "./tt_cuentas_saldos_aux";
import { tt_debug } from "./tt_debug";
import type { tt_debugAttributes, tt_debugCreationAttributes } from "./tt_debug";
import { tt_deposito } from "./tt_deposito";
import type { tt_depositoAttributes, tt_depositoCreationAttributes } from "./tt_deposito";
import { tt_empresa } from "./tt_empresa";
import type { tt_empresaAttributes, tt_empresaCreationAttributes } from "./tt_empresa";
import { tt_empresas_servicios } from "./tt_empresas_servicios";
import type { tt_empresas_serviciosAttributes, tt_empresas_serviciosCreationAttributes } from "./tt_empresas_servicios";
import { tt_establecimientos } from "./tt_establecimientos";
import type { tt_establecimientosAttributes, tt_establecimientosCreationAttributes } from "./tt_establecimientos";
import { tt_existencias_stock } from "./tt_existencias_stock";
import type { tt_existencias_stockAttributes, tt_existencias_stockCreationAttributes } from "./tt_existencias_stock";
//import { tt_fechas_cashflow } from "./tt_fechas_cashflow";
//import type { tt_fechas_cashflowAttributes, tt_fechas_cashflowCreationAttributes } from "./tt_fechas_cashflow";
import { tt_fiscal } from "./tt_fiscal";
import type { tt_fiscalAttributes, tt_fiscalCreationAttributes } from "./tt_fiscal";
import { tt_import_archivo_ingenio } from "./tt_import_archivo_ingenio";
import type { tt_import_archivo_ingenioAttributes, tt_import_archivo_ingenioCreationAttributes } from "./tt_import_archivo_ingenio";
//import { tt_inf_provcontflet } from "./tt_inf_provcontflet";
//import type { tt_inf_provcontfletAttributes, tt_inf_provcontfletCreationAttributes } from "./tt_inf_provcontflet";
//import { tt_inf_provcontflet_aux } from "./tt_inf_provcontflet_aux";
//import type { tt_inf_provcontflet_auxAttributes, tt_inf_provcontflet_auxCreationAttributes } from "./tt_inf_provcontflet_aux";
import { tt_inventario } from "./tt_inventario";
import type { tt_inventarioAttributes, tt_inventarioCreationAttributes } from "./tt_inventario";
import { tt_inventario_animales } from "./tt_inventario_animales";
import type { tt_inventario_animalesAttributes, tt_inventario_animalesCreationAttributes } from "./tt_inventario_animales";
import { tt_invganadero } from "./tt_invganadero";
import type { tt_invganaderoAttributes, tt_invganaderoCreationAttributes } from "./tt_invganadero";
import { tt_invganadero_aux } from "./tt_invganadero_aux";
import type { tt_invganadero_auxAttributes, tt_invganadero_auxCreationAttributes } from "./tt_invganadero_aux";
import { tt_log } from "./tt_log";
import type { tt_logAttributes, tt_logCreationAttributes } from "./tt_log";
import { tt_lote_actividad } from "./tt_lote_actividad";
import type { tt_lote_actividadAttributes, tt_lote_actividadCreationAttributes } from "./tt_lote_actividad";
import { tt_nov_animales } from "./tt_nov_animales";
import type { tt_nov_animalesAttributes, tt_nov_animalesCreationAttributes } from "./tt_nov_animales";
import { tt_nov_insumos } from "./tt_nov_insumos";
import type { tt_nov_insumosAttributes, tt_nov_insumosCreationAttributes } from "./tt_nov_insumos";
import { tt_novedades } from "./tt_novedades";
import type { tt_novedadesAttributes, tt_novedadesCreationAttributes } from "./tt_novedades";
import { tt_parametros } from "./tt_parametros";
import type { tt_parametrosAttributes, tt_parametrosCreationAttributes } from "./tt_parametros";
import { tt_periodos } from "./tt_periodos";
import type { tt_periodosAttributes, tt_periodosCreationAttributes } from "./tt_periodos";
import { tt_pla_insumos } from "./tt_pla_insumos";
import type { tt_pla_insumosAttributes, tt_pla_insumosCreationAttributes } from "./tt_pla_insumos";
import { tt_plapaggral } from "./tt_plapaggral";
import type { tt_plapaggralAttributes, tt_plapaggralCreationAttributes } from "./tt_plapaggral";
import { tt_plapaggral_aux } from "./tt_plapaggral_aux";
import type { tt_plapaggral_auxAttributes, tt_plapaggral_auxCreationAttributes } from "./tt_plapaggral_aux";
import { tt_proveedor_cliente } from "./tt_proveedor_cliente";
import type { tt_proveedor_clienteAttributes, tt_proveedor_clienteCreationAttributes } from "./tt_proveedor_cliente";
import { tt_proveedores } from "./tt_proveedores";
import type { tt_proveedoresAttributes, tt_proveedoresCreationAttributes } from "./tt_proveedores";
import { tt_proveedores_ctacte_saldos } from "./tt_proveedores_ctacte_saldos";
import type { tt_proveedores_ctacte_saldosAttributes, tt_proveedores_ctacte_saldosCreationAttributes } from "./tt_proveedores_ctacte_saldos";
import { tt_proveedores_ctacte_saldos_aux } from "./tt_proveedores_ctacte_saldos_aux";
import type { tt_proveedores_ctacte_saldos_auxAttributes, tt_proveedores_ctacte_saldos_auxCreationAttributes } from "./tt_proveedores_ctacte_saldos_aux";
import { tt_proveedores_saldos_aux } from "./tt_proveedores_saldos_aux";
import type { tt_proveedores_saldos_auxAttributes, tt_proveedores_saldos_auxCreationAttributes } from "./tt_proveedores_saldos_aux";
//import { tt_renumera } from "./tt_renumera";
//import type { tt_renumeraAttributes, tt_renumeraCreationAttributes } from "./tt_renumera";
import { tt_res_emp_servicios } from "./tt_res_emp_servicios";
import type { tt_res_emp_serviciosAttributes, tt_res_emp_serviciosCreationAttributes } from "./tt_res_emp_servicios";
import { tt_res_emp_servicios_aux } from "./tt_res_emp_servicios_aux";
import type { tt_res_emp_servicios_auxAttributes, tt_res_emp_servicios_auxCreationAttributes } from "./tt_res_emp_servicios_aux";
import { tt_resultado_actividades } from "./tt_resultado_actividades";
import type { tt_resultado_actividadesAttributes, tt_resultado_actividadesCreationAttributes } from "./tt_resultado_actividades";
import { tt_resultado_actividades_aux } from "./tt_resultado_actividades_aux";
import type { tt_resultado_actividades_auxAttributes, tt_resultado_actividades_auxCreationAttributes } from "./tt_resultado_actividades_aux";
import { tt_sql } from "./tt_sql";
import type { tt_sqlAttributes, tt_sqlCreationAttributes } from "./tt_sql";
import { tt_stock_paso } from "./tt_stock_paso";
import type { tt_stock_pasoAttributes, tt_stock_pasoCreationAttributes } from "./tt_stock_paso";
import { tt_tesoreria } from "./tt_tesoreria";
import type { tt_tesoreriaAttributes, tt_tesoreriaCreationAttributes } from "./tt_tesoreria";
//import { tt_tesoreria_aux } from "./tt_tesoreria_aux";
//import type { tt_tesoreria_auxAttributes, tt_tesoreria_auxCreationAttributes } from "./tt_tesoreria_aux";
import { tt_tesoreria_caso1 } from "./tt_tesoreria_caso1";
import type { tt_tesoreria_caso1Attributes, tt_tesoreria_caso1CreationAttributes } from "./tt_tesoreria_caso1";
import { tt_tesoreria_retenciones } from "./tt_tesoreria_retenciones";
import type { tt_tesoreria_retencionesAttributes, tt_tesoreria_retencionesCreationAttributes } from "./tt_tesoreria_retenciones";
//import { tt_tipo_comprobante } from "./tt_tipo_comprobante";
//import type { tt_tipo_comprobanteAttributes, tt_tipo_comprobanteCreationAttributes } from "./tt_tipo_comprobante";
import { tt_unidad_negocio } from "./tt_unidad_negocio";
import type { tt_unidad_negocioAttributes, tt_unidad_negocioCreationAttributes } from "./tt_unidad_negocio";
import { tt_up } from "./tt_up";
import type { tt_upAttributes, tt_upCreationAttributes } from "./tt_up";
import { tt_usuarios_seleccion } from "./tt_usuarios_seleccion";
import type { tt_usuarios_seleccionAttributes, tt_usuarios_seleccionCreationAttributes } from "./tt_usuarios_seleccion";
import { tt_volcado_impuestos } from "./tt_volcado_impuestos";
import type { tt_volcado_impuestosAttributes, tt_volcado_impuestosCreationAttributes } from "./tt_volcado_impuestos";
import { turnos } from "./turnos";
import type { turnosAttributes, turnosCreationAttributes } from "./turnos";
import { unidad_de_medida } from "./unidad_de_medida";
import type { unidad_de_medidaAttributes, unidad_de_medidaCreationAttributes } from "./unidad_de_medida";
import { unidad_negocio } from "./unidad_negocio";
import type { unidad_negocioAttributes, unidad_negocioCreationAttributes } from "./unidad_negocio";
import { unidad_productiva } from "./unidad_productiva";
import type { unidad_productivaAttributes, unidad_productivaCreationAttributes } from "./unidad_productiva";
import { unidades } from "./unidades";
import type { unidadesAttributes, unidadesCreationAttributes } from "./unidades";
import { usuarios } from "./usuarios";
import type { usuariosAttributes, usuariosCreationAttributes } from "./usuarios";
import { usuarios_campo } from "./usuarios_campo";
import type { usuarios_campoAttributes, usuarios_campoCreationAttributes } from "./usuarios_campo";
import { usuarios_depositos } from "./usuarios_depositos";
import type { usuarios_depositosAttributes, usuarios_depositosCreationAttributes } from "./usuarios_depositos";
import { usuarios_permisos } from "./usuarios_permisos";
import type { usuarios_permisosAttributes, usuarios_permisosCreationAttributes } from "./usuarios_permisos";
import { usuarios_tareas } from "./usuarios_tareas";
import type { usuarios_tareasAttributes, usuarios_tareasCreationAttributes } from "./usuarios_tareas";
import { vendedores } from "./vendedores";
import type { vendedoresAttributes, vendedoresCreationAttributes } from "./vendedores";
import { ventas } from "./ventas";
import type { ventasAttributes, ventasCreationAttributes } from "./ventas";
import { ventas_cert_deposito } from "./ventas_cert_deposito";
import type { ventas_cert_depositoAttributes, ventas_cert_depositoCreationAttributes } from "./ventas_cert_deposito";
import { ventas_facturas } from "./ventas_facturas";
import type { ventas_facturasAttributes, ventas_facturasCreationAttributes } from "./ventas_facturas";
import { ventas_items } from "./ventas_items";
import type { ventas_itemsAttributes, ventas_itemsCreationAttributes } from "./ventas_items";
import { ventas_items_serie } from "./ventas_items_serie";
import type { ventas_items_serieAttributes, ventas_items_serieCreationAttributes } from "./ventas_items_serie";
import { ventas_medio_de_pago } from "./ventas_medio_de_pago";
import type { ventas_medio_de_pagoAttributes, ventas_medio_de_pagoCreationAttributes } from "./ventas_medio_de_pago";
import { ventas_pagos } from "./ventas_pagos";
import type { ventas_pagosAttributes, ventas_pagosCreationAttributes } from "./ventas_pagos";
import { ventas_produccion } from "./ventas_produccion";
import type { ventas_produccionAttributes, ventas_produccionCreationAttributes } from "./ventas_produccion";
import { ventas_remitos_facturas } from "./ventas_remitos_facturas";
import type { ventas_remitos_facturasAttributes, ventas_remitos_facturasCreationAttributes } from "./ventas_remitos_facturas";
import { ventas_retenciones } from "./ventas_retenciones";
import type { ventas_retencionesAttributes, ventas_retencionesCreationAttributes } from "./ventas_retenciones";
import { ventas_transporte } from "./ventas_transporte";
import type { ventas_transporteAttributes, ventas_transporteCreationAttributes } from "./ventas_transporte";
import { ventas_unidad_item } from "./ventas_unidad_item";
import type { ventas_unidad_itemAttributes, ventas_unidad_itemCreationAttributes } from "./ventas_unidad_item";
import { ventas_vencimientos } from "./ventas_vencimientos";
import type { ventas_vencimientosAttributes, ventas_vencimientosCreationAttributes } from "./ventas_vencimientos";
import { volcada } from "./volcada";
import type { volcadaAttributes, volcadaCreationAttributes } from "./volcada";
import { webservice } from "./webservice";
import type { webserviceAttributes, webserviceCreationAttributes } from "./webservice";
import { webservice_afip } from "./webservice_afip";
import type { webservice_afipAttributes, webservice_afipCreationAttributes } from "./webservice_afip";

export {
  act_categoria,
  actividad,
  actividad_periodo,
  actividades_campo,
  actualizacion,
  actualizacion_dolar,
  actualizacion_utas,
  afip_comprobantes,
  afip_comprobantes_codigos,
  afip_conceptos,
  afip_cosechas,
  afip_cuitdest,
  afip_especies,
  afip_idiomas,
  afip_incoterms,
  afip_localidades,
  afip_monedas,
  afip_nomenclador,
  afip_paises,
  afip_provincias,
  afip_puntos_ventas,
  afip_texportacion,
  afip_tipos_datos_opcional,
  afip_tipos_documentos,
  afip_tipos_iva,
  afip_tipos_tributos,
  afip_unimed,
  ajustes,
  amortizaciones,
  animales,
  animales_estados,
  aplicaciones,
  arch_importados,
  //archivo_arba,
  articulo_equiv_unidades,
  articulos,
  articulos_caracteristicas,
  articulos_caracteristicas_valores,
  articulos_serie,
  articulos_tags,
  articulos_transformacion,
  articulos_unidad_medida,
  asientos,
  asientos_items,
  asientos_iva,
  asignar_rubros,
  //atributo,
  atributos_de_precios,
  bancos,
  bases_contables,
  basicos,
  borrados,
  cab_lista_precio,
  cajas,
  cania_peladores,
  //carta_porte,
  //carta_porte_det,
  categoria,
  categoria_aplicativos,
  categoria_iva,
  chequeras,
  cierres_fiscales,
  clientes,
  clientes2,
  clientes_acuerdos,
  clientes_destinos,
  clientes_domicilios,
  clientes_impuestos,
  clientes_pagos,
  clientes_seguimiento,
  colores,
  comision_x_vendedor,
  compras,
  compras_comprob_ingresos_bruto,
  compras_comprob_retencion,
  compras_facturas,
  compras_items,
  //compras_items_remitos,
  compras_labores,
  compras_pagos,
  compras_produccion,
  compras_remitos,
  compras_retenciones,
  compras_retenciones_detalle,
  compras_stock_items,
  compras_vencimientos,
  comprobantes_destino,
  comprobantes_formatos,
  comprobantes_formatos_default,
  comprobantes_relacion,
  //conceptos,
  condicion_venta_tipo,
  conf_colores_deudas,
  conf_ejercicio_economico,
  config,
  config_app,
  config_campo,
  config_circuitos,
  config_importacion,
  config_iva,
  config_parametros,
  config_redondeos,
  config_volcado_impuestos,
  configuracion_libro_iva,
  //contratos,
  coordenadas,
  cotizacion,
  cta_cble_grupo,
  cta_cble_grupo_item,
  cuadrillas,
  cuentas,
  cuentas_cash_flow,
  cuentas_cruce,
  cuentas_disponibilidades,
  cuentas_frecuentes,
  cuentas_ingenio,
  cuentas_lotes,
  cuentas_predef_ganaderia,
  cuentas_predefinidas,
  datawindows,
  datos_basicos1,
  datos_basicos2,
  datos_basicos3,
  datos_basicos4,
  datos_climaticos,
  datos_climaticos_items,
  depositos,
  destino_precios,
  //destinos,
  destinos_campo,
  destinos_direcciones,
  //destinos_formulas,
  destinos_stock,
  distanci,
  ec_articulos,
  ec_articulos_imagenes,
  ec_carrito,
  ec_categorias_ml,
  ec_clientes,
  ec_config,
  ec_config_circuitos,
  ec_config_parametros,
  ec_rubros,
  ec_subrubros,
  ec_tipos_envios,
  ec_ventas,
  ec_ventas_items,
  empresa_choferes,
  empresas,
  entidades,
  equivalencias_packing,
  estab_actividad,
  estab_categoria,
  establecimiento,
  establecimientos_depositos,
  fac_elect_xempresa,
  figuras,
  figuras_items,
  filtro_animales,
  filtro_cania,
  filtro_citrus,
  filtro_granos,
  filtro_labores,
  filtro_mov_per,
  filtro_orden_trabajo,
  filtro_plantacion,
  filtro_stock,
  filtro_vales,
  finan_contratistas,
  fmt_carta_porte,
  //fmt_carta_porte_det,
  formato_aplicativo,
  formulas_variables,
  generador_formula,
  gest_identificador,
  gest_identificador_movimientos,
  grafico,
  grupo_animales,
  grupo_caracteristicas,
  //grupo_destino,
  harroz,
  havena,
  hcebada,
  hcenteno,
  hchia,
  hcolza,
  hgarbanzo,
  hgirasol,
  hist_peso_categoria,
  hist_precio_categoria,
  hlino,
  hlupino,
  hmaiz,
  hmani,
  hmijo,
  hmoha,
  hoja_de_ruta,
  hoja_de_ruta_items,
  hoja_ruta_estado,
  hquinoa,
  hsoja,
  hsorgo,
  htrigo,
  htriticale,
  hviciavillosa,
  identificador,
  identificador_campo,
  im_usuarios,
  importacion_declaracion,
  importacion_items,
  impresoras,
  impresoras_fiscales,
  impuestos,
  impuestos_cabecera,
  impuestotercero,
  impuestotercero_items,
  indice_de_precios,
  inseminacion,
  insumos_ordenes_trabajo,
  items_cruces,
  items_facturas_cpos,
  l_margen_bruto,
  labores,
  labores_insumos,
  labores_log_externo,
  labores_mant_tareas,
  labores_maquinarias,
  labores_personal,
  lista_precios,
  lluvias,
  localidad,
  lote_actividad,
  lote_actividad_up,
  lotes,
  lotes_coordenadas,
  lotes_unidad_productiva,
  maquinar,
  maquinas_mant,
  maquinas_mant_insumos,
  maquinas_mant_tareas,
  mod_insu,
  mod_tare,
  mod_tareas_personal,
  mod_tareas_riego,
  modelos,
  moneda,
  movimientos,
  movimientos_maquinaria,
  nota_pedido,
  nota_pedido_insumos,
  nov_animales,
  novedades,
  orden_compra,
  orden_compra_centros_costo,
  orden_compra_insumos,
  orden_de_compra,
  orden_de_compra_items,
  ordenes_sql,
  ordentrabajo,
  ordentrabajo_insumos,
  ordentrabajo_maquinarias,
  ordentrabajo_personal,
  origen,
  pais,
  //pbcatcol,
  //pbcatedt,
  //pbcatfmt,
  //pbcattbl,
  //pbcatvld,
  pcuentas,
  pcuentas_modelo,
  periodos,
  permisos,
  personal,
  personal_tareas,
  pid_cruce_factura_remito,
  pid_equivalencia_insumo,
  pid_equivalencia_proveedor,
  pla_comercializacion,
  pla_contratistas,
  pla_contratistas_items,
  pla_egresos_actividad,
  pla_egresos_actividad_items,
  pla_financiero_ctas,
  pla_financiero_ctas_items,
  pla_insu,
  pla_insumos,
  pla_insumos_items,
  pla_lotes,
  pla_lotes_tareas,
  pla_lotes_tareas_insumos,
  pla_lotes_tareas_riego,
  pla_modelos,
  pla_modelos_tareas,
  pla_modelos_tareas_insumos,
  pla_modelos_tareas_riego,
  pla_tare,
  pla_tareas,
  pla_tareas_items,
  pla_tareas_personal,
  pla_tareas_riego,
  pla_ventas_produccion,
  pla_ventas_produccion_items,
  plan,
  planeamiento_lotes,
  plani_lluvias,
  presupuesto,
  presupuestos,
  produccion,
  produccion_cania,
  produccion_citrus,
  produccion_olivo,
  //producto_rubro,
  //producto_subrubro,
  promocion_empresa,
  promociones,
  promociones_plan,
  promociones_plan_empresas,
  proveedor_impuestos,
  proveedores,
  proveedores_pagos,
  proveedores_precios_articulos,
  provincia,
  puntos_articulos,
  puntos_clientes,
  puntos_config,
  puntos_de_reposicion,
  puntos_de_venta,
  puntos_de_venta_usuarios,
  puntos_empresas,
  puntos_x_venta,
  raza,
  registros_borrados,
  remitos_campo,
  rendicion,
  rendicion_items,
  rodeo,
  rubros,
  rubros_clientes,
  rubros_iva,
  sanidad,
  secuencia,
  stock,
  stock_campo,
  stock_header,
  stock_item,
  stockheader_estados,
  stockheader_movimientos,
  subrubros,
  superficie_ganadera,
  t_ctacte_marca_saldos,
  t_empresas_servicios,
  t_inf_saldos_hist,
  t_log,
  t_pcuentas_establecimientos,
  t_proveedores_marca_saldos,
  tablas,
  tarea_concepto,
  tareas,
  tareas_precios,
  tareas_seguridad,
  tarjetas,
  tarjetas_plan,
  tarjetas_plan_empresas,
  testing,
  ticket_comprobante,
  tipo_destino,
  tipo_impuesto,
  tipo_mov,
  tipo_servicio_ganaderia,
  tipo_ticket,
  tipos_dinero,
  tipos_documentos,
  tipos_documentos_py,
  tmp_articulos_c,
  tmp_libro_mayor,
  tmp_resultado_x_un,
  transformacion,
  transformacion_items,
  transporte,
  tt_actividades,
  //tt_admstrgest,
  //tt_admstrgest_aux,
  //tt_admstrmen,
  //tt_admstrmen_aux,
  tt_animales,
  tt_anticiposvscancel,
  tt_articulos,
  //tt_articulos_existencia,
  tt_articulos_precios_aux,
  tt_balance,
  //tt_balance_paso,
  tt_balance_temp,
  //tt_cab_admstrmen,
  tt_cashflow_aux1,
  tt_cheques,
  tt_cheques_salidos,
  tt_clientes,
  tt_clientes_ctacte_saldos,
  tt_clientes_ctacte_saldos_aux,
  tt_clientes_saldos_aux,
  tt_comp_numero,
  tt_comprobantes_pendientes,
  tt_cons_stock,
  tt_cons_stock_aux,
  tt_cosecha,
  tt_cotizacion,
  tt_cpro_aux,
  tt_ctas_aux,
  //tt_ctrl_cosecha,
  //tt_ctrl_cosecha_aux,
  tt_cuentas,
  //tt_cuentas_cashflow,
  tt_cuentas_disponibilidades_saldos,
  tt_cuentas_disponibilidades_saldos_aux,
  tt_cuentas_nivel,
  tt_cuentas_saldos,
  tt_cuentas_saldos_aux,
  tt_debug,
  tt_deposito,
  tt_empresa,
  tt_empresas_servicios,
  tt_establecimientos,
  tt_existencias_stock,
  //tt_fechas_cashflow,
  tt_fiscal,
  tt_import_archivo_ingenio,
  //tt_inf_provcontflet,
  //tt_inf_provcontflet_aux,
  tt_inventario,
  tt_inventario_animales,
  tt_invganadero,
  tt_invganadero_aux,
  tt_log,
  tt_lote_actividad,
  tt_nov_animales,
  tt_nov_insumos,
  tt_novedades,
  tt_parametros,
  tt_periodos,
  tt_pla_insumos,
  tt_plapaggral,
  tt_plapaggral_aux,
  tt_proveedor_cliente,
  tt_proveedores,
  tt_proveedores_ctacte_saldos,
  tt_proveedores_ctacte_saldos_aux,
  tt_proveedores_saldos_aux,
  //tt_renumera,
  tt_res_emp_servicios,
  tt_res_emp_servicios_aux,
  tt_resultado_actividades,
  tt_resultado_actividades_aux,
  tt_sql,
  tt_stock_paso,
  tt_tesoreria,
  //tt_tesoreria_aux,
  tt_tesoreria_caso1,
  tt_tesoreria_retenciones,
  //tt_tipo_comprobante,
  tt_unidad_negocio,
  tt_up,
  tt_usuarios_seleccion,
  tt_volcado_impuestos,
  turnos,
  unidad_de_medida,
  unidad_negocio,
  unidad_productiva,
  unidades,
  usuarios,
  usuarios_campo,
  usuarios_depositos,
  usuarios_permisos,
  usuarios_tareas,
  vendedores,
  ventas,
  ventas_cert_deposito,
  ventas_facturas,
  ventas_items,
  ventas_items_serie,
  ventas_medio_de_pago,
  ventas_pagos,
  ventas_produccion,
  ventas_remitos_facturas,
  ventas_retenciones,
  ventas_transporte,
  ventas_unidad_item,
  ventas_vencimientos,
  volcada,
  webservice,
  webservice_afip,
};

export type {
  act_categoriaAttributes,
  act_categoriaCreationAttributes,
  actividadAttributes,
  actividadCreationAttributes,
  actividad_periodoAttributes,
  actividad_periodoCreationAttributes,
  actividades_campoAttributes,
  actividades_campoCreationAttributes,
  actualizacionAttributes,
  actualizacionCreationAttributes,
  actualizacion_dolarAttributes,
  actualizacion_dolarCreationAttributes,
  actualizacion_utasAttributes,
  actualizacion_utasCreationAttributes,
  afip_comprobantesAttributes,
  afip_comprobantesCreationAttributes,
  afip_comprobantes_codigosAttributes,
  afip_comprobantes_codigosCreationAttributes,
  afip_conceptosAttributes,
  afip_conceptosCreationAttributes,
  afip_cosechasAttributes,
  afip_cosechasCreationAttributes,
  afip_cuitdestAttributes,
  afip_cuitdestCreationAttributes,
  afip_especiesAttributes,
  afip_especiesCreationAttributes,
  afip_idiomasAttributes,
  afip_idiomasCreationAttributes,
  afip_incotermsAttributes,
  afip_incotermsCreationAttributes,
  afip_localidadesAttributes,
  afip_localidadesCreationAttributes,
  afip_monedasAttributes,
  afip_monedasCreationAttributes,
  afip_nomencladorAttributes,
  afip_nomencladorCreationAttributes,
  afip_paisesAttributes,
  afip_paisesCreationAttributes,
  afip_provinciasAttributes,
  afip_provinciasCreationAttributes,
  afip_puntos_ventasAttributes,
  afip_puntos_ventasCreationAttributes,
  afip_texportacionAttributes,
  afip_texportacionCreationAttributes,
  afip_tipos_datos_opcionalAttributes,
  afip_tipos_datos_opcionalCreationAttributes,
  afip_tipos_documentosAttributes,
  afip_tipos_documentosCreationAttributes,
  afip_tipos_ivaAttributes,
  afip_tipos_ivaCreationAttributes,
  afip_tipos_tributosAttributes,
  afip_tipos_tributosCreationAttributes,
  afip_unimedAttributes,
  afip_unimedCreationAttributes,
  ajustesAttributes,
  ajustesCreationAttributes,
  amortizacionesAttributes,
  amortizacionesCreationAttributes,
  animalesAttributes,
  animalesCreationAttributes,
  animales_estadosAttributes,
  animales_estadosCreationAttributes,
  aplicacionesAttributes,
  aplicacionesCreationAttributes,
  arch_importadosAttributes,
  arch_importadosCreationAttributes,
  //archivo_arbaAttributes,
  //archivo_arbaCreationAttributes,
  articulo_equiv_unidadesAttributes,
  articulo_equiv_unidadesCreationAttributes,
  articulosAttributes,
  articulosCreationAttributes,
  articulos_caracteristicasAttributes,
  articulos_caracteristicasCreationAttributes,
  articulos_caracteristicas_valoresAttributes,
  articulos_caracteristicas_valoresCreationAttributes,
  articulos_serieAttributes,
  articulos_serieCreationAttributes,
  articulos_tagsAttributes,
  articulos_tagsCreationAttributes,
  articulos_transformacionAttributes,
  articulos_transformacionCreationAttributes,
  articulos_unidad_medidaAttributes,
  articulos_unidad_medidaCreationAttributes,
  asientosAttributes,
  asientosCreationAttributes,
  asientos_itemsAttributes,
  asientos_itemsCreationAttributes,
  asientos_ivaAttributes,
  asientos_ivaCreationAttributes,
  asignar_rubrosAttributes,
  asignar_rubrosCreationAttributes,
  //atributoAttributes,
  //atributoCreationAttributes,
  atributos_de_preciosAttributes,
  atributos_de_preciosCreationAttributes,
  bancosAttributes,
  bancosCreationAttributes,
  bases_contablesAttributes,
  bases_contablesCreationAttributes,
  basicosAttributes,
  basicosCreationAttributes,
  borradosAttributes,
  borradosCreationAttributes,
  cab_lista_precioAttributes,
  cab_lista_precioCreationAttributes,
  cajasAttributes,
  cajasCreationAttributes,
  cania_peladoresAttributes,
  cania_peladoresCreationAttributes,
  //carta_porteAttributes,
  //carta_porteCreationAttributes,
  //carta_porte_detAttributes,
  //carta_porte_detCreationAttributes,
  categoriaAttributes,
  categoriaCreationAttributes,
  categoria_aplicativosAttributes,
  categoria_aplicativosCreationAttributes,
  categoria_ivaAttributes,
  categoria_ivaCreationAttributes,
  chequerasAttributes,
  chequerasCreationAttributes,
  cierres_fiscalesAttributes,
  cierres_fiscalesCreationAttributes,
  clientesAttributes,
  clientesCreationAttributes,
  clientes2Attributes,
  clientes2CreationAttributes,
  clientes_acuerdosAttributes,
  clientes_acuerdosCreationAttributes,
  clientes_destinosAttributes,
  clientes_destinosCreationAttributes,
  clientes_domiciliosAttributes,
  clientes_domiciliosCreationAttributes,
  clientes_impuestosAttributes,
  clientes_impuestosCreationAttributes,
  clientes_pagosAttributes,
  clientes_pagosCreationAttributes,
  clientes_seguimientoAttributes,
  clientes_seguimientoCreationAttributes,
  coloresAttributes,
  coloresCreationAttributes,
  comision_x_vendedorAttributes,
  comision_x_vendedorCreationAttributes,
  comprasAttributes,
  comprasCreationAttributes,
  compras_comprob_ingresos_brutoAttributes,
  compras_comprob_ingresos_brutoCreationAttributes,
  compras_comprob_retencionAttributes,
  compras_comprob_retencionCreationAttributes,
  compras_facturasAttributes,
  compras_facturasCreationAttributes,
  compras_itemsAttributes,
  compras_itemsCreationAttributes,
  //compras_items_remitosAttributes,
  //compras_items_remitosCreationAttributes,
  compras_laboresAttributes,
  compras_laboresCreationAttributes,
  compras_pagosAttributes,
  compras_pagosCreationAttributes,
  compras_produccionAttributes,
  compras_produccionCreationAttributes,
  compras_remitosAttributes,
  compras_remitosCreationAttributes,
  compras_retencionesAttributes,
  compras_retencionesCreationAttributes,
  compras_retenciones_detalleAttributes,
  compras_retenciones_detalleCreationAttributes,
  compras_stock_itemsAttributes,
  compras_stock_itemsCreationAttributes,
  compras_vencimientosAttributes,
  compras_vencimientosCreationAttributes,
  comprobantes_destinoAttributes,
  comprobantes_destinoCreationAttributes,
  comprobantes_formatosAttributes,
  comprobantes_formatosCreationAttributes,
  comprobantes_formatos_defaultAttributes,
  comprobantes_formatos_defaultCreationAttributes,
  comprobantes_relacionAttributes,
  comprobantes_relacionCreationAttributes,
  //conceptosAttributes,
  //conceptosCreationAttributes,
  condicion_venta_tipoAttributes,
  condicion_venta_tipoCreationAttributes,
  conf_colores_deudasAttributes,
  conf_colores_deudasCreationAttributes,
  conf_ejercicio_economicoAttributes,
  conf_ejercicio_economicoCreationAttributes,
  configAttributes,
  configCreationAttributes,
  config_appAttributes,
  config_appCreationAttributes,
  config_campoAttributes,
  config_campoCreationAttributes,
  config_circuitosAttributes,
  config_circuitosCreationAttributes,
  config_importacionAttributes,
  config_importacionCreationAttributes,
  config_ivaAttributes,
  config_ivaCreationAttributes,
  config_parametrosAttributes,
  config_parametrosCreationAttributes,
  config_redondeosAttributes,
  config_redondeosCreationAttributes,
  config_volcado_impuestosAttributes,
  config_volcado_impuestosCreationAttributes,
  configuracion_libro_ivaAttributes,
  configuracion_libro_ivaCreationAttributes,
  //contratosAttributes,
  //contratosCreationAttributes,
  coordenadasAttributes,
  coordenadasCreationAttributes,
  cotizacionAttributes,
  cotizacionCreationAttributes,
  cta_cble_grupoAttributes,
  cta_cble_grupoCreationAttributes,
  cta_cble_grupo_itemAttributes,
  cta_cble_grupo_itemCreationAttributes,
  cuadrillasAttributes,
  cuadrillasCreationAttributes,
  cuentasAttributes,
  cuentasCreationAttributes,
  cuentas_cash_flowAttributes,
  cuentas_cash_flowCreationAttributes,
  cuentas_cruceAttributes,
  cuentas_cruceCreationAttributes,
  cuentas_disponibilidadesAttributes,
  cuentas_disponibilidadesCreationAttributes,
  cuentas_frecuentesAttributes,
  cuentas_frecuentesCreationAttributes,
  cuentas_ingenioAttributes,
  cuentas_ingenioCreationAttributes,
  cuentas_lotesAttributes,
  cuentas_lotesCreationAttributes,
  cuentas_predef_ganaderiaAttributes,
  cuentas_predef_ganaderiaCreationAttributes,
  cuentas_predefinidasAttributes,
  cuentas_predefinidasCreationAttributes,
  datawindowsAttributes,
  datawindowsCreationAttributes,
  datos_basicos1Attributes,
  datos_basicos1CreationAttributes,
  datos_basicos2Attributes,
  datos_basicos2CreationAttributes,
  datos_basicos3Attributes,
  datos_basicos3CreationAttributes,
  datos_basicos4Attributes,
  datos_basicos4CreationAttributes,
  datos_climaticosAttributes,
  datos_climaticosCreationAttributes,
  datos_climaticos_itemsAttributes,
  datos_climaticos_itemsCreationAttributes,
  depositosAttributes,
  depositosCreationAttributes,
  destino_preciosAttributes,
  destino_preciosCreationAttributes,
  //destinosAttributes,
  //destinosCreationAttributes,
  destinos_campoAttributes,
  destinos_campoCreationAttributes,
  destinos_direccionesAttributes,
  destinos_direccionesCreationAttributes,
  //destinos_formulasAttributes,
  //destinos_formulasCreationAttributes,
  destinos_stockAttributes,
  destinos_stockCreationAttributes,
  distanciAttributes,
  distanciCreationAttributes,
  ec_articulosAttributes,
  ec_articulosCreationAttributes,
  ec_articulos_imagenesAttributes,
  ec_articulos_imagenesCreationAttributes,
  ec_carritoAttributes,
  ec_carritoCreationAttributes,
  ec_categorias_mlAttributes,
  ec_categorias_mlCreationAttributes,
  ec_clientesAttributes,
  ec_clientesCreationAttributes,
  ec_configAttributes,
  ec_configCreationAttributes,
  ec_config_circuitosAttributes,
  ec_config_circuitosCreationAttributes,
  ec_config_parametrosAttributes,
  ec_config_parametrosCreationAttributes,
  ec_rubrosAttributes,
  ec_rubrosCreationAttributes,
  ec_subrubrosAttributes,
  ec_subrubrosCreationAttributes,
  ec_tipos_enviosAttributes,
  ec_tipos_enviosCreationAttributes,
  ec_ventasAttributes,
  ec_ventasCreationAttributes,
  ec_ventas_itemsAttributes,
  ec_ventas_itemsCreationAttributes,
  empresa_choferesAttributes,
  empresa_choferesCreationAttributes,
  empresasAttributes,
  empresasCreationAttributes,
  entidadesAttributes,
  entidadesCreationAttributes,
  equivalencias_packingAttributes,
  equivalencias_packingCreationAttributes,
  estab_actividadAttributes,
  estab_actividadCreationAttributes,
  estab_categoriaAttributes,
  estab_categoriaCreationAttributes,
  establecimientoAttributes,
  establecimientoCreationAttributes,
  establecimientos_depositosAttributes,
  establecimientos_depositosCreationAttributes,
  fac_elect_xempresaAttributes,
  fac_elect_xempresaCreationAttributes,
  figurasAttributes,
  figurasCreationAttributes,
  figuras_itemsAttributes,
  figuras_itemsCreationAttributes,
  filtro_animalesAttributes,
  filtro_animalesCreationAttributes,
  filtro_caniaAttributes,
  filtro_caniaCreationAttributes,
  filtro_citrusAttributes,
  filtro_citrusCreationAttributes,
  filtro_granosAttributes,
  filtro_granosCreationAttributes,
  filtro_laboresAttributes,
  filtro_laboresCreationAttributes,
  filtro_mov_perAttributes,
  filtro_mov_perCreationAttributes,
  filtro_orden_trabajoAttributes,
  filtro_orden_trabajoCreationAttributes,
  filtro_plantacionAttributes,
  filtro_plantacionCreationAttributes,
  filtro_stockAttributes,
  filtro_stockCreationAttributes,
  filtro_valesAttributes,
  filtro_valesCreationAttributes,
  finan_contratistasAttributes,
  finan_contratistasCreationAttributes,
  fmt_carta_porteAttributes,
  fmt_carta_porteCreationAttributes,
  //fmt_carta_porte_detAttributes,
  //fmt_carta_porte_detCreationAttributes,
  formato_aplicativoAttributes,
  formato_aplicativoCreationAttributes,
  formulas_variablesAttributes,
  formulas_variablesCreationAttributes,
  generador_formulaAttributes,
  generador_formulaCreationAttributes,
  gest_identificadorAttributes,
  gest_identificadorCreationAttributes,
  gest_identificador_movimientosAttributes,
  gest_identificador_movimientosCreationAttributes,
  graficoAttributes,
  graficoCreationAttributes,
  grupo_animalesAttributes,
  grupo_animalesCreationAttributes,
  grupo_caracteristicasAttributes,
  grupo_caracteristicasCreationAttributes,
  //grupo_destinoAttributes,
  //grupo_destinoCreationAttributes,
  harrozAttributes,
  harrozCreationAttributes,
  havenaAttributes,
  havenaCreationAttributes,
  hcebadaAttributes,
  hcebadaCreationAttributes,
  hcentenoAttributes,
  hcentenoCreationAttributes,
  hchiaAttributes,
  hchiaCreationAttributes,
  hcolzaAttributes,
  hcolzaCreationAttributes,
  hgarbanzoAttributes,
  hgarbanzoCreationAttributes,
  hgirasolAttributes,
  hgirasolCreationAttributes,
  hist_peso_categoriaAttributes,
  hist_peso_categoriaCreationAttributes,
  hist_precio_categoriaAttributes,
  hist_precio_categoriaCreationAttributes,
  hlinoAttributes,
  hlinoCreationAttributes,
  hlupinoAttributes,
  hlupinoCreationAttributes,
  hmaizAttributes,
  hmaizCreationAttributes,
  hmaniAttributes,
  hmaniCreationAttributes,
  hmijoAttributes,
  hmijoCreationAttributes,
  hmohaAttributes,
  hmohaCreationAttributes,
  hoja_de_rutaAttributes,
  hoja_de_rutaCreationAttributes,
  hoja_de_ruta_itemsAttributes,
  hoja_de_ruta_itemsCreationAttributes,
  hoja_ruta_estadoAttributes,
  hoja_ruta_estadoCreationAttributes,
  hquinoaAttributes,
  hquinoaCreationAttributes,
  hsojaAttributes,
  hsojaCreationAttributes,
  hsorgoAttributes,
  hsorgoCreationAttributes,
  htrigoAttributes,
  htrigoCreationAttributes,
  htriticaleAttributes,
  htriticaleCreationAttributes,
  hviciavillosaAttributes,
  hviciavillosaCreationAttributes,
  identificadorAttributes,
  identificadorCreationAttributes,
  identificador_campoAttributes,
  identificador_campoCreationAttributes,
  im_usuariosAttributes,
  im_usuariosCreationAttributes,
  importacion_declaracionAttributes,
  importacion_declaracionCreationAttributes,
  importacion_itemsAttributes,
  importacion_itemsCreationAttributes,
  impresorasAttributes,
  impresorasCreationAttributes,
  impresoras_fiscalesAttributes,
  impresoras_fiscalesCreationAttributes,
  impuestosAttributes,
  impuestosCreationAttributes,
  impuestos_cabeceraAttributes,
  impuestos_cabeceraCreationAttributes,
  impuestoterceroAttributes,
  impuestoterceroCreationAttributes,
  impuestotercero_itemsAttributes,
  impuestotercero_itemsCreationAttributes,
  indice_de_preciosAttributes,
  indice_de_preciosCreationAttributes,
  inseminacionAttributes,
  inseminacionCreationAttributes,
  insumos_ordenes_trabajoAttributes,
  insumos_ordenes_trabajoCreationAttributes,
  items_crucesAttributes,
  items_crucesCreationAttributes,
  items_facturas_cposAttributes,
  items_facturas_cposCreationAttributes,
  l_margen_brutoAttributes,
  l_margen_brutoCreationAttributes,
  laboresAttributes,
  laboresCreationAttributes,
  labores_insumosAttributes,
  labores_insumosCreationAttributes,
  labores_log_externoAttributes,
  labores_log_externoCreationAttributes,
  labores_mant_tareasAttributes,
  labores_mant_tareasCreationAttributes,
  labores_maquinariasAttributes,
  labores_maquinariasCreationAttributes,
  labores_personalAttributes,
  labores_personalCreationAttributes,
  lista_preciosAttributes,
  lista_preciosCreationAttributes,
  lluviasAttributes,
  lluviasCreationAttributes,
  localidadAttributes,
  localidadCreationAttributes,
  lote_actividadAttributes,
  lote_actividadCreationAttributes,
  lote_actividad_upAttributes,
  lote_actividad_upCreationAttributes,
  lotesAttributes,
  lotesCreationAttributes,
  lotes_coordenadasAttributes,
  lotes_coordenadasCreationAttributes,
  lotes_unidad_productivaAttributes,
  lotes_unidad_productivaCreationAttributes,
  maquinarAttributes,
  maquinarCreationAttributes,
  maquinas_mantAttributes,
  maquinas_mantCreationAttributes,
  maquinas_mant_insumosAttributes,
  maquinas_mant_insumosCreationAttributes,
  maquinas_mant_tareasAttributes,
  maquinas_mant_tareasCreationAttributes,
  mod_insuAttributes,
  mod_insuCreationAttributes,
  mod_tareAttributes,
  mod_tareCreationAttributes,
  mod_tareas_personalAttributes,
  mod_tareas_personalCreationAttributes,
  mod_tareas_riegoAttributes,
  mod_tareas_riegoCreationAttributes,
  modelosAttributes,
  modelosCreationAttributes,
  monedaAttributes,
  monedaCreationAttributes,
  movimientosAttributes,
  movimientosCreationAttributes,
  movimientos_maquinariaAttributes,
  movimientos_maquinariaCreationAttributes,
  nota_pedidoAttributes,
  nota_pedidoCreationAttributes,
  nota_pedido_insumosAttributes,
  nota_pedido_insumosCreationAttributes,
  nov_animalesAttributes,
  nov_animalesCreationAttributes,
  novedadesAttributes,
  novedadesCreationAttributes,
  orden_compraAttributes,
  orden_compraCreationAttributes,
  orden_compra_centros_costoAttributes,
  orden_compra_centros_costoCreationAttributes,
  orden_compra_insumosAttributes,
  orden_compra_insumosCreationAttributes,
  orden_de_compraAttributes,
  orden_de_compraCreationAttributes,
  orden_de_compra_itemsAttributes,
  orden_de_compra_itemsCreationAttributes,
  ordenes_sqlAttributes,
  ordenes_sqlCreationAttributes,
  ordentrabajoAttributes,
  ordentrabajoCreationAttributes,
  ordentrabajo_insumosAttributes,
  ordentrabajo_insumosCreationAttributes,
  ordentrabajo_maquinariasAttributes,
  ordentrabajo_maquinariasCreationAttributes,
  ordentrabajo_personalAttributes,
  ordentrabajo_personalCreationAttributes,
  origenAttributes,
  origenCreationAttributes,
  paisAttributes,
  paisCreationAttributes,
  //pbcatcolAttributes,
  //pbcatcolCreationAttributes,
  //pbcatedtAttributes,
  //pbcatedtCreationAttributes,
  //pbcatfmtAttributes,
  //pbcatfmtCreationAttributes,
  //pbcattblAttributes,
  //pbcattblCreationAttributes,
  //pbcatvldAttributes,
  //pbcatvldCreationAttributes,
  pcuentasAttributes,
  pcuentasCreationAttributes,
  pcuentas_modeloAttributes,
  pcuentas_modeloCreationAttributes,
  periodosAttributes,
  periodosCreationAttributes,
  permisosAttributes,
  permisosCreationAttributes,
  personalAttributes,
  personalCreationAttributes,
  personal_tareasAttributes,
  personal_tareasCreationAttributes,
  pid_cruce_factura_remitoAttributes,
  pid_cruce_factura_remitoCreationAttributes,
  pid_equivalencia_insumoAttributes,
  pid_equivalencia_insumoCreationAttributes,
  pid_equivalencia_proveedorAttributes,
  pid_equivalencia_proveedorCreationAttributes,
  pla_comercializacionAttributes,
  pla_comercializacionCreationAttributes,
  pla_contratistasAttributes,
  pla_contratistasCreationAttributes,
  pla_contratistas_itemsAttributes,
  pla_contratistas_itemsCreationAttributes,
  pla_egresos_actividadAttributes,
  pla_egresos_actividadCreationAttributes,
  pla_egresos_actividad_itemsAttributes,
  pla_egresos_actividad_itemsCreationAttributes,
  pla_financiero_ctasAttributes,
  pla_financiero_ctasCreationAttributes,
  pla_financiero_ctas_itemsAttributes,
  pla_financiero_ctas_itemsCreationAttributes,
  pla_insuAttributes,
  pla_insuCreationAttributes,
  pla_insumosAttributes,
  pla_insumosCreationAttributes,
  pla_insumos_itemsAttributes,
  pla_insumos_itemsCreationAttributes,
  pla_lotesAttributes,
  pla_lotesCreationAttributes,
  pla_lotes_tareasAttributes,
  pla_lotes_tareasCreationAttributes,
  pla_lotes_tareas_insumosAttributes,
  pla_lotes_tareas_insumosCreationAttributes,
  pla_lotes_tareas_riegoAttributes,
  pla_lotes_tareas_riegoCreationAttributes,
  pla_modelosAttributes,
  pla_modelosCreationAttributes,
  pla_modelos_tareasAttributes,
  pla_modelos_tareasCreationAttributes,
  pla_modelos_tareas_insumosAttributes,
  pla_modelos_tareas_insumosCreationAttributes,
  pla_modelos_tareas_riegoAttributes,
  pla_modelos_tareas_riegoCreationAttributes,
  pla_tareAttributes,
  pla_tareCreationAttributes,
  pla_tareasAttributes,
  pla_tareasCreationAttributes,
  pla_tareas_itemsAttributes,
  pla_tareas_itemsCreationAttributes,
  pla_tareas_personalAttributes,
  pla_tareas_personalCreationAttributes,
  pla_tareas_riegoAttributes,
  pla_tareas_riegoCreationAttributes,
  pla_ventas_produccionAttributes,
  pla_ventas_produccionCreationAttributes,
  pla_ventas_produccion_itemsAttributes,
  pla_ventas_produccion_itemsCreationAttributes,
  planAttributes,
  planCreationAttributes,
  planeamiento_lotesAttributes,
  planeamiento_lotesCreationAttributes,
  plani_lluviasAttributes,
  plani_lluviasCreationAttributes,
  presupuestoAttributes,
  presupuestoCreationAttributes,
  presupuestosAttributes,
  presupuestosCreationAttributes,
  produccionAttributes,
  produccionCreationAttributes,
  produccion_caniaAttributes,
  produccion_caniaCreationAttributes,
  produccion_citrusAttributes,
  produccion_citrusCreationAttributes,
  produccion_olivoAttributes,
  produccion_olivoCreationAttributes,
  //producto_rubroAttributes,
  //producto_rubroCreationAttributes,
  //producto_subrubroAttributes,
  //producto_subrubroCreationAttributes,
  promocion_empresaAttributes,
  promocion_empresaCreationAttributes,
  promocionesAttributes,
  promocionesCreationAttributes,
  promociones_planAttributes,
  promociones_planCreationAttributes,
  promociones_plan_empresasAttributes,
  promociones_plan_empresasCreationAttributes,
  proveedor_impuestosAttributes,
  proveedor_impuestosCreationAttributes,
  proveedoresAttributes,
  proveedoresCreationAttributes,
  proveedores_pagosAttributes,
  proveedores_pagosCreationAttributes,
  proveedores_precios_articulosAttributes,
  proveedores_precios_articulosCreationAttributes,
  provinciaAttributes,
  provinciaCreationAttributes,
  puntos_articulosAttributes,
  puntos_articulosCreationAttributes,
  puntos_clientesAttributes,
  puntos_clientesCreationAttributes,
  puntos_configAttributes,
  puntos_configCreationAttributes,
  puntos_de_reposicionAttributes,
  puntos_de_reposicionCreationAttributes,
  puntos_de_ventaAttributes,
  puntos_de_ventaCreationAttributes,
  puntos_de_venta_usuariosAttributes,
  puntos_de_venta_usuariosCreationAttributes,
  puntos_empresasAttributes,
  puntos_empresasCreationAttributes,
  puntos_x_ventaAttributes,
  puntos_x_ventaCreationAttributes,
  razaAttributes,
  razaCreationAttributes,
  registros_borradosAttributes,
  registros_borradosCreationAttributes,
  remitos_campoAttributes,
  remitos_campoCreationAttributes,
  rendicionAttributes,
  rendicionCreationAttributes,
  rendicion_itemsAttributes,
  rendicion_itemsCreationAttributes,
  rodeoAttributes,
  rodeoCreationAttributes,
  rubrosAttributes,
  rubrosCreationAttributes,
  rubros_clientesAttributes,
  rubros_clientesCreationAttributes,
  rubros_ivaAttributes,
  rubros_ivaCreationAttributes,
  sanidadAttributes,
  sanidadCreationAttributes,
  secuenciaAttributes,
  secuenciaCreationAttributes,
  stockAttributes,
  stockCreationAttributes,
  stock_campoAttributes,
  stock_campoCreationAttributes,
  stock_headerAttributes,
  stock_headerCreationAttributes,
  stock_itemAttributes,
  stock_itemCreationAttributes,
  stockheader_estadosAttributes,
  stockheader_estadosCreationAttributes,
  stockheader_movimientosAttributes,
  stockheader_movimientosCreationAttributes,
  subrubrosAttributes,
  subrubrosCreationAttributes,
  superficie_ganaderaAttributes,
  superficie_ganaderaCreationAttributes,
  t_ctacte_marca_saldosAttributes,
  t_ctacte_marca_saldosCreationAttributes,
  t_empresas_serviciosAttributes,
  t_empresas_serviciosCreationAttributes,
  t_inf_saldos_histAttributes,
  t_inf_saldos_histCreationAttributes,
  t_logAttributes,
  t_logCreationAttributes,
  t_pcuentas_establecimientosAttributes,
  t_pcuentas_establecimientosCreationAttributes,
  t_proveedores_marca_saldosAttributes,
  t_proveedores_marca_saldosCreationAttributes,
  tablasAttributes,
  tablasCreationAttributes,
  tarea_conceptoAttributes,
  tarea_conceptoCreationAttributes,
  tareasAttributes,
  tareasCreationAttributes,
  tareas_preciosAttributes,
  tareas_preciosCreationAttributes,
  tareas_seguridadAttributes,
  tareas_seguridadCreationAttributes,
  tarjetasAttributes,
  tarjetasCreationAttributes,
  tarjetas_planAttributes,
  tarjetas_planCreationAttributes,
  tarjetas_plan_empresasAttributes,
  tarjetas_plan_empresasCreationAttributes,
  testingAttributes,
  testingCreationAttributes,
  ticket_comprobanteAttributes,
  ticket_comprobanteCreationAttributes,
  tipo_destinoAttributes,
  tipo_destinoCreationAttributes,
  tipo_impuestoAttributes,
  tipo_impuestoCreationAttributes,
  tipo_movAttributes,
  tipo_movCreationAttributes,
  tipo_servicio_ganaderiaAttributes,
  tipo_servicio_ganaderiaCreationAttributes,
  tipo_ticketAttributes,
  tipo_ticketCreationAttributes,
  tipos_dineroAttributes,
  tipos_dineroCreationAttributes,
  tipos_documentosAttributes,
  tipos_documentosCreationAttributes,
  tipos_documentos_pyAttributes,
  tipos_documentos_pyCreationAttributes,
  tmp_articulos_cAttributes,
  tmp_articulos_cCreationAttributes,
  tmp_libro_mayorAttributes,
  tmp_libro_mayorCreationAttributes,
  tmp_resultado_x_unAttributes,
  tmp_resultado_x_unCreationAttributes,
  transformacionAttributes,
  transformacionCreationAttributes,
  transformacion_itemsAttributes,
  transformacion_itemsCreationAttributes,
  transporteAttributes,
  transporteCreationAttributes,
  tt_actividadesAttributes,
  tt_actividadesCreationAttributes,
  //tt_admstrgestAttributes,
  //tt_admstrgestCreationAttributes,
  //tt_admstrgest_auxAttributes,
  //tt_admstrgest_auxCreationAttributes,
  //tt_admstrmenAttributes,
  //tt_admstrmenCreationAttributes,
  //tt_admstrmen_auxAttributes,
  //tt_admstrmen_auxCreationAttributes,
  tt_animalesAttributes,
  tt_animalesCreationAttributes,
  tt_anticiposvscancelAttributes,
  tt_anticiposvscancelCreationAttributes,
  tt_articulosAttributes,
  tt_articulosCreationAttributes,
  //tt_articulos_existenciaAttributes,
  //tt_articulos_existenciaCreationAttributes,
  tt_articulos_precios_auxAttributes,
  tt_articulos_precios_auxCreationAttributes,
  tt_balanceAttributes,
  tt_balanceCreationAttributes,
  //tt_balance_pasoAttributes,
  //tt_balance_pasoCreationAttributes,
  tt_balance_tempAttributes,
  tt_balance_tempCreationAttributes,
  //tt_cab_admstrmenAttributes,
  //tt_cab_admstrmenCreationAttributes,
  tt_cashflow_aux1Attributes,
  tt_cashflow_aux1CreationAttributes,
  tt_chequesAttributes,
  tt_chequesCreationAttributes,
  tt_cheques_salidosAttributes,
  tt_cheques_salidosCreationAttributes,
  tt_clientesAttributes,
  tt_clientesCreationAttributes,
  tt_clientes_ctacte_saldosAttributes,
  tt_clientes_ctacte_saldosCreationAttributes,
  tt_clientes_ctacte_saldos_auxAttributes,
  tt_clientes_ctacte_saldos_auxCreationAttributes,
  tt_clientes_saldos_auxAttributes,
  tt_clientes_saldos_auxCreationAttributes,
  tt_comp_numeroAttributes,
  tt_comp_numeroCreationAttributes,
  tt_comprobantes_pendientesAttributes,
  tt_comprobantes_pendientesCreationAttributes,
  tt_cons_stockAttributes,
  tt_cons_stockCreationAttributes,
  tt_cons_stock_auxAttributes,
  tt_cons_stock_auxCreationAttributes,
  tt_cosechaAttributes,
  tt_cosechaCreationAttributes,
  tt_cotizacionAttributes,
  tt_cotizacionCreationAttributes,
  tt_cpro_auxAttributes,
  tt_cpro_auxCreationAttributes,
  tt_ctas_auxAttributes,
  tt_ctas_auxCreationAttributes,
  //tt_ctrl_cosechaAttributes,
  //tt_ctrl_cosechaCreationAttributes,
  //tt_ctrl_cosecha_auxAttributes,
  //tt_ctrl_cosecha_auxCreationAttributes,
  tt_cuentasAttributes,
  tt_cuentasCreationAttributes,
  //tt_cuentas_cashflowAttributes,
  //tt_cuentas_cashflowCreationAttributes,
  tt_cuentas_disponibilidades_saldosAttributes,
  tt_cuentas_disponibilidades_saldosCreationAttributes,
  tt_cuentas_disponibilidades_saldos_auxAttributes,
  tt_cuentas_disponibilidades_saldos_auxCreationAttributes,
  tt_cuentas_nivelAttributes,
  tt_cuentas_nivelCreationAttributes,
  tt_cuentas_saldosAttributes,
  tt_cuentas_saldosCreationAttributes,
  tt_cuentas_saldos_auxAttributes,
  tt_cuentas_saldos_auxCreationAttributes,
  tt_debugAttributes,
  tt_debugCreationAttributes,
  tt_depositoAttributes,
  tt_depositoCreationAttributes,
  tt_empresaAttributes,
  tt_empresaCreationAttributes,
  tt_empresas_serviciosAttributes,
  tt_empresas_serviciosCreationAttributes,
  tt_establecimientosAttributes,
  tt_establecimientosCreationAttributes,
  tt_existencias_stockAttributes,
  tt_existencias_stockCreationAttributes,
  //tt_fechas_cashflowAttributes,
  //tt_fechas_cashflowCreationAttributes,
  tt_fiscalAttributes,
  tt_fiscalCreationAttributes,
  tt_import_archivo_ingenioAttributes,
  tt_import_archivo_ingenioCreationAttributes,
  //tt_inf_provcontfletAttributes,
  //tt_inf_provcontfletCreationAttributes,
  //tt_inf_provcontflet_auxAttributes,
  //tt_inf_provcontflet_auxCreationAttributes,
  tt_inventarioAttributes,
  tt_inventarioCreationAttributes,
  tt_inventario_animalesAttributes,
  tt_inventario_animalesCreationAttributes,
  tt_invganaderoAttributes,
  tt_invganaderoCreationAttributes,
  tt_invganadero_auxAttributes,
  tt_invganadero_auxCreationAttributes,
  tt_logAttributes,
  tt_logCreationAttributes,
  tt_lote_actividadAttributes,
  tt_lote_actividadCreationAttributes,
  tt_nov_animalesAttributes,
  tt_nov_animalesCreationAttributes,
  tt_nov_insumosAttributes,
  tt_nov_insumosCreationAttributes,
  tt_novedadesAttributes,
  tt_novedadesCreationAttributes,
  tt_parametrosAttributes,
  tt_parametrosCreationAttributes,
  tt_periodosAttributes,
  tt_periodosCreationAttributes,
  tt_pla_insumosAttributes,
  tt_pla_insumosCreationAttributes,
  tt_plapaggralAttributes,
  tt_plapaggralCreationAttributes,
  tt_plapaggral_auxAttributes,
  tt_plapaggral_auxCreationAttributes,
  tt_proveedor_clienteAttributes,
  tt_proveedor_clienteCreationAttributes,
  tt_proveedoresAttributes,
  tt_proveedoresCreationAttributes,
  tt_proveedores_ctacte_saldosAttributes,
  tt_proveedores_ctacte_saldosCreationAttributes,
  tt_proveedores_ctacte_saldos_auxAttributes,
  tt_proveedores_ctacte_saldos_auxCreationAttributes,
  tt_proveedores_saldos_auxAttributes,
  tt_proveedores_saldos_auxCreationAttributes,
  //tt_renumeraAttributes,
  //tt_renumeraCreationAttributes,
  tt_res_emp_serviciosAttributes,
  tt_res_emp_serviciosCreationAttributes,
  tt_res_emp_servicios_auxAttributes,
  tt_res_emp_servicios_auxCreationAttributes,
  tt_resultado_actividadesAttributes,
  tt_resultado_actividadesCreationAttributes,
  tt_resultado_actividades_auxAttributes,
  tt_resultado_actividades_auxCreationAttributes,
  tt_sqlAttributes,
  tt_sqlCreationAttributes,
  tt_stock_pasoAttributes,
  tt_stock_pasoCreationAttributes,
  tt_tesoreriaAttributes,
  tt_tesoreriaCreationAttributes,
  //tt_tesoreria_auxAttributes,
  //tt_tesoreria_auxCreationAttributes,
  tt_tesoreria_caso1Attributes,
  tt_tesoreria_caso1CreationAttributes,
  tt_tesoreria_retencionesAttributes,
  tt_tesoreria_retencionesCreationAttributes,
  //tt_tipo_comprobanteAttributes,
  //tt_tipo_comprobanteCreationAttributes,
  tt_unidad_negocioAttributes,
  tt_unidad_negocioCreationAttributes,
  tt_upAttributes,
  tt_upCreationAttributes,
  tt_usuarios_seleccionAttributes,
  tt_usuarios_seleccionCreationAttributes,
  tt_volcado_impuestosAttributes,
  tt_volcado_impuestosCreationAttributes,
  turnosAttributes,
  turnosCreationAttributes,
  unidad_de_medidaAttributes,
  unidad_de_medidaCreationAttributes,
  unidad_negocioAttributes,
  unidad_negocioCreationAttributes,
  unidad_productivaAttributes,
  unidad_productivaCreationAttributes,
  unidadesAttributes,
  unidadesCreationAttributes,
  usuariosAttributes,
  usuariosCreationAttributes,
  usuarios_campoAttributes,
  usuarios_campoCreationAttributes,
  usuarios_depositosAttributes,
  usuarios_depositosCreationAttributes,
  usuarios_permisosAttributes,
  usuarios_permisosCreationAttributes,
  usuarios_tareasAttributes,
  usuarios_tareasCreationAttributes,
  vendedoresAttributes,
  vendedoresCreationAttributes,
  ventasAttributes,
  ventasCreationAttributes,
  ventas_cert_depositoAttributes,
  ventas_cert_depositoCreationAttributes,
  ventas_facturasAttributes,
  ventas_facturasCreationAttributes,
  ventas_itemsAttributes,
  ventas_itemsCreationAttributes,
  ventas_items_serieAttributes,
  ventas_items_serieCreationAttributes,
  ventas_medio_de_pagoAttributes,
  ventas_medio_de_pagoCreationAttributes,
  ventas_pagosAttributes,
  ventas_pagosCreationAttributes,
  ventas_produccionAttributes,
  ventas_produccionCreationAttributes,
  ventas_remitos_facturasAttributes,
  ventas_remitos_facturasCreationAttributes,
  ventas_retencionesAttributes,
  ventas_retencionesCreationAttributes,
  ventas_transporteAttributes,
  ventas_transporteCreationAttributes,
  ventas_unidad_itemAttributes,
  ventas_unidad_itemCreationAttributes,
  ventas_vencimientosAttributes,
  ventas_vencimientosCreationAttributes,
  volcadaAttributes,
  volcadaCreationAttributes,
  webserviceAttributes,
  webserviceCreationAttributes,
  webservice_afipAttributes,
  webservice_afipCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  act_categoria.initModel(sequelize);
  actividad.initModel(sequelize);
  actividad_periodo.initModel(sequelize);
  actividades_campo.initModel(sequelize);
  actualizacion.initModel(sequelize);
  actualizacion_dolar.initModel(sequelize);
  actualizacion_utas.initModel(sequelize);
  afip_comprobantes.initModel(sequelize);
  afip_comprobantes_codigos.initModel(sequelize);
  afip_conceptos.initModel(sequelize);
  afip_cosechas.initModel(sequelize);
  afip_cuitdest.initModel(sequelize);
  afip_especies.initModel(sequelize);
  afip_idiomas.initModel(sequelize);
  afip_incoterms.initModel(sequelize);
  afip_localidades.initModel(sequelize);
  afip_monedas.initModel(sequelize);
  afip_nomenclador.initModel(sequelize);
  afip_paises.initModel(sequelize);
  afip_provincias.initModel(sequelize);
  afip_puntos_ventas.initModel(sequelize);
  afip_texportacion.initModel(sequelize);
  afip_tipos_datos_opcional.initModel(sequelize);
  afip_tipos_documentos.initModel(sequelize);
  afip_tipos_iva.initModel(sequelize);
  afip_tipos_tributos.initModel(sequelize);
  afip_unimed.initModel(sequelize);
  ajustes.initModel(sequelize);
  amortizaciones.initModel(sequelize);
  animales.initModel(sequelize);
  animales_estados.initModel(sequelize);
  aplicaciones.initModel(sequelize);
  arch_importados.initModel(sequelize);
  //archivo_arba.initModel(sequelize);
  articulo_equiv_unidades.initModel(sequelize);
  articulos.initModel(sequelize);
  articulos_caracteristicas.initModel(sequelize);
  articulos_caracteristicas_valores.initModel(sequelize);
  articulos_serie.initModel(sequelize);
  articulos_tags.initModel(sequelize);
  articulos_transformacion.initModel(sequelize);
  articulos_unidad_medida.initModel(sequelize);
  asientos.initModel(sequelize);
  asientos_items.initModel(sequelize);
  asientos_iva.initModel(sequelize);
  asignar_rubros.initModel(sequelize);
  //atributo.initModel(sequelize);
  atributos_de_precios.initModel(sequelize);
  bancos.initModel(sequelize);
  bases_contables.initModel(sequelize);
  basicos.initModel(sequelize);
  borrados.initModel(sequelize);
  cab_lista_precio.initModel(sequelize);
  cajas.initModel(sequelize);
  cania_peladores.initModel(sequelize);
  //carta_porte.initModel(sequelize);
  //carta_porte_det.initModel(sequelize);
  categoria.initModel(sequelize);
  categoria_aplicativos.initModel(sequelize);
  categoria_iva.initModel(sequelize);
  chequeras.initModel(sequelize);
  cierres_fiscales.initModel(sequelize);
  clientes.initModel(sequelize);
  clientes2.initModel(sequelize);
  clientes_acuerdos.initModel(sequelize);
  clientes_destinos.initModel(sequelize);
  clientes_domicilios.initModel(sequelize);
  clientes_impuestos.initModel(sequelize);
  clientes_pagos.initModel(sequelize);
  clientes_seguimiento.initModel(sequelize);
  colores.initModel(sequelize);
  comision_x_vendedor.initModel(sequelize);
  compras.initModel(sequelize);
  compras_comprob_ingresos_bruto.initModel(sequelize);
  compras_comprob_retencion.initModel(sequelize);
  compras_facturas.initModel(sequelize);
  compras_items.initModel(sequelize);
  //compras_items_remitos.initModel(sequelize);
  compras_labores.initModel(sequelize);
  compras_pagos.initModel(sequelize);
  compras_produccion.initModel(sequelize);
  compras_remitos.initModel(sequelize);
  compras_retenciones.initModel(sequelize);
  compras_retenciones_detalle.initModel(sequelize);
  compras_stock_items.initModel(sequelize);
  compras_vencimientos.initModel(sequelize);
  comprobantes_destino.initModel(sequelize);
  comprobantes_formatos.initModel(sequelize);
  comprobantes_formatos_default.initModel(sequelize);
  comprobantes_relacion.initModel(sequelize);
  //conceptos.initModel(sequelize);
  condicion_venta_tipo.initModel(sequelize);
  conf_colores_deudas.initModel(sequelize);
  conf_ejercicio_economico.initModel(sequelize);
  config.initModel(sequelize);
  config_app.initModel(sequelize);
  config_campo.initModel(sequelize);
  config_circuitos.initModel(sequelize);
  config_importacion.initModel(sequelize);
  config_iva.initModel(sequelize);
  config_parametros.initModel(sequelize);
  config_redondeos.initModel(sequelize);
  config_volcado_impuestos.initModel(sequelize);
  configuracion_libro_iva.initModel(sequelize);
  //contratos.initModel(sequelize);
  coordenadas.initModel(sequelize);
  cotizacion.initModel(sequelize);
  cta_cble_grupo.initModel(sequelize);
  cta_cble_grupo_item.initModel(sequelize);
  cuadrillas.initModel(sequelize);
  cuentas.initModel(sequelize);
  cuentas_cash_flow.initModel(sequelize);
  cuentas_cruce.initModel(sequelize);
  cuentas_disponibilidades.initModel(sequelize);
  cuentas_frecuentes.initModel(sequelize);
  cuentas_ingenio.initModel(sequelize);
  cuentas_lotes.initModel(sequelize);
  cuentas_predef_ganaderia.initModel(sequelize);
  cuentas_predefinidas.initModel(sequelize);
  datawindows.initModel(sequelize);
  datos_basicos1.initModel(sequelize);
  datos_basicos2.initModel(sequelize);
  datos_basicos3.initModel(sequelize);
  datos_basicos4.initModel(sequelize);
  datos_climaticos.initModel(sequelize);
  datos_climaticos_items.initModel(sequelize);
  depositos.initModel(sequelize);
  destino_precios.initModel(sequelize);
  //destinos.initModel(sequelize);
  destinos_campo.initModel(sequelize);
  destinos_direcciones.initModel(sequelize);
  //destinos_formulas.initModel(sequelize);
  destinos_stock.initModel(sequelize);
  distanci.initModel(sequelize);
  ec_articulos.initModel(sequelize);
  ec_articulos_imagenes.initModel(sequelize);
  ec_carrito.initModel(sequelize);
  ec_categorias_ml.initModel(sequelize);
  ec_clientes.initModel(sequelize);
  ec_config.initModel(sequelize);
  ec_config_circuitos.initModel(sequelize);
  ec_config_parametros.initModel(sequelize);
  ec_rubros.initModel(sequelize);
  ec_subrubros.initModel(sequelize);
  ec_tipos_envios.initModel(sequelize);
  ec_ventas.initModel(sequelize);
  ec_ventas_items.initModel(sequelize);
  empresa_choferes.initModel(sequelize);
  empresas.initModel(sequelize);
  entidades.initModel(sequelize);
  equivalencias_packing.initModel(sequelize);
  estab_actividad.initModel(sequelize);
  estab_categoria.initModel(sequelize);
  establecimiento.initModel(sequelize);
  establecimientos_depositos.initModel(sequelize);
  fac_elect_xempresa.initModel(sequelize);
  figuras.initModel(sequelize);
  figuras_items.initModel(sequelize);
  filtro_animales.initModel(sequelize);
  filtro_cania.initModel(sequelize);
  filtro_citrus.initModel(sequelize);
  filtro_granos.initModel(sequelize);
  filtro_labores.initModel(sequelize);
  filtro_mov_per.initModel(sequelize);
  filtro_orden_trabajo.initModel(sequelize);
  filtro_plantacion.initModel(sequelize);
  filtro_stock.initModel(sequelize);
  filtro_vales.initModel(sequelize);
  finan_contratistas.initModel(sequelize);
  fmt_carta_porte.initModel(sequelize);
  //fmt_carta_porte_det.initModel(sequelize);
  formato_aplicativo.initModel(sequelize);
  formulas_variables.initModel(sequelize);
  generador_formula.initModel(sequelize);
  gest_identificador.initModel(sequelize);
  gest_identificador_movimientos.initModel(sequelize);
  grafico.initModel(sequelize);
  grupo_animales.initModel(sequelize);
  grupo_caracteristicas.initModel(sequelize);
  //grupo_destino.initModel(sequelize);
  harroz.initModel(sequelize);
  havena.initModel(sequelize);
  hcebada.initModel(sequelize);
  hcenteno.initModel(sequelize);
  hchia.initModel(sequelize);
  hcolza.initModel(sequelize);
  hgarbanzo.initModel(sequelize);
  hgirasol.initModel(sequelize);
  hist_peso_categoria.initModel(sequelize);
  hist_precio_categoria.initModel(sequelize);
  hlino.initModel(sequelize);
  hlupino.initModel(sequelize);
  hmaiz.initModel(sequelize);
  hmani.initModel(sequelize);
  hmijo.initModel(sequelize);
  hmoha.initModel(sequelize);
  hoja_de_ruta.initModel(sequelize);
  hoja_de_ruta_items.initModel(sequelize);
  hoja_ruta_estado.initModel(sequelize);
  hquinoa.initModel(sequelize);
  hsoja.initModel(sequelize);
  hsorgo.initModel(sequelize);
  htrigo.initModel(sequelize);
  htriticale.initModel(sequelize);
  hviciavillosa.initModel(sequelize);
  identificador.initModel(sequelize);
  identificador_campo.initModel(sequelize);
  im_usuarios.initModel(sequelize);
  importacion_declaracion.initModel(sequelize);
  importacion_items.initModel(sequelize);
  impresoras.initModel(sequelize);
  impresoras_fiscales.initModel(sequelize);
  impuestos.initModel(sequelize);
  impuestos_cabecera.initModel(sequelize);
  impuestotercero.initModel(sequelize);
  impuestotercero_items.initModel(sequelize);
  indice_de_precios.initModel(sequelize);
  inseminacion.initModel(sequelize);
  insumos_ordenes_trabajo.initModel(sequelize);
  items_cruces.initModel(sequelize);
  items_facturas_cpos.initModel(sequelize);
  l_margen_bruto.initModel(sequelize);
  labores.initModel(sequelize);
  labores_insumos.initModel(sequelize);
  labores_log_externo.initModel(sequelize);
  labores_mant_tareas.initModel(sequelize);
  labores_maquinarias.initModel(sequelize);
  labores_personal.initModel(sequelize);
  lista_precios.initModel(sequelize);
  lluvias.initModel(sequelize);
  localidad.initModel(sequelize);
  lote_actividad.initModel(sequelize);
  lote_actividad_up.initModel(sequelize);
  lotes.initModel(sequelize);
  lotes_coordenadas.initModel(sequelize);
  lotes_unidad_productiva.initModel(sequelize);
  maquinar.initModel(sequelize);
  maquinas_mant.initModel(sequelize);
  maquinas_mant_insumos.initModel(sequelize);
  maquinas_mant_tareas.initModel(sequelize);
  mod_insu.initModel(sequelize);
  mod_tare.initModel(sequelize);
  mod_tareas_personal.initModel(sequelize);
  mod_tareas_riego.initModel(sequelize);
  modelos.initModel(sequelize);
  moneda.initModel(sequelize);
  movimientos.initModel(sequelize);
  movimientos_maquinaria.initModel(sequelize);
  nota_pedido.initModel(sequelize);
  nota_pedido_insumos.initModel(sequelize);
  nov_animales.initModel(sequelize);
  novedades.initModel(sequelize);
  orden_compra.initModel(sequelize);
  orden_compra_centros_costo.initModel(sequelize);
  orden_compra_insumos.initModel(sequelize);
  orden_de_compra.initModel(sequelize);
  orden_de_compra_items.initModel(sequelize);
  ordenes_sql.initModel(sequelize);
  ordentrabajo.initModel(sequelize);
  ordentrabajo_insumos.initModel(sequelize);
  ordentrabajo_maquinarias.initModel(sequelize);
  ordentrabajo_personal.initModel(sequelize);
  origen.initModel(sequelize);
  pais.initModel(sequelize);
  //pbcatcol.initModel(sequelize);
  //pbcatedt.initModel(sequelize);
  //pbcatfmt.initModel(sequelize);
  //pbcattbl.initModel(sequelize);
  //pbcatvld.initModel(sequelize);
  pcuentas.initModel(sequelize);
  pcuentas_modelo.initModel(sequelize);
  periodos.initModel(sequelize);
  permisos.initModel(sequelize);
  personal.initModel(sequelize);
  personal_tareas.initModel(sequelize);
  pid_cruce_factura_remito.initModel(sequelize);
  pid_equivalencia_insumo.initModel(sequelize);
  pid_equivalencia_proveedor.initModel(sequelize);
  pla_comercializacion.initModel(sequelize);
  pla_contratistas.initModel(sequelize);
  pla_contratistas_items.initModel(sequelize);
  pla_egresos_actividad.initModel(sequelize);
  pla_egresos_actividad_items.initModel(sequelize);
  pla_financiero_ctas.initModel(sequelize);
  pla_financiero_ctas_items.initModel(sequelize);
  pla_insu.initModel(sequelize);
  pla_insumos.initModel(sequelize);
  pla_insumos_items.initModel(sequelize);
  pla_lotes.initModel(sequelize);
  pla_lotes_tareas.initModel(sequelize);
  pla_lotes_tareas_insumos.initModel(sequelize);
  pla_lotes_tareas_riego.initModel(sequelize);
  pla_modelos.initModel(sequelize);
  pla_modelos_tareas.initModel(sequelize);
  pla_modelos_tareas_insumos.initModel(sequelize);
  pla_modelos_tareas_riego.initModel(sequelize);
  pla_tare.initModel(sequelize);
  pla_tareas.initModel(sequelize);
  pla_tareas_items.initModel(sequelize);
  pla_tareas_personal.initModel(sequelize);
  pla_tareas_riego.initModel(sequelize);
  pla_ventas_produccion.initModel(sequelize);
  pla_ventas_produccion_items.initModel(sequelize);
  plan.initModel(sequelize);
  planeamiento_lotes.initModel(sequelize);
  plani_lluvias.initModel(sequelize);
  presupuesto.initModel(sequelize);
  presupuestos.initModel(sequelize);
  produccion.initModel(sequelize);
  produccion_cania.initModel(sequelize);
  produccion_citrus.initModel(sequelize);
  produccion_olivo.initModel(sequelize);
  //producto_rubro.initModel(sequelize);
  //producto_subrubro.initModel(sequelize);
  promocion_empresa.initModel(sequelize);
  promociones.initModel(sequelize);
  promociones_plan.initModel(sequelize);
  promociones_plan_empresas.initModel(sequelize);
  proveedor_impuestos.initModel(sequelize);
  proveedores.initModel(sequelize);
  proveedores_pagos.initModel(sequelize);
  proveedores_precios_articulos.initModel(sequelize);
  provincia.initModel(sequelize);
  puntos_articulos.initModel(sequelize);
  puntos_clientes.initModel(sequelize);
  puntos_config.initModel(sequelize);
  puntos_de_reposicion.initModel(sequelize);
  puntos_de_venta.initModel(sequelize);
  puntos_de_venta_usuarios.initModel(sequelize);
  puntos_empresas.initModel(sequelize);
  puntos_x_venta.initModel(sequelize);
  raza.initModel(sequelize);
  registros_borrados.initModel(sequelize);
  remitos_campo.initModel(sequelize);
  rendicion.initModel(sequelize);
  rendicion_items.initModel(sequelize);
  rodeo.initModel(sequelize);
  rubros.initModel(sequelize);
  rubros_clientes.initModel(sequelize);
  rubros_iva.initModel(sequelize);
  sanidad.initModel(sequelize);
  secuencia.initModel(sequelize);
  stock.initModel(sequelize);
  stock_campo.initModel(sequelize);
  stock_header.initModel(sequelize);
  stock_item.initModel(sequelize);
  stockheader_estados.initModel(sequelize);
  stockheader_movimientos.initModel(sequelize);
  subrubros.initModel(sequelize);
  superficie_ganadera.initModel(sequelize);
  t_ctacte_marca_saldos.initModel(sequelize);
  t_empresas_servicios.initModel(sequelize);
  t_inf_saldos_hist.initModel(sequelize);
  t_log.initModel(sequelize);
  t_pcuentas_establecimientos.initModel(sequelize);
  t_proveedores_marca_saldos.initModel(sequelize);
  tablas.initModel(sequelize);
  tarea_concepto.initModel(sequelize);
  tareas.initModel(sequelize);
  tareas_precios.initModel(sequelize);
  tareas_seguridad.initModel(sequelize);
  tarjetas.initModel(sequelize);
  tarjetas_plan.initModel(sequelize);
  tarjetas_plan_empresas.initModel(sequelize);
  testing.initModel(sequelize);
  ticket_comprobante.initModel(sequelize);
  tipo_destino.initModel(sequelize);
  tipo_impuesto.initModel(sequelize);
  tipo_mov.initModel(sequelize);
  tipo_servicio_ganaderia.initModel(sequelize);
  tipo_ticket.initModel(sequelize);
  tipos_dinero.initModel(sequelize);
  tipos_documentos.initModel(sequelize);
  tipos_documentos_py.initModel(sequelize);
  tmp_articulos_c.initModel(sequelize);
  tmp_libro_mayor.initModel(sequelize);
  tmp_resultado_x_un.initModel(sequelize);
  transformacion.initModel(sequelize);
  transformacion_items.initModel(sequelize);
  transporte.initModel(sequelize);
  tt_actividades.initModel(sequelize);
  //tt_admstrgest.initModel(sequelize);
  //tt_admstrgest_aux.initModel(sequelize);
  //tt_admstrmen.initModel(sequelize);
  //tt_admstrmen_aux.initModel(sequelize);
  tt_animales.initModel(sequelize);
  tt_anticiposvscancel.initModel(sequelize);
  tt_articulos.initModel(sequelize);
  //tt_articulos_existencia.initModel(sequelize);
  tt_articulos_precios_aux.initModel(sequelize);
  tt_balance.initModel(sequelize);
  //tt_balance_paso.initModel(sequelize);
  tt_balance_temp.initModel(sequelize);
  //tt_cab_admstrmen.initModel(sequelize);
  tt_cashflow_aux1.initModel(sequelize);
  tt_cheques.initModel(sequelize);
  tt_cheques_salidos.initModel(sequelize);
  tt_clientes.initModel(sequelize);
  tt_clientes_ctacte_saldos.initModel(sequelize);
  tt_clientes_ctacte_saldos_aux.initModel(sequelize);
  tt_clientes_saldos_aux.initModel(sequelize);
  tt_comp_numero.initModel(sequelize);
  tt_comprobantes_pendientes.initModel(sequelize);
  tt_cons_stock.initModel(sequelize);
  tt_cons_stock_aux.initModel(sequelize);
  tt_cosecha.initModel(sequelize);
  tt_cotizacion.initModel(sequelize);
  tt_cpro_aux.initModel(sequelize);
  tt_ctas_aux.initModel(sequelize);
  //tt_ctrl_cosecha.initModel(sequelize);
  //tt_ctrl_cosecha_aux.initModel(sequelize);
  tt_cuentas.initModel(sequelize);
  //tt_cuentas_cashflow.initModel(sequelize);
  tt_cuentas_disponibilidades_saldos.initModel(sequelize);
  tt_cuentas_disponibilidades_saldos_aux.initModel(sequelize);
  tt_cuentas_nivel.initModel(sequelize);
  tt_cuentas_saldos.initModel(sequelize);
  tt_cuentas_saldos_aux.initModel(sequelize);
  tt_debug.initModel(sequelize);
  tt_deposito.initModel(sequelize);
  tt_empresa.initModel(sequelize);
  tt_empresas_servicios.initModel(sequelize);
  tt_establecimientos.initModel(sequelize);
  tt_existencias_stock.initModel(sequelize);
  //tt_fechas_cashflow.initModel(sequelize);
  tt_fiscal.initModel(sequelize);
  tt_import_archivo_ingenio.initModel(sequelize);
  //tt_inf_provcontflet.initModel(sequelize);
  //tt_inf_provcontflet_aux.initModel(sequelize);
  tt_inventario.initModel(sequelize);
  tt_inventario_animales.initModel(sequelize);
  tt_invganadero.initModel(sequelize);
  tt_invganadero_aux.initModel(sequelize);
  tt_log.initModel(sequelize);
  tt_lote_actividad.initModel(sequelize);
  tt_nov_animales.initModel(sequelize);
  tt_nov_insumos.initModel(sequelize);
  tt_novedades.initModel(sequelize);
  tt_parametros.initModel(sequelize);
  tt_periodos.initModel(sequelize);
  tt_pla_insumos.initModel(sequelize);
  tt_plapaggral.initModel(sequelize);
  tt_plapaggral_aux.initModel(sequelize);
  tt_proveedor_cliente.initModel(sequelize);
  tt_proveedores.initModel(sequelize);
  tt_proveedores_ctacte_saldos.initModel(sequelize);
  tt_proveedores_ctacte_saldos_aux.initModel(sequelize);
  tt_proveedores_saldos_aux.initModel(sequelize);
  //tt_renumera.initModel(sequelize);
  tt_res_emp_servicios.initModel(sequelize);
  tt_res_emp_servicios_aux.initModel(sequelize);
  tt_resultado_actividades.initModel(sequelize);
  tt_resultado_actividades_aux.initModel(sequelize);
  tt_sql.initModel(sequelize);
  tt_stock_paso.initModel(sequelize);
  tt_tesoreria.initModel(sequelize);
  //tt_tesoreria_aux.initModel(sequelize);
  tt_tesoreria_caso1.initModel(sequelize);
  tt_tesoreria_retenciones.initModel(sequelize);
  //tt_tipo_comprobante.initModel(sequelize);
  tt_unidad_negocio.initModel(sequelize);
  tt_up.initModel(sequelize);
  tt_usuarios_seleccion.initModel(sequelize);
  tt_volcado_impuestos.initModel(sequelize);
  turnos.initModel(sequelize);
  unidad_de_medida.initModel(sequelize);
  unidad_negocio.initModel(sequelize);
  unidad_productiva.initModel(sequelize);
  unidades.initModel(sequelize);
  usuarios.initModel(sequelize);
  usuarios_campo.initModel(sequelize);
  usuarios_depositos.initModel(sequelize);
  usuarios_permisos.initModel(sequelize);
  usuarios_tareas.initModel(sequelize);
  vendedores.initModel(sequelize);
  ventas.initModel(sequelize);
  ventas_cert_deposito.initModel(sequelize);
  ventas_facturas.initModel(sequelize);
  ventas_items.initModel(sequelize);
  ventas_items_serie.initModel(sequelize);
  ventas_medio_de_pago.initModel(sequelize);
  ventas_pagos.initModel(sequelize);
  ventas_produccion.initModel(sequelize);
  ventas_remitos_facturas.initModel(sequelize);
  ventas_retenciones.initModel(sequelize);
  ventas_transporte.initModel(sequelize);
  ventas_unidad_item.initModel(sequelize);
  ventas_vencimientos.initModel(sequelize);
  volcada.initModel(sequelize);
  webservice.initModel(sequelize);
  webservice_afip.initModel(sequelize);


  return {
    act_categoria: act_categoria,
    actividad: actividad,
    actividad_periodo: actividad_periodo,
    actividades_campo: actividades_campo,
    actualizacion: actualizacion,
    actualizacion_dolar: actualizacion_dolar,
    actualizacion_utas: actualizacion_utas,
    afip_comprobantes: afip_comprobantes,
    afip_comprobantes_codigos: afip_comprobantes_codigos,
    afip_conceptos: afip_conceptos,
    afip_cosechas: afip_cosechas,
    afip_cuitdest: afip_cuitdest,
    afip_especies: afip_especies,
    afip_idiomas: afip_idiomas,
    afip_incoterms: afip_incoterms,
    afip_localidades: afip_localidades,
    afip_monedas: afip_monedas,
    afip_nomenclador: afip_nomenclador,
    afip_paises: afip_paises,
    afip_provincias: afip_provincias,
    afip_puntos_ventas: afip_puntos_ventas,
    afip_texportacion: afip_texportacion,
    afip_tipos_datos_opcional: afip_tipos_datos_opcional,
    afip_tipos_documentos: afip_tipos_documentos,
    afip_tipos_iva: afip_tipos_iva,
    afip_tipos_tributos: afip_tipos_tributos,
    afip_unimed: afip_unimed,
    ajustes: ajustes,
    amortizaciones: amortizaciones,
    animales: animales,
    animales_estados: animales_estados,
    aplicaciones: aplicaciones,
    arch_importados: arch_importados,
    //archivo_arba: archivo_arba,
    articulo_equiv_unidades: articulo_equiv_unidades,
    articulos: articulos,
    articulos_caracteristicas: articulos_caracteristicas,
    articulos_caracteristicas_valores: articulos_caracteristicas_valores,
    articulos_serie: articulos_serie,
    articulos_tags: articulos_tags,
    articulos_transformacion: articulos_transformacion,
    articulos_unidad_medida: articulos_unidad_medida,
    asientos: asientos,
    asientos_items: asientos_items,
    asientos_iva: asientos_iva,
    asignar_rubros: asignar_rubros,
    //atributo: atributo,
    atributos_de_precios: atributos_de_precios,
    bancos: bancos,
    bases_contables: bases_contables,
    basicos: basicos,
    borrados: borrados,
    cab_lista_precio: cab_lista_precio,
    cajas: cajas,
    cania_peladores: cania_peladores,
    //carta_porte: carta_porte,
    //carta_porte_det: carta_porte_det,
    categoria: categoria,
    categoria_aplicativos: categoria_aplicativos,
    categoria_iva: categoria_iva,
    chequeras: chequeras,
    cierres_fiscales: cierres_fiscales,
    clientes: clientes,
    clientes2: clientes2,
    clientes_acuerdos: clientes_acuerdos,
    clientes_destinos: clientes_destinos,
    clientes_domicilios: clientes_domicilios,
    clientes_impuestos: clientes_impuestos,
    clientes_pagos: clientes_pagos,
    clientes_seguimiento: clientes_seguimiento,
    colores: colores,
    comision_x_vendedor: comision_x_vendedor,
    compras: compras,
    compras_comprob_ingresos_bruto: compras_comprob_ingresos_bruto,
    compras_comprob_retencion: compras_comprob_retencion,
    compras_facturas: compras_facturas,
    compras_items: compras_items,
    //compras_items_remitos: compras_items_remitos,
    compras_labores: compras_labores,
    compras_pagos: compras_pagos,
    compras_produccion: compras_produccion,
    compras_remitos: compras_remitos,
    compras_retenciones: compras_retenciones,
    compras_retenciones_detalle: compras_retenciones_detalle,
    compras_stock_items: compras_stock_items,
    compras_vencimientos: compras_vencimientos,
    comprobantes_destino: comprobantes_destino,
    comprobantes_formatos: comprobantes_formatos,
    comprobantes_formatos_default: comprobantes_formatos_default,
    comprobantes_relacion: comprobantes_relacion,
    //conceptos: conceptos,
    condicion_venta_tipo: condicion_venta_tipo,
    conf_colores_deudas: conf_colores_deudas,
    conf_ejercicio_economico: conf_ejercicio_economico,
    config: config,
    config_app: config_app,
    config_campo: config_campo,
    config_circuitos: config_circuitos,
    config_importacion: config_importacion,
    config_iva: config_iva,
    config_parametros: config_parametros,
    config_redondeos: config_redondeos,
    config_volcado_impuestos: config_volcado_impuestos,
    configuracion_libro_iva: configuracion_libro_iva,
    //contratos: contratos,
    coordenadas: coordenadas,
    cotizacion: cotizacion,
    cta_cble_grupo: cta_cble_grupo,
    cta_cble_grupo_item: cta_cble_grupo_item,
    cuadrillas: cuadrillas,
    cuentas: cuentas,
    cuentas_cash_flow: cuentas_cash_flow,
    cuentas_cruce: cuentas_cruce,
    cuentas_disponibilidades: cuentas_disponibilidades,
    cuentas_frecuentes: cuentas_frecuentes,
    cuentas_ingenio: cuentas_ingenio,
    cuentas_lotes: cuentas_lotes,
    cuentas_predef_ganaderia: cuentas_predef_ganaderia,
    cuentas_predefinidas: cuentas_predefinidas,
    datawindows: datawindows,
    datos_basicos1: datos_basicos1,
    datos_basicos2: datos_basicos2,
    datos_basicos3: datos_basicos3,
    datos_basicos4: datos_basicos4,
    datos_climaticos: datos_climaticos,
    datos_climaticos_items: datos_climaticos_items,
    depositos: depositos,
    destino_precios: destino_precios,
    //destinos: destinos,
    destinos_campo: destinos_campo,
    destinos_direcciones: destinos_direcciones,
    //destinos_formulas: destinos_formulas,
    destinos_stock: destinos_stock,
    distanci: distanci,
    ec_articulos: ec_articulos,
    ec_articulos_imagenes: ec_articulos_imagenes,
    ec_carrito: ec_carrito,
    ec_categorias_ml: ec_categorias_ml,
    ec_clientes: ec_clientes,
    ec_config: ec_config,
    ec_config_circuitos: ec_config_circuitos,
    ec_config_parametros: ec_config_parametros,
    ec_rubros: ec_rubros,
    ec_subrubros: ec_subrubros,
    ec_tipos_envios: ec_tipos_envios,
    ec_ventas: ec_ventas,
    ec_ventas_items: ec_ventas_items,
    empresa_choferes: empresa_choferes,
    empresas: empresas,
    entidades: entidades,
    equivalencias_packing: equivalencias_packing,
    estab_actividad: estab_actividad,
    estab_categoria: estab_categoria,
    establecimiento: establecimiento,
    establecimientos_depositos: establecimientos_depositos,
    fac_elect_xempresa: fac_elect_xempresa,
    figuras: figuras,
    figuras_items: figuras_items,
    filtro_animales: filtro_animales,
    filtro_cania: filtro_cania,
    filtro_citrus: filtro_citrus,
    filtro_granos: filtro_granos,
    filtro_labores: filtro_labores,
    filtro_mov_per: filtro_mov_per,
    filtro_orden_trabajo: filtro_orden_trabajo,
    filtro_plantacion: filtro_plantacion,
    filtro_stock: filtro_stock,
    filtro_vales: filtro_vales,
    finan_contratistas: finan_contratistas,
    fmt_carta_porte: fmt_carta_porte,
    //fmt_carta_porte_det: fmt_carta_porte_det,
    formato_aplicativo: formato_aplicativo,
    formulas_variables: formulas_variables,
    generador_formula: generador_formula,
    gest_identificador: gest_identificador,
    gest_identificador_movimientos: gest_identificador_movimientos,
    grafico: grafico,
    grupo_animales: grupo_animales,
    grupo_caracteristicas: grupo_caracteristicas,
    //grupo_destino: grupo_destino,
    harroz: harroz,
    havena: havena,
    hcebada: hcebada,
    hcenteno: hcenteno,
    hchia: hchia,
    hcolza: hcolza,
    hgarbanzo: hgarbanzo,
    hgirasol: hgirasol,
    hist_peso_categoria: hist_peso_categoria,
    hist_precio_categoria: hist_precio_categoria,
    hlino: hlino,
    hlupino: hlupino,
    hmaiz: hmaiz,
    hmani: hmani,
    hmijo: hmijo,
    hmoha: hmoha,
    hoja_de_ruta: hoja_de_ruta,
    hoja_de_ruta_items: hoja_de_ruta_items,
    hoja_ruta_estado: hoja_ruta_estado,
    hquinoa: hquinoa,
    hsoja: hsoja,
    hsorgo: hsorgo,
    htrigo: htrigo,
    htriticale: htriticale,
    hviciavillosa: hviciavillosa,
    identificador: identificador,
    identificador_campo: identificador_campo,
    im_usuarios: im_usuarios,
    importacion_declaracion: importacion_declaracion,
    importacion_items: importacion_items,
    impresoras: impresoras,
    impresoras_fiscales: impresoras_fiscales,
    impuestos: impuestos,
    impuestos_cabecera: impuestos_cabecera,
    impuestotercero: impuestotercero,
    impuestotercero_items: impuestotercero_items,
    indice_de_precios: indice_de_precios,
    inseminacion: inseminacion,
    insumos_ordenes_trabajo: insumos_ordenes_trabajo,
    items_cruces: items_cruces,
    items_facturas_cpos: items_facturas_cpos,
    l_margen_bruto: l_margen_bruto,
    labores: labores,
    labores_insumos: labores_insumos,
    labores_log_externo: labores_log_externo,
    labores_mant_tareas: labores_mant_tareas,
    labores_maquinarias: labores_maquinarias,
    labores_personal: labores_personal,
    lista_precios: lista_precios,
    lluvias: lluvias,
    localidad: localidad,
    lote_actividad: lote_actividad,
    lote_actividad_up: lote_actividad_up,
    lotes: lotes,
    lotes_coordenadas: lotes_coordenadas,
    lotes_unidad_productiva: lotes_unidad_productiva,
    maquinar: maquinar,
    maquinas_mant: maquinas_mant,
    maquinas_mant_insumos: maquinas_mant_insumos,
    maquinas_mant_tareas: maquinas_mant_tareas,
    mod_insu: mod_insu,
    mod_tare: mod_tare,
    mod_tareas_personal: mod_tareas_personal,
    mod_tareas_riego: mod_tareas_riego,
    modelos: modelos,
    moneda: moneda,
    movimientos: movimientos,
    movimientos_maquinaria: movimientos_maquinaria,
    nota_pedido: nota_pedido,
    nota_pedido_insumos: nota_pedido_insumos,
    nov_animales: nov_animales,
    novedades: novedades,
    orden_compra: orden_compra,
    orden_compra_centros_costo: orden_compra_centros_costo,
    orden_compra_insumos: orden_compra_insumos,
    orden_de_compra: orden_de_compra,
    orden_de_compra_items: orden_de_compra_items,
    ordenes_sql: ordenes_sql,
    ordentrabajo: ordentrabajo,
    ordentrabajo_insumos: ordentrabajo_insumos,
    ordentrabajo_maquinarias: ordentrabajo_maquinarias,
    ordentrabajo_personal: ordentrabajo_personal,
    origen: origen,
    pais: pais,
    //pbcatcol: pbcatcol,
    //pbcatedt: pbcatedt,
    //pbcatfmt: pbcatfmt,
    //pbcattbl: pbcattbl,
    //pbcatvld: pbcatvld,
    pcuentas: pcuentas,
    pcuentas_modelo: pcuentas_modelo,
    periodos: periodos,
    permisos: permisos,
    personal: personal,
    personal_tareas: personal_tareas,
    pid_cruce_factura_remito: pid_cruce_factura_remito,
    pid_equivalencia_insumo: pid_equivalencia_insumo,
    pid_equivalencia_proveedor: pid_equivalencia_proveedor,
    pla_comercializacion: pla_comercializacion,
    pla_contratistas: pla_contratistas,
    pla_contratistas_items: pla_contratistas_items,
    pla_egresos_actividad: pla_egresos_actividad,
    pla_egresos_actividad_items: pla_egresos_actividad_items,
    pla_financiero_ctas: pla_financiero_ctas,
    pla_financiero_ctas_items: pla_financiero_ctas_items,
    pla_insu: pla_insu,
    pla_insumos: pla_insumos,
    pla_insumos_items: pla_insumos_items,
    pla_lotes: pla_lotes,
    pla_lotes_tareas: pla_lotes_tareas,
    pla_lotes_tareas_insumos: pla_lotes_tareas_insumos,
    pla_lotes_tareas_riego: pla_lotes_tareas_riego,
    pla_modelos: pla_modelos,
    pla_modelos_tareas: pla_modelos_tareas,
    pla_modelos_tareas_insumos: pla_modelos_tareas_insumos,
    pla_modelos_tareas_riego: pla_modelos_tareas_riego,
    pla_tare: pla_tare,
    pla_tareas: pla_tareas,
    pla_tareas_items: pla_tareas_items,
    pla_tareas_personal: pla_tareas_personal,
    pla_tareas_riego: pla_tareas_riego,
    pla_ventas_produccion: pla_ventas_produccion,
    pla_ventas_produccion_items: pla_ventas_produccion_items,
    plan: plan,
    planeamiento_lotes: planeamiento_lotes,
    plani_lluvias: plani_lluvias,
    presupuesto: presupuesto,
    presupuestos: presupuestos,
    produccion: produccion,
    produccion_cania: produccion_cania,
    produccion_citrus: produccion_citrus,
    produccion_olivo: produccion_olivo,
    //producto_rubro: producto_rubro,
    //producto_subrubro: producto_subrubro,
    promocion_empresa: promocion_empresa,
    promociones: promociones,
    promociones_plan: promociones_plan,
    promociones_plan_empresas: promociones_plan_empresas,
    proveedor_impuestos: proveedor_impuestos,
    proveedores: proveedores,
    proveedores_pagos: proveedores_pagos,
    proveedores_precios_articulos: proveedores_precios_articulos,
    provincia: provincia,
    puntos_articulos: puntos_articulos,
    puntos_clientes: puntos_clientes,
    puntos_config: puntos_config,
    puntos_de_reposicion: puntos_de_reposicion,
    puntos_de_venta: puntos_de_venta,
    puntos_de_venta_usuarios: puntos_de_venta_usuarios,
    puntos_empresas: puntos_empresas,
    puntos_x_venta: puntos_x_venta,
    raza: raza,
    registros_borrados: registros_borrados,
    remitos_campo: remitos_campo,
    rendicion: rendicion,
    rendicion_items: rendicion_items,
    rodeo: rodeo,
    rubros: rubros,
    rubros_clientes: rubros_clientes,
    rubros_iva: rubros_iva,
    sanidad: sanidad,
    secuencia: secuencia,
    stock: stock,
    stock_campo: stock_campo,
    stock_header: stock_header,
    stock_item: stock_item,
    stockheader_estados: stockheader_estados,
    stockheader_movimientos: stockheader_movimientos,
    subrubros: subrubros,
    superficie_ganadera: superficie_ganadera,
    t_ctacte_marca_saldos: t_ctacte_marca_saldos,
    t_empresas_servicios: t_empresas_servicios,
    t_inf_saldos_hist: t_inf_saldos_hist,
    t_log: t_log,
    t_pcuentas_establecimientos: t_pcuentas_establecimientos,
    t_proveedores_marca_saldos: t_proveedores_marca_saldos,
    tablas: tablas,
    tarea_concepto: tarea_concepto,
    tareas: tareas,
    tareas_precios: tareas_precios,
    tareas_seguridad: tareas_seguridad,
    tarjetas: tarjetas,
    tarjetas_plan: tarjetas_plan,
    tarjetas_plan_empresas: tarjetas_plan_empresas,
    testing: testing,
    ticket_comprobante: ticket_comprobante,
    tipo_destino: tipo_destino,
    tipo_impuesto: tipo_impuesto,
    tipo_mov: tipo_mov,
    tipo_servicio_ganaderia: tipo_servicio_ganaderia,
    tipo_ticket: tipo_ticket,
    tipos_dinero: tipos_dinero,
    tipos_documentos: tipos_documentos,
    tipos_documentos_py: tipos_documentos_py,
    tmp_articulos_c: tmp_articulos_c,
    tmp_libro_mayor: tmp_libro_mayor,
    tmp_resultado_x_un: tmp_resultado_x_un,
    transformacion: transformacion,
    transformacion_items: transformacion_items,
    transporte: transporte,
    tt_actividades: tt_actividades,
    //tt_admstrgest: tt_admstrgest,
    //tt_admstrgest_aux: tt_admstrgest_aux,
    //tt_admstrmen: tt_admstrmen,
    //tt_admstrmen_aux: tt_admstrmen_aux,
    tt_animales: tt_animales,
    tt_anticiposvscancel: tt_anticiposvscancel,
    tt_articulos: tt_articulos,
    //tt_articulos_existencia: tt_articulos_existencia,
    tt_articulos_precios_aux: tt_articulos_precios_aux,
    tt_balance: tt_balance,
    //tt_balance_paso: tt_balance_paso,
    tt_balance_temp: tt_balance_temp,
    //tt_cab_admstrmen: tt_cab_admstrmen,
    tt_cashflow_aux1: tt_cashflow_aux1,
    tt_cheques: tt_cheques,
    tt_cheques_salidos: tt_cheques_salidos,
    tt_clientes: tt_clientes,
    tt_clientes_ctacte_saldos: tt_clientes_ctacte_saldos,
    tt_clientes_ctacte_saldos_aux: tt_clientes_ctacte_saldos_aux,
    tt_clientes_saldos_aux: tt_clientes_saldos_aux,
    tt_comp_numero: tt_comp_numero,
    tt_comprobantes_pendientes: tt_comprobantes_pendientes,
    tt_cons_stock: tt_cons_stock,
    tt_cons_stock_aux: tt_cons_stock_aux,
    tt_cosecha: tt_cosecha,
    tt_cotizacion: tt_cotizacion,
    tt_cpro_aux: tt_cpro_aux,
    tt_ctas_aux: tt_ctas_aux,
    //tt_ctrl_cosecha: tt_ctrl_cosecha,
    //tt_ctrl_cosecha_aux: tt_ctrl_cosecha_aux,
    tt_cuentas: tt_cuentas,
    //tt_cuentas_cashflow: tt_cuentas_cashflow,
    tt_cuentas_disponibilidades_saldos: tt_cuentas_disponibilidades_saldos,
    tt_cuentas_disponibilidades_saldos_aux: tt_cuentas_disponibilidades_saldos_aux,
    tt_cuentas_nivel: tt_cuentas_nivel,
    tt_cuentas_saldos: tt_cuentas_saldos,
    tt_cuentas_saldos_aux: tt_cuentas_saldos_aux,
    tt_debug: tt_debug,
    tt_deposito: tt_deposito,
    tt_empresa: tt_empresa,
    tt_empresas_servicios: tt_empresas_servicios,
    tt_establecimientos: tt_establecimientos,
    tt_existencias_stock: tt_existencias_stock,
    //tt_fechas_cashflow: tt_fechas_cashflow,
    tt_fiscal: tt_fiscal,
    tt_import_archivo_ingenio: tt_import_archivo_ingenio,
    //tt_inf_provcontflet: tt_inf_provcontflet,
    //tt_inf_provcontflet_aux: tt_inf_provcontflet_aux,
    tt_inventario: tt_inventario,
    tt_inventario_animales: tt_inventario_animales,
    tt_invganadero: tt_invganadero,
    tt_invganadero_aux: tt_invganadero_aux,
    tt_log: tt_log,
    tt_lote_actividad: tt_lote_actividad,
    tt_nov_animales: tt_nov_animales,
    tt_nov_insumos: tt_nov_insumos,
    tt_novedades: tt_novedades,
    tt_parametros: tt_parametros,
    tt_periodos: tt_periodos,
    tt_pla_insumos: tt_pla_insumos,
    tt_plapaggral: tt_plapaggral,
    tt_plapaggral_aux: tt_plapaggral_aux,
    tt_proveedor_cliente: tt_proveedor_cliente,
    tt_proveedores: tt_proveedores,
    tt_proveedores_ctacte_saldos: tt_proveedores_ctacte_saldos,
    tt_proveedores_ctacte_saldos_aux: tt_proveedores_ctacte_saldos_aux,
    tt_proveedores_saldos_aux: tt_proveedores_saldos_aux,
    //tt_renumera: tt_renumera,
    tt_res_emp_servicios: tt_res_emp_servicios,
    tt_res_emp_servicios_aux: tt_res_emp_servicios_aux,
    tt_resultado_actividades: tt_resultado_actividades,
    tt_resultado_actividades_aux: tt_resultado_actividades_aux,
    tt_sql: tt_sql,
    tt_stock_paso: tt_stock_paso,
    tt_tesoreria: tt_tesoreria,
    //tt_tesoreria_aux: tt_tesoreria_aux,
    tt_tesoreria_caso1: tt_tesoreria_caso1,
    tt_tesoreria_retenciones: tt_tesoreria_retenciones,
    //tt_tipo_comprobante: tt_tipo_comprobante,
    tt_unidad_negocio: tt_unidad_negocio,
    tt_up: tt_up,
    tt_usuarios_seleccion: tt_usuarios_seleccion,
    tt_volcado_impuestos: tt_volcado_impuestos,
    turnos: turnos,
    unidad_de_medida: unidad_de_medida,
    unidad_negocio: unidad_negocio,
    unidad_productiva: unidad_productiva,
    unidades: unidades,
    usuarios: usuarios,
    usuarios_campo: usuarios_campo,
    usuarios_depositos: usuarios_depositos,
    usuarios_permisos: usuarios_permisos,
    usuarios_tareas: usuarios_tareas,
    vendedores: vendedores,
    ventas: ventas,
    ventas_cert_deposito: ventas_cert_deposito,
    ventas_facturas: ventas_facturas,
    ventas_items: ventas_items,
    ventas_items_serie: ventas_items_serie,
    ventas_medio_de_pago: ventas_medio_de_pago,
    ventas_pagos: ventas_pagos,
    ventas_produccion: ventas_produccion,
    ventas_remitos_facturas: ventas_remitos_facturas,
    ventas_retenciones: ventas_retenciones,
    ventas_transporte: ventas_transporte,
    ventas_unidad_item: ventas_unidad_item,
    ventas_vencimientos: ventas_vencimientos,
    volcada: volcada,
    webservice: webservice,
    webservice_afip: webservice_afip,
  };
}
