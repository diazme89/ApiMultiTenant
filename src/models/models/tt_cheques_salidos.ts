import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_cheques_salidosAttributes {
  id: number;
  banco?: string;
  numero?: string;
  fecha_pago?: string;
  codigo_cheque?: string;
  tipo_cheque?: string;
  idproc?: number;
  fecha_alta?: Date;
  cuenta?: string;
  cod_cuenta?: number;
  importe?: number;
  fecha?: string;
  cheque_id?: number;
}

export type tt_cheques_salidosPk = "id";
export type tt_cheques_salidosId = tt_cheques_salidos[tt_cheques_salidosPk];
export type tt_cheques_salidosCreationAttributes = Optional<tt_cheques_salidosAttributes, tt_cheques_salidosPk>;

export class tt_cheques_salidos extends Model<tt_cheques_salidosAttributes, tt_cheques_salidosCreationAttributes> implements tt_cheques_salidosAttributes {
  id!: number;
  banco?: string;
  numero?: string;
  fecha_pago?: string;
  codigo_cheque?: string;
  tipo_cheque?: string;
  idproc?: number;
  fecha_alta?: Date;
  cuenta?: string;
  cod_cuenta?: number;
  importe?: number;
  fecha?: string;
  cheque_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_cheques_salidos {
    tt_cheques_salidos.init({
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
    fecha_pago: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    codigo_cheque: {
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
    cuenta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cheque_id: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tt_cheques_salidos',
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
        name: "tt_cheques_salidos_idx_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha_alta" },
        ]
      },
      {
        name: "tt_cheques_salidos_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_cheques_salidos;
  }
}
