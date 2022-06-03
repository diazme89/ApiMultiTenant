import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface compras_pagosAttributes {
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
  nro_caja?: number;
  cod_cuenta?: number;
  conciliacion_bancaria?: string;
  fec_conciliacion_bancaria?: string;
  impreso?: number;
  cod_unidad_negocio?: number;
  responsable_pago?: string;
  cod_banco?: number;
  cheque_id?: number;
  id_cierre?: number;
  tipo_cheque?: string;
}

export type compras_pagosPk = "id";
export type compras_pagosId = compras_pagos[compras_pagosPk];
export type compras_pagosCreationAttributes = Optional<compras_pagosAttributes, compras_pagosPk>;

export class compras_pagos extends Model<compras_pagosAttributes, compras_pagosCreationAttributes> implements compras_pagosAttributes {
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
  nro_caja?: number;
  cod_cuenta?: number;
  conciliacion_bancaria?: string;
  fec_conciliacion_bancaria?: string;
  impreso?: number;
  cod_unidad_negocio?: number;
  responsable_pago?: string;
  cod_banco?: number;
  cheque_id?: number;
  id_cierre?: number;
  tipo_cheque?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras_pagos {
    compras_pagos.init({
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
    impreso: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    responsable_pago: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    tipo_cheque: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compras_pagos',
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
        name: "compras_pagos_fec_pago",
        using: "BTREE",
        fields: [
          { name: "cheque_fec_pago" },
        ]
      },
      {
        name: "compras_pagos_id_comprobante",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
      {
        name: "compras_pagos_cod_cuenta",
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
        ]
      },
      {
        name: "compras_pagos_key1",
        using: "BTREE",
        fields: [
          { name: "cod_banco" },
          { name: "cheque_numero" },
          { name: "cod_cuenta" },
        ]
      },
    ]
  });
  return compras_pagos;
  }
}
