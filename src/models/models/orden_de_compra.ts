import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface orden_de_compraAttributes {
  id: number;
  fecha?: string;
  tipo_comprobante?: string;
  tipo_factura?: string;
  cod_proveedor?: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  cod_deposito?: number;
  remito_nro?: number;
  numero?: number;
  importe_iva?: number;
  imp_internos?: number;
  ingresos_brutos?: number;
  importe_total?: number;
  detalle?: string;
  cod_cuenta?: number;
  importe_iva_10_5?: number;
  importe_iva_27?: number;
  emisor?: string;
  autorizador?: string;
  datos_empresa?: string;
  factura_id?: number;
  no_grabado?: number;
  tag?: string;
  cod_autoriza?: number;
  cod_emite?: number;
  cod_solicita?: number;
  tipo_pago?: string;
  moneda?: string;
  cotizacion?: number;
  fact_pto_de_venta?: number;
  fact_numero?: number;
  fact_fecha?: string;
  rem_numero?: number;
  recibida?: string;
  cod_empresa?: number;
  aprobado?: number;
  anulada?: string;
  remito_id?: number;
  solicita_id?: number;
  autoriza_id?: number;
  condicion_de_pago?: string;
  observaciones?: string;
}

export type orden_de_compraPk = "id";
export type orden_de_compraId = orden_de_compra[orden_de_compraPk];
export type orden_de_compraCreationAttributes = Optional<orden_de_compraAttributes, orden_de_compraPk>;

export class orden_de_compra extends Model<orden_de_compraAttributes, orden_de_compraCreationAttributes> implements orden_de_compraAttributes {
  id!: number;
  fecha?: string;
  tipo_comprobante?: string;
  tipo_factura?: string;
  cod_proveedor?: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  cod_deposito?: number;
  remito_nro?: number;
  numero?: number;
  importe_iva?: number;
  imp_internos?: number;
  ingresos_brutos?: number;
  importe_total?: number;
  detalle?: string;
  cod_cuenta?: number;
  importe_iva_10_5?: number;
  importe_iva_27?: number;
  emisor?: string;
  autorizador?: string;
  datos_empresa?: string;
  factura_id?: number;
  no_grabado?: number;
  tag?: string;
  cod_autoriza?: number;
  cod_emite?: number;
  cod_solicita?: number;
  tipo_pago?: string;
  moneda?: string;
  cotizacion?: number;
  fact_pto_de_venta?: number;
  fact_numero?: number;
  fact_fecha?: string;
  rem_numero?: number;
  recibida?: string;
  cod_empresa?: number;
  aprobado?: number;
  anulada?: string;
  remito_id?: number;
  solicita_id?: number;
  autoriza_id?: number;
  condicion_de_pago?: string;
  observaciones?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof orden_de_compra {
    orden_de_compra.init({
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
    cod_deposito: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    remito_nro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(15,0),
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
    importe_total: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    detalle: {
      type: DataTypes.STRING(500),
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
    emisor: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    autorizador: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    datos_empresa: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    factura_id: {
      type: DataTypes.DECIMAL(10,0),
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
    cod_autoriza: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_emite: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_solicita: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tipo_pago: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    moneda: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cotizacion: {
      type: DataTypes.DECIMAL(8,3),
      allowNull: true
    },
    fact_pto_de_venta: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    fact_numero: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true
    },
    fact_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rem_numero: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true
    },
    recibida: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    aprobado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    anulada: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    remito_id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    solicita_id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    autoriza_id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    condicion_de_pago: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orden_de_compra',
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
        name: "orden_de_compra_cod_cuenta",
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
        ]
      },
      {
        name: "orden_de_compra_cod_deposito",
        using: "BTREE",
        fields: [
          { name: "cod_deposito" },
        ]
      },
      {
        name: "orden_de_compra_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha" },
        ]
      },
      {
        name: "orden_de_compra_tipo_comprobante",
        using: "BTREE",
        fields: [
          { name: "tipo_comprobante" },
        ]
      },
      {
        name: "orden_de_compra_factura_id",
        using: "BTREE",
        fields: [
          { name: "factura_id" },
        ]
      },
      {
        name: "orden_de_compra_cod_empresa_fecha_tipo_comp",
        using: "BTREE",
        fields: [
          { name: "cod_empresa" },
          { name: "fecha" },
          { name: "tipo_comprobante" },
        ]
      },
    ]
  });
  return orden_de_compra;
  }
}
