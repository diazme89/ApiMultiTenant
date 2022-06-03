import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_comprobantes_pendientesAttributes {
  id: number;
  orden?: number;
  id_comprobante?: number;
  tipo_comprobante?: string;
  importe_comprobante?: number;
  importe_pagado?: number;
  saldo?: number;
  importe_neto?: number;
  centrocosto?: string;
  punto_de_venta?: string;
  numero?: string;
  id_asiento?: number;
  codigo?: number;
  detalle?: string;
  fecha_comprobante?: string;
  circuito?: string;
  idproc?: number;
  fecha_alta?: Date;
  item_prov_cli_tipo?: string;
  cod_vendedor?: number;
  cod_empresa?: number;
  moneda?: string;
  cotizacion?: number;
  cod_cuenta?: number;
}

export type tt_comprobantes_pendientesPk = "id";
export type tt_comprobantes_pendientesId = tt_comprobantes_pendientes[tt_comprobantes_pendientesPk];
export type tt_comprobantes_pendientesCreationAttributes = Optional<tt_comprobantes_pendientesAttributes, tt_comprobantes_pendientesPk>;

export class tt_comprobantes_pendientes extends Model<tt_comprobantes_pendientesAttributes, tt_comprobantes_pendientesCreationAttributes> implements tt_comprobantes_pendientesAttributes {
  id!: number;
  orden?: number;
  id_comprobante?: number;
  tipo_comprobante?: string;
  importe_comprobante?: number;
  importe_pagado?: number;
  saldo?: number;
  importe_neto?: number;
  centrocosto?: string;
  punto_de_venta?: string;
  numero?: string;
  id_asiento?: number;
  codigo?: number;
  detalle?: string;
  fecha_comprobante?: string;
  circuito?: string;
  idproc?: number;
  fecha_alta?: Date;
  item_prov_cli_tipo?: string;
  cod_vendedor?: number;
  cod_empresa?: number;
  moneda?: string;
  cotizacion?: number;
  cod_cuenta?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_comprobantes_pendientes {
    tt_comprobantes_pendientes.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    orden: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_comprobante: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    importe_comprobante: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    importe_pagado: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    saldo: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    importe_neto: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    centrocosto: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    punto_de_venta: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    numero: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    id_asiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    detalle: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    fecha_comprobante: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    circuito: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    item_prov_cli_tipo: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_vendedor: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
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
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_comprobantes_pendientes',
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
        name: "tt_comprobantes_pendientesxidproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "circuito" },
        ]
      },
    ]
  });
  return tt_comprobantes_pendientes;
  }
}
