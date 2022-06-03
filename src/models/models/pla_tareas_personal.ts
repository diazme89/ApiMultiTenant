import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_tareas_personalAttributes {
  numero?: number;
  cantidad?: number;
  dosis?: number;
  id: number;
  item_nro?: number;
}

export type pla_tareas_personalPk = "id";
export type pla_tareas_personalId = pla_tareas_personal[pla_tareas_personalPk];
export type pla_tareas_personalCreationAttributes = Optional<pla_tareas_personalAttributes, pla_tareas_personalPk>;

export class pla_tareas_personal extends Model<pla_tareas_personalAttributes, pla_tareas_personalCreationAttributes> implements pla_tareas_personalAttributes {
  numero?: number;
  cantidad?: number;
  dosis?: number;
  id!: number;
  item_nro?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_tareas_personal {
    pla_tareas_personal.init({
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: true
    },
    dosis: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    item_nro: {
      type: DataTypes.DECIMAL(9,3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_tareas_personal',
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
    ]
  });
  return pla_tareas_personal;
  }
}
