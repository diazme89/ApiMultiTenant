"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const sequelize_1 = require("sequelize");
class config extends sequelize_1.Model {
    static initModel(sequelize) {
        config.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false,
                primaryKey: true
            },
            empresa: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            direccion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            telefonos: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            categoria_iva: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cuit: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            ingresos_brutos: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            inicio_actividad: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            iva_compras: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            iva_ventas: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            ingresos_brutos_compras: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            ingresos_brutos_ventas: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            impuesto_interno_compras: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            impuesto_interno_ventas: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            numero_de_base: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            no_grabado_compras: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            no_grabado_ventas: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            recibe_maquinas: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            agente_retencion: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            trabaja_synagro: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            nvlp_comision: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nvlp_recupero_gastos: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nvlp_fletes: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nvlp_bonificacion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            ventas_bonificacion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            valor_dolar: {
                type: sequelize_1.DataTypes.DECIMAL(6, 3),
                allowNull: true
            },
            cuenta_ingresos: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cuenta_egresos: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            mueve_stock: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            deposito_predeterminado: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            registra_ordenes: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            nvlpv_retencion_ganancias: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            iva_cerrado_hasta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            nvlpv_retencion_iva: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            gestion_comercial: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            version_db: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
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
            trabajo_oc: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            tipo_impresion: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            imp_factura_vtas: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            imp_remito_vtas: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            imp_otros: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            imp_factura_vtas_bndj: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            imp_remito_vtas_bndj: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            imp_recibo_vtas_bndj: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            genera_remito_auto: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            percep_compras_iva: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            percep_compras_ingr_brutos: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            espejado_activo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            espejado_usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            espejado_clave: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            espejado_servidor: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            espejado_archivo: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            espejado_tcp_ip: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            espejado_ultimo_borrado: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            genera_recibo_auto: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            imp_factura_vtas_copias: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            imp_remito_vtas_copias: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            imp_otros_copias: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            imp_factura_vtas_auto: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            imp_remito_vtas_auto: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            imp_factura_vtas_b: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            recibo_prov_numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            imp_recibo_vtas_copias: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            cta_bonificacion_venta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            agente_ret_ing_brutos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            advertencia_stock: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            activar_op_cta_cble: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            mostrar_cliente_moroso: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            espejado_tcp_puerto: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            espejado_servidor_dart: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            ultimo_deposito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            trabaja_unid_medida: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            usar_descuentos_fact_vta: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            panel: {
                type: sequelize_1.DataTypes.CHAR(1),
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
            usa_fiscal: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            base_campo: {
                type: sequelize_1.DataTypes.CHAR(150),
                allowNull: true
            },
            fac_vta_multiple_remito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            nombre_motor_campo: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            tipo_conexion: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            server_campo: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            liq_compra_retencion_ganancias: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            liq_compra_retencion_iva: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            habilit_ctas_cbles_grupos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            usa_multimoneda: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            moneda: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            },
            pais: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            activa_lista: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            mueve_stock_comp: {
                type: sequelize_1.DataTypes.CHAR(2),
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
            permitir_cancelar_otro_centro_co: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilita_edicion_comprobante: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            campo_tipo: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            },
            cierra_inactividad_minutos: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            keep_alive_connection: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            usa_factelect: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            modo_factelect: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            cierre_balance_hasta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            alicuota_x_proveedor: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            agente_ret_ing_brutos_perso_fisi: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            usa_factelect_exportacion: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            clave_certificado_digital: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            punto_venta_afip: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            habilitar_circuito_corredor: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            aplica_mascara: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            digitos_mascara: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            percepcion1: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            percepcion2: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            monto_minimo_ret_ganan: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            permitir_cancelar_otro_centro_costo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            agente_ret_ing_brutos_perso_fisica: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            forzar_deposito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_num_orden_venta_automatico: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cuit_duplicado: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true,
                defaultValue: 0
            },
            cod_periodo_activo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            usa_gen_formula: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_dep_destino_presu: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            facmos_habilita_edit_nro: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            facmos_habilita_edit_fecha: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            remcompra_habilita_edit_fecha: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            PackID_habilitado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            PackID_server: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            },
            PackID_database: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            habilitar_tags_articulos: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            impuesto_municipal_ventas: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            impuesto_nacional_ventas: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            impuesto_municipal_compras: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            impuesto_nacional_compras: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            habilitar_numero_recibos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_ctrl_stock_gen_remito_vta: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_modo_intersucursales: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilitar_pago_factura: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            cantidad_dias_consulta: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            cod_cta_interes_recargo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_cta_pago_efectivo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            habilitar_rep_ret_op: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true,
                defaultValue: 0
            },
            monto_ctrol_doc_ticket_b: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            habilitar_lp_articulo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            mueve_stock_mpago: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            habilitar_uso_consignatario: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            imprimir_remito_fiscal: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilita_ptovta_recibo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            permitir_gen_nc_sin_comprob: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_promociones: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilitar_factura: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            ocultar_precio_remito_ventas: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            ocultar_precio_remito_compras: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilita_validacion_iva: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            imprime_automatico: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            tipo_impresor_fiscal: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "H"
            },
            version_impresor_fiscal: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true,
                defaultValue: "N"
            },
            liq_compra_retencion_iibb: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            habilitar_nc: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            habilita_pedido_venta: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            dias_vigencia_PV: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            usa_mapa_de_fecha: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            usa_gen_formula_venta: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "S"
            },
            nro_version_update: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            permitir_actualizar_base: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true,
                defaultValue: "N"
            },
            usa_config_nueva_libro_iva: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            usa_webservice: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            aviso_imp_compra: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            aviso_imp_venta: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            usa_domicilio_entrega: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilitar_uso_solicitud_precio: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilitar_gest_identificador: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            vendedor_obligatorio: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            Precio_Unit_Iva_Visible: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            usa_equivalencia_medida: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilitar_cierre_caja: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            relacion_usuario_vendedor: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilitar_presupuesto_confirmado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilitar_movimiento_interdeposito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilita_lista_precio_predef_etiq: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            lista_precio_predef_etiq: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                defaultValue: 0
            },
            cta_cble_descuento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            usa_pv_sin_stock: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            min_dias_entrega_pv: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            no_modifica_cond_de_vta: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilita_control_vigencia_OC: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            dias_vigencia_OC: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            trabaja_art_importacion: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            usa_sistema_puntos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            porc_nc_financiera: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            usa_simulacion_pago_pr: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            usa_vendedor_x_fa: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "F"
            },
            permitir_gen_nc_sin_comprob_c: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilitar_nd: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            permitir_gen_nd_sin_comprob: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilita_ptovta_recibo_multiple: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            usa_autorizacion_oc: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            monto_autoriza_oc: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            dias_autorizacion_oc: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            habilita_cliente_predet_x_emp: {
                type: sequelize_1.DataTypes.CHAR(1),
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
exports.config = config;
//# sourceMappingURL=config.js.map