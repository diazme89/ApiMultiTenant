import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_chequesAttributes {
  id: number;
  banco?: string;
  numero?: string;
  importe?: number;
  fecha_emision?: string;
  fecha_pago?: string;
  tipo_origen?: string;
  codigo_cheque?: string;
  cuenta?: string;
  tipo_cheque?: string;
  idproc?: number;
  fecha_alta?: Date;
  cod_cliente?: number;
  cod_cuenta?: number;
  fecha?: string;
  id_comprobante?: number;
  moneda?: string;
  cotizacion?: number;
  cod_empresa?: number;
  estado?: string;
  movimiento?: string;
  cod_empresa_destino?: number;
  cod_banco?: number;
  tag?: string;
  cheque_id?: number;
  tipo_chequera?: string;
}

export type tt_chequesPk = "id";
export type tt_chequesId = tt_cheques[tt_chequesPk];
export type tt_chequesCreationAttributes = Optional<tt_chequesAttributes, tt_chequesPk>;

export class tt_cheques extends Model<tt_chequesAttributes, tt_chequesCreationAttributes> implements tt_chequesAttributes {
  id!: number;
  banco?: string;
  numero?: string;
  importe?: number;
  fecha_emision?: string;
  fecha_pago?: string;
  tipo_origen?: string;
  codigo_cheque?: string;
  cuenta?: string;
  tipo_cheque?: string;
  idproc?: number;
  fecha_alta?: Date;
  cod_cliente?: number;
  cod_cuenta?: number;
  fecha?: string;
  id_comprobante?: number;
  moneda?: string;
  cotizacion?: number;
  cod_empresa?: number;
  estado?: string;
  movimiento?: string;
  cod_empresa_destino?: number;
  cod_banco?: number;
  tag?: string;
  cheque_id?: number;
  tipo_chequera?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_cheques {
    tt_cheques.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    banco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    fecha_emision: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_pago: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tipo_origen: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    codigo_cheque: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cuenta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo_cheque: {
      type: DataTypes.STRING(10),
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
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
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
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    movimiento: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_empresa_destino: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_banco: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cheque_id: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: 1
    },
    tipo_chequera: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_cheques',
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
        name: "tt_chequesxidproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
      {
        name: "tt_cheques_fechapago",
        using: "BTREE",
        fields: [
          { name: "fecha_pago" },
        ]
      },
      {
        name: "tt_cheques_idx_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha_alta" },
        ]
      },
    ]
  });
  return tt_cheques;
  }
}
