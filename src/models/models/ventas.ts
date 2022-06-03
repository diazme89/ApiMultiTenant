import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventasAttributes {
  id: number;
  fecha?: string;
  tipo_comprobante?: string;
  tipo_factura?: string;
  numero?: number;
  cod_cliente?: number;
  cod_vendedor?: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  bonificacion?: number;
  mostrador?: string;
  operacion?: string;
  tipo_operacion?: string;
  forma_pago?: string;
  cod_deposito?: number;
  original_impreso?: string;
  iva_importe?: number;
  total?: number;
  recibo_factura_nro?: number;
  observaciones?: string;
  bonificacion_texto?: string;
  imp_fiscal?: number;
  iva?: number;
  nro_caja?: number;
  cod_cuenta?: number;
  imp_internos?: number;
  ingresos_brutos?: number;
  importe_iva_10_5?: number;
  importe_iva_27?: number;
  no_grabado?: number;
  tag?: string;
  fecha_comprobante?: string;
  punto_de_venta?: number;
  tipo_recibo?: string;
  moneda?: string;
  cotizacion?: number;
  porc_bonificacion?: number;
  gastos_iva_21?: number;
  gastos_iva_27?: number;
  gastos_iva_105?: number;
  mueve_stock?: string;
  anulada?: string;
  condicion_venta?: string;
  nro_orden_compra?: string;
  nro_factura?: number;
  nro_remito?: number;
  gastos?: number;
  otras_percep?: number;
  cod_transporte?: number;
  cod_empresa?: number;
  neto?: number;
  establecimiento?: number;
  talonario_manual?: string;
  cae?: string;
  fecha_cae?: string;
  identificador?: number;
  tipo_exportacion?: number;
  permiso_exportacion?: string;
  pais_exportacion?: number;
  idioma_comprobante?: string;
  afip_obs?: string;
  afip_incoterms?: string;
  afip_incoterms_ds?: string;
  afip_filename_xml?: string;
  afip_cuitdest?: number;
  moneda_aux?: string;
  tipo_comp_asoc?: string;
  num_comp_asoc?: number;
  pto_vta_comp_asoc?: number;
  tipo_presupuesto?: string;
  contrareembolso?: number;
  observaciones_aux?: string;
  fac_electronica?: number;
  afip_comprobantes_fe?: string;
  afip_conceptos_fe?: number;
  afip_tipdoc_fe?: number;
  afip_fecservdesde_fe?: string;
  afip_fecservhasta_fe?: string;
  afip_fecvtopago_fe?: string;
  cod_destino?: number;
  cod_corredor?: number;
  condicion_venta_tipo?: number;
  id_comp_asoc?: number;
  cod_control?: string;
  nro_autorizacion?: number;
  diferencia_cotizacion?: number;
  cod_periodo?: number;
  cod_unidad_negocio_cab?: number;
  id_contrato?: number;
  cod_deposito_destino?: number;
  tipo_documento?: number;
  numero_cai?: number;
  vencimiento_cai?: string;
  cod_jurisdiccion?: number;
  cod_lista_precios?: number;
  cod_actividad?: number;
  afip_cod_barra?: string;
  cod_jurisdiccion_comerc?: number;
  estado_im?: string;
  fecha_entrega?: string;
  tipo_nc?: string;
  id_destino?: number;
  id_permiso?: string;
  pais_dest_merc?: number;
  genero_re_auto?: string;
  cod_compatibilidad?: string;
  cod_domicilio?: number;
  fecha_comp_asoc?: string;
  afip_alt_negociacion?: string;
  moneda_2?: string;
  cotizacion_2?: number;
  cod_turno?: number;
}

export type ventasPk = "id";
export type ventasId = ventas[ventasPk];
export type ventasCreationAttributes = Optional<ventasAttributes, ventasPk>;

export class ventas extends Model<ventasAttributes, ventasCreationAttributes> implements ventasAttributes {
  id!: number;
  fecha?: string;
  tipo_comprobante?: string;
  tipo_factura?: string;
  numero?: number;
  cod_cliente?: number;
  cod_vendedor?: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  bonificacion?: number;
  mostrador?: string;
  operacion?: string;
  tipo_operacion?: string;
  forma_pago?: string;
  cod_deposito?: number;
  original_impreso?: string;
  iva_importe?: number;
  total?: number;
  recibo_factura_nro?: number;
  observaciones?: string;
  bonificacion_texto?: string;
  imp_fiscal?: number;
  iva?: number;
  nro_caja?: number;
  cod_cuenta?: number;
  imp_internos?: number;
  ingresos_brutos?: number;
  importe_iva_10_5?: number;
  importe_iva_27?: number;
  no_grabado?: number;
  tag?: string;
  fecha_comprobante?: string;
  punto_de_venta?: number;
  tipo_recibo?: string;
  moneda?: string;
  cotizacion?: number;
  porc_bonificacion?: number;
  gastos_iva_21?: number;
  gastos_iva_27?: number;
  gastos_iva_105?: number;
  mueve_stock?: string;
  anulada?: string;
  condicion_venta?: string;
  nro_orden_compra?: string;
  nro_factura?: number;
  nro_remito?: number;
  gastos?: number;
  otras_percep?: number;
  cod_transporte?: number;
  cod_empresa?: number;
  neto?: number;
  establecimiento?: number;
  talonario_manual?: string;
  cae?: string;
  fecha_cae?: string;
  identificador?: number;
  tipo_exportacion?: number;
  permiso_exportacion?: string;
  pais_exportacion?: number;
  idioma_comprobante?: string;
  afip_obs?: string;
  afip_incoterms?: string;
  afip_incoterms_ds?: string;
  afip_filename_xml?: string;
  afip_cuitdest?: number;
  moneda_aux?: string;
  tipo_comp_asoc?: string;
  num_comp_asoc?: number;
  pto_vta_comp_asoc?: number;
  tipo_presupuesto?: string;
  contrareembolso?: number;
  observaciones_aux?: string;
  fac_electronica?: number;
  afip_comprobantes_fe?: string;
  afip_conceptos_fe?: number;
  afip_tipdoc_fe?: number;
  afip_fecservdesde_fe?: string;
  afip_fecservhasta_fe?: string;
  afip_fecvtopago_fe?: string;
  cod_destino?: number;
  cod_corredor?: number;
  condicion_venta_tipo?: number;
  id_comp_asoc?: number;
  cod_control?: string;
  nro_autorizacion?: number;
  diferencia_cotizacion?: number;
  cod_periodo?: number;
  cod_unidad_negocio_cab?: number;
  id_contrato?: number;
  cod_deposito_destino?: number;
  tipo_documento?: number;
  numero_cai?: number;
  vencimiento_cai?: string;
  cod_jurisdiccion?: number;
  cod_lista_precios?: number;
  cod_actividad?: number;
  afip_cod_barra?: string;
  cod_jurisdiccion_comerc?: number;
  estado_im?: string;
  fecha_entrega?: string;
  tipo_nc?: string;
  id_destino?: number;
  id_permiso?: string;
  pais_dest_merc?: number;
  genero_re_auto?: string;
  cod_compatibilidad?: string;
  cod_domicilio?: number;
  fecha_comp_asoc?: string;
  afip_alt_negociacion?: string;
  moneda_2?: string;
  cotizacion_2?: number;
  cod_turno?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas {
    ventas.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tipo_comprobante: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    tipo_factura: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_vendedor: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    usuario_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usuario_hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    bonificacion: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    mostrador: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    operacion: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    tipo_operacion: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    forma_pago: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    original_impreso: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    iva_importe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    recibo_factura_nro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    bonificacion_texto: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    imp_fiscal: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    iva: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    nro_caja: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    imp_internos: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    ingresos_brutos: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    importe_iva_10_5: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    importe_iva_27: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    no_grabado: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fecha_comprobante: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    punto_de_venta: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tipo_recibo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    moneda: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cotizacion: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    porc_bonificacion: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    gastos_iva_21: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    gastos_iva_27: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    gastos_iva_105: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    mueve_stock: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    anulada: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    condicion_venta: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    nro_orden_compra: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    nro_factura: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    nro_remito: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    gastos: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    otras_percep: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cod_transporte: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    neto: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    establecimiento: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    talonario_manual: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cae: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fecha_cae: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    identificador: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    },
    tipo_exportacion: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    permiso_exportacion: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    pais_exportacion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    idioma_comprobante: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    afip_obs: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    afip_incoterms: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    afip_incoterms_ds: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    afip_filename_xml: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    afip_cuitdest: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    },
    moneda_aux: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    tipo_comp_asoc: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    num_comp_asoc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    pto_vta_comp_asoc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_presupuesto: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    contrareembolso: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    observaciones_aux: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    fac_electronica: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    afip_comprobantes_fe: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    afip_conceptos_fe: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    afip_tipdoc_fe: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    afip_fecservdesde_fe: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    afip_fecservhasta_fe: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    afip_fecvtopago_fe: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_destino: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cod_corredor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    condicion_venta_tipo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    id_comp_asoc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_control: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    nro_autorizacion: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    diferencia_cotizacion: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_unidad_negocio_cab: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_contrato: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_deposito_destino: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_documento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    numero_cai: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true,
      defaultValue: 0
    },
    vencimiento_cai: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_jurisdiccion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_lista_precios: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    afip_cod_barra: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cod_jurisdiccion_comerc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    estado_im: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fecha_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tipo_nc: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    id_destino: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_permiso: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    pais_dest_merc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    genero_re_auto: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    cod_compatibilidad: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_domicilio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_comp_asoc: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    afip_alt_negociacion: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    moneda_2: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cotizacion_2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true,
      defaultValue: 1.000000
    },
    cod_turno: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ventas',
    hasTrigger: true,
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
      {
        name: "cod_compatibilidad",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_compatibilidad" },
        ]
      },
      {
        name: "ventas_cod_cliente",
        using: "BTREE",
        fields: [
          { name: "cod_cliente" },
        ]
      },
      {
        name: "ventas_cod_cuenta",
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
        ]
      },
      {
        name: "ventas_cod_deposito",
        using: "BTREE",
        fields: [
          { name: "cod_deposito" },
        ]
      },
      {
        name: "ventas_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha" },
        ]
      },
      {
        name: "ventas_cod_emp_fec_tipo_comp",
        using: "BTREE",
        fields: [
          { name: "cod_empresa" },
          { name: "fecha" },
          { name: "tipo_comprobante" },
        ]
      },
      {
        name: "idx_ventas_numero",
        using: "BTREE",
        fields: [
          { name: "numero" },
          { name: "punto_de_venta" },
          { name: "tipo_comprobante" },
          { name: "tipo_factura" },
          { name: "tag" },
          { name: "cod_empresa" },
          { name: "numero_cai" },
          { name: "cod_cliente" },
        ]
      },
      {
        name: "idx_tipo_comp_usuario",
        using: "BTREE",
        fields: [
          { name: "tipo_comprobante" },
          { name: "usuario_fecha" },
          { name: "usuario" },
        ]
      },
    ]
  });
  return ventas;
  }
}
