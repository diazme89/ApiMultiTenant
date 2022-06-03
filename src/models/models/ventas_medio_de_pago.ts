import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventas_medio_de_pagoAttributes {
  id: number;
  id_comprobante: number;
  orden: number;
  tipo_medio_pago: string;
  monto: number;
  cod_tarjeta?: number;
  cod_tarjeta_plan?: number;
  tj_numero?: string;
  tj_num_cupon?: string;
  tj_cod_autorizacion?: string;
  tj_fec_presentacion?: string;
  tj_liq_numero?: number;
  tj_lote_numero?: number;
  tj_resumen_numero?: number;
}

export type ventas_medio_de_pagoPk = "id";
export type ventas_medio_de_pagoId = ventas_medio_de_pago[ventas_medio_de_pagoPk];
export type ventas_medio_de_pagoCreationAttributes = Optional<ventas_medio_de_pagoAttributes, ventas_medio_de_pagoPk>;

export class ventas_medio_de_pago extends Model<ventas_medio_de_pagoAttributes, ventas_medio_de_pagoCreationAttributes> implements ventas_medio_de_pagoAttributes {
  id!: number;
  id_comprobante!: number;
  orden!: number;
  tipo_medio_pago!: string;
  monto!: number;
  cod_tarjeta?: number;
  cod_tarjeta_plan?: number;
  tj_numero?: string;
  tj_num_cupon?: string;
  tj_cod_autorizacion?: string;
  tj_fec_presentacion?: string;
  tj_liq_numero?: number;
  tj_lote_numero?: number;
  tj_resumen_numero?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas_medio_de_pago {
    ventas_medio_de_pago.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    orden: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    tipo_medio_pago: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: false
    },
    cod_tarjeta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_tarjeta_plan: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tj_numero: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    tj_num_cupon: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    tj_cod_autorizacion: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    tj_fec_presentacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tj_liq_numero: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    },
    tj_lote_numero: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tj_resumen_numero: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ventas_medio_de_pago',
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
        name: "ventas_medio_de_pago_id_comp",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
    ]
  });
  return ventas_medio_de_pago;
  }
}
