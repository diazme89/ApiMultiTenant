import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface comprasAttributes {
  id: number;
  fecha?: string;
  tipo_comprobante?: string;
  tipo_factura?: string;
  cod_proveedor?: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  bonificacion?: number;
  operacion?: string;
  tipo_operacion?: string;
  forma_pago?: string;
  cod_deposito?: number;
  remito_nro?: number;
  numero?: number;
  importe_iva?: number;
  imp_internos?: number;
  ingresos_brutos?: number;
  per_iva?: number;
  per_ingresos_brutos?: number;
  per_ganancias?: number;
  importe_total?: number;
  detalle?: string;
  contado?: string;
  nro_caja?: number;
  cod_cuenta?: number;
  importe_iva_10_5?: number;
  importe_iva_27?: number;
  no_grabado?: number;
  tag?: string;
  numero_viejo?: string;
  fecha_comprobante?: string;
  punto_de_venta?: number;
  tipo_pago?: string;
  ticket?: string;
  moneda?: string;
  cotizacion?: number;
  comision?: number;
  porc_comision?: number;
  porc_bonificacion?: number;
  iva_por?: number;
  porc_gastos?: number;
  gastos?: number;
  flete?: number;
  porc_iva_gastos?: number;
  iva_gastos?: number;
  porc_iva_flete?: number;
  iva_flete?: number;
  mueve_stock?: string;
  anulada?: string;
  cod_solicita?: number;
  cod_controla?: number;
  cod_autoriza?: number;
  nro_cai?: number;
  vencimiento_cai?: string;
  gastos_iva_21?: number;
  gastos_iva_27?: number;
  gastos_iva_105?: number;
  otras_percep?: number;
  cod_empresa?: number;
  establecimiento?: number;
  cod_corredor?: number;
  tipo_compra?: number;
  nro_importacion?: number;
  cod_control?: number;
  diferencia_cotizacion?: number;
  cod_periodo?: number;
  remito_id?: number;
  factura_id?: number;
  cod_unidad_negocio_cab?: number;
  nrointerno?: number;
  tipo_documento?: number;
  cod_jurisdiccion?: number;
  condicion_venta_tipo?: number;
  desc_porc?: number;
  desc_total?: number;
  id_comp_asoc?: number;
  tipo_comp_asoc?: string;
  num_comp_asoc?: number;
  pto_vta_comp_asoc?: number;
  tipo_nc?: string;
  moneda_2?: string;
  cotizacion_2?: number;
}

export type comprasPk = "id";
export type comprasId = compras[comprasPk];
export type comprasCreationAttributes = Optional<comprasAttributes, comprasPk>;

export class compras extends Model<comprasAttributes, comprasCreationAttributes> implements comprasAttributes {
  id!: number;
  fecha?: string;
  tipo_comprobante?: string;
  tipo_factura?: string;
  cod_proveedor?: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  bonificacion?: number;
  operacion?: string;
  tipo_operacion?: string;
  forma_pago?: string;
  cod_deposito?: number;
  remito_nro?: number;
  numero?: number;
  importe_iva?: number;
  imp_internos?: number;
  ingresos_brutos?: number;
  per_iva?: number;
  per_ingresos_brutos?: number;
  per_ganancias?: number;
  importe_total?: number;
  detalle?: string;
  contado?: string;
  nro_caja?: number;
  cod_cuenta?: number;
  importe_iva_10_5?: number;
  importe_iva_27?: number;
  no_grabado?: number;
  tag?: string;
  numero_viejo?: string;
  fecha_comprobante?: string;
  punto_de_venta?: number;
  tipo_pago?: string;
  ticket?: string;
  moneda?: string;
  cotizacion?: number;
  comision?: number;
  porc_comision?: number;
  porc_bonificacion?: number;
  iva_por?: number;
  porc_gastos?: number;
  gastos?: number;
  flete?: number;
  porc_iva_gastos?: number;
  iva_gastos?: number;
  porc_iva_flete?: number;
  iva_flete?: number;
  mueve_stock?: string;
  anulada?: string;
  cod_solicita?: number;
  cod_controla?: number;
  cod_autoriza?: number;
  nro_cai?: number;
  vencimiento_cai?: string;
  gastos_iva_21?: number;
  gastos_iva_27?: number;
  gastos_iva_105?: number;
  otras_percep?: number;
  cod_empresa?: number;
  establecimiento?: number;
  cod_corredor?: number;
  tipo_compra?: number;
  nro_importacion?: number;
  cod_control?: number;
  diferencia_cotizacion?: number;
  cod_periodo?: number;
  remito_id?: number;
  factura_id?: number;
  cod_unidad_negocio_cab?: number;
  nrointerno?: number;
  tipo_documento?: number;
  cod_jurisdiccion?: number;
  condicion_venta_tipo?: number;
  desc_porc?: number;
  desc_total?: number;
  id_comp_asoc?: number;
  tipo_comp_asoc?: string;
  num_comp_asoc?: number;
  pto_vta_comp_asoc?: number;
  tipo_nc?: string;
  moneda_2?: string;
  cotizacion_2?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras {
    compras.init({
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
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
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
    remito_nro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    importe_iva: {
      type: DataTypes.DECIMAL(18,6),
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
    per_iva: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    per_ingresos_brutos: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    per_ganancias: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    importe_total: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    detalle: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    contado: {
      type: DataTypes.CHAR(1),
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
    numero_viejo: {
      type: DataTypes.CHAR(14),
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
    tipo_pago: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ticket: {
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
    comision: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    porc_comision: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    porc_bonificacion: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    iva_por: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    porc_gastos: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    gastos: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    flete: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    porc_iva_gastos: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    iva_gastos: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    porc_iva_flete: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    iva_flete: {
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
    cod_solicita: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_controla: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_autoriza: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    nro_cai: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true,
      defaultValue: 0
    },
    vencimiento_cai: {
      type: DataTypes.DATEONLY,
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
    otras_percep: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    establecimiento: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cod_corredor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_compra: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    nro_importacion: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    cod_control: {
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
    remito_id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    factura_id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_unidad_negocio_cab: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nrointerno: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_documento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_jurisdiccion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    condicion_venta_tipo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    desc_porc: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    desc_total: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    id_comp_asoc: {
      type: DataTypes.DECIMAL(10,0),
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
    tipo_nc: {
      type: DataTypes.CHAR(2),
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
    }
  }, {
    sequelize,
    tableName: 'compras',
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
        name: "idx_compras_numero",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numero" },
          { name: "punto_de_venta" },
          { name: "tipo_comprobante" },
          { name: "cod_proveedor" },
          { name: "tipo_factura" },
          { name: "tag" },
          { name: "nro_cai" },
          { name: "vencimiento_cai" },
        ]
      },
      {
        name: "compras_nro_comp",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numero" },
          { name: "cod_proveedor" },
          { name: "punto_de_venta" },
          { name: "tipo_comprobante" },
          { name: "tipo_factura" },
          { name: "tag" },
        ]
      },
      {
        name: "compras_cod_cuenta",
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
        ]
      },
      {
        name: "compras_cod_deposito",
        using: "BTREE",
        fields: [
          { name: "cod_deposito" },
        ]
      },
      {
        name: "compras_cod_proveedor",
        using: "BTREE",
        fields: [
          { name: "cod_proveedor" },
        ]
      },
      {
        name: "compras_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha" },
        ]
      },
      {
        name: "compras_id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "compras_tipo_comprobante",
        using: "BTREE",
        fields: [
          { name: "tipo_comprobante" },
        ]
      },
      {
        name: "compras_cotizacion",
        using: "BTREE",
        fields: [
          { name: "cotizacion" },
        ]
      },
      {
        name: "compras_cod_emp_fec_tipo_comp",
        using: "BTREE",
        fields: [
          { name: "cod_empresa" },
          { name: "fecha" },
          { name: "tipo_comprobante" },
        ]
      },
      {
        name: "idx_compras_xcorredor",
        using: "BTREE",
        fields: [
          { name: "cod_corredor" },
        ]
      },
      {
        name: "idx_compras_xanulada",
        using: "BTREE",
        fields: [
          { name: "anulada" },
        ]
      },
      {
        name: "idx_compras_tag",
        using: "BTREE",
        fields: [
          { name: "tag" },
        ]
      },
    ]
  });
  return compras;
  }
}
