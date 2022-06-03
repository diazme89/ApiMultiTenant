import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_cashflow_aux1Attributes {
  id: number;
  importe?: number;
  periodo?: number;
  idproc?: number;
  fecha_alta?: Date;
}

export type tt_cashflow_aux1Pk = "id";
export type tt_cashflow_aux1Id = tt_cashflow_aux1[tt_cashflow_aux1Pk];
export type tt_cashflow_aux1CreationAttributes = Optional<tt_cashflow_aux1Attributes, tt_cashflow_aux1Pk>;

export class tt_cashflow_aux1 extends Model<tt_cashflow_aux1Attributes, tt_cashflow_aux1CreationAttributes> implements tt_cashflow_aux1Attributes {
  id!: number;
  importe?: number;
  periodo?: number;
  idproc?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_cashflow_aux1 {
    tt_cashflow_aux1.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    importe: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    periodo: {
      type: DataTypes.DECIMAL(10,0),
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
    }
  }, {
    sequelize,
    tableName: 'tt_cashflow_aux1',
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
        name: "tt_cashflow_aux1_periodo",
        using: "BTREE",
        fields: [
          { name: "periodo" },
        ]
      },
      {
        name: "tt_cashflow_aux1_idx_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha_alta" },
        ]
      },
      {
        name: "tt_cashflow_aux1_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_cashflow_aux1;
  }
}
