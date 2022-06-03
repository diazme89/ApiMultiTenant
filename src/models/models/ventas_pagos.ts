import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventas_pagosAttributes {
  id: number;
  id_comprobante: number;
  cond_pago: string;
  importe?: number;
  cheque_banco?: string;
  cheque_numero?: string;
  cheque_origen?: string;
  cheque_tipo?: string;
  cheque_fec_emision?: string;
  cheque_fec_pago?: string;
  tarjeta_nombre?: string;
  tarjeta_numero?: string;
  tarjeta_num_cupon?: string;
  tarjeta_cod_autorizacion?: string;
  cod_moneda_pago?: string;
  nro_caja?: number;
  cod_cuenta?: number;
  conciliacion_bancaria?: string;
  fec_conciliacion_bancaria?: string;
  cod_unidad_negocio?: number;
  cod_tarjeta?: number;
  cod_tarjeta_plan?: number;
  tarjeta_fec_presentacion?: string;
  tarjeta_liq_numero?: number;
  tarjeta_lote_numero?: number;
  tarjeta_resumen_numero?: number;
  cod_banco?: number;
  cheque_id?: number;
  id_cierre?: number;
  tarjeta_fec_acreditacion?: string;
  tipo_cheque?: string;
}

export type ventas_pagosPk = "id";
export type ventas_pagosId = ventas_pagos[ventas_pagosPk];
export type ventas_pagosCreationAttributes = Optional<ventas_pagosAttributes, ventas_pagosPk>;

export class ventas_pagos extends Model<ventas_pagosAttributes, ventas_pagosCreationAttributes> implements ventas_pagosAttributes {
  id!: number;
  id_comprobante!: number;
  cond_pago!: string;
  importe?: number;
  cheque_banco?: string;
  cheque_numero?: string;
  cheque_origen?: string;
  cheque_tipo?: string;
  cheque_fec_emision?: string;
  cheque_fec_pago?: string;
  tarjeta_nombre?: string;
  tarjeta_numero?: string;
  tarjeta_num_cupon?: string;
  tarjeta_cod_autorizacion?: string;
  cod_moneda_pago?: string;
  nro_caja?: number;
  cod_cuenta?: number;
  conciliacion_bancaria?: string;
  fec_conciliacion_bancaria?: string;
  cod_unidad_negocio?: number;
  cod_tarjeta?: number;
  cod_tarjeta_plan?: number;
  tarjeta_fec_presentacion?: string;
  tarjeta_liq_numero?: number;
  tarjeta_lote_numero?: number;
  tarjeta_resumen_numero?: number;
  cod_banco?: number;
  cheque_id?: number;
  id_cierre?: number;
  tarjeta_fec_acreditacion?: string;
  tipo_cheque?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas_pagos {
    ventas_pagos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cond_pago: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    importe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cheque_banco: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cheque_numero: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cheque_origen: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cheque_tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cheque_fec_emision: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cheque_fec_pago: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tarjeta_nombre: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    tarjeta_numero: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    tarjeta_num_cupon: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    tarjeta_cod_autorizacion: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_moneda_pago: {
      type: DataTypes.CHAR(8),
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
    conciliacion_bancaria: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fec_conciliacion_bancaria: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_tarjeta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_tarjeta_plan: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tarjeta_fec_presentacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tarjeta_liq_numero: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    },
    tarjeta_lote_numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tarjeta_resumen_numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cod_banco: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cheque_id: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: 1
    },
    id_cierre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tarjeta_fec_acreditacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tipo_cheque: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ventas_pagos',
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
        name: "ventas_pago_fec_pago",
        using: "BTREE",
        fields: [
          { name: "cheque_fec_pago" },
        ]
      },
      {
        name: "ventas_pagos_cod_cuenta",
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
        ]
      },
      {
        name: "ventas_pagos_id_comp",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
    ]
  });
  return ventas_pagos;
  }
}
