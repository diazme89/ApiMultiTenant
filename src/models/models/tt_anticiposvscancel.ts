import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_anticiposvscancelAttributes {
  id?: number;
  fecha?: string;
  cod_proveedor?: number;
  detalle?: string;
  anticipo?: number;
  cancelacion?: number;
  idproc?: number;
  fecha_alta?: Date;
  tag?: string;
  cod_empresa?: number;
}

export type tt_anticiposvscancelPk = "id";
export type tt_anticiposvscancelId = tt_anticiposvscancel[tt_anticiposvscancelPk];
export type tt_anticiposvscancelCreationAttributes = Optional<tt_anticiposvscancelAttributes, tt_anticiposvscancelPk>;

export class tt_anticiposvscancel extends Model<tt_anticiposvscancelAttributes, tt_anticiposvscancelCreationAttributes> implements tt_anticiposvscancelAttributes {
  id?: number;
  fecha?: string;
  cod_proveedor?: number;
  detalle?: string;
  anticipo?: number;
  cancelacion?: number;
  idproc?: number;
  fecha_alta?: Date;
  tag?: string;
  cod_empresa?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_anticiposvscancel {
    tt_anticiposvscancel.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    detalle: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    anticipo: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cancelacion: {
      type: DataTypes.DECIMAL(18,5),
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
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_anticiposvscancel',
    timestamps: false,
    indexes: [
      {
        name: "tt_anticiposvscancel_idx_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha_alta" },
        ]
      },
      {
        name: "tt_anticiposvscancel_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_anticiposvscancel;
  }
}
