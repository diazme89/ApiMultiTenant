import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface lote_actividad_upAttributes {
  id: number;
  cod_up?: number;
  id_lote_act?: number;
}

export type lote_actividad_upPk = "id";
export type lote_actividad_upId = lote_actividad_up[lote_actividad_upPk];
export type lote_actividad_upCreationAttributes = Optional<lote_actividad_upAttributes, lote_actividad_upPk>;

export class lote_actividad_up extends Model<lote_actividad_upAttributes, lote_actividad_upCreationAttributes> implements lote_actividad_upAttributes {
  id!: number;
  cod_up?: number;
  id_lote_act?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof lote_actividad_up {
    lote_actividad_up.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cod_up: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_lote_act: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      unique: "lote_actividad_upxkey1"
    }
  }, {
    sequelize,
    tableName: 'lote_actividad_up',
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
        name: "lote_actividad_upxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_lote_act" },
        ]
      },
    ]
  });
  return lote_actividad_up;
  }
}
