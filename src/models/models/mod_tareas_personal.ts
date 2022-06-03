import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mod_tareas_personalAttributes {
  numero?: number;
  cantidad?: number;
  dosis?: number;
  id: number;
  item_nro?: number;
}

export type mod_tareas_personalPk = "id";
export type mod_tareas_personalId = mod_tareas_personal[mod_tareas_personalPk];
export type mod_tareas_personalCreationAttributes = Optional<mod_tareas_personalAttributes, mod_tareas_personalPk>;

export class mod_tareas_personal extends Model<mod_tareas_personalAttributes, mod_tareas_personalCreationAttributes> implements mod_tareas_personalAttributes {
  numero?: number;
  cantidad?: number;
  dosis?: number;
  id!: number;
  item_nro?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof mod_tareas_personal {
    mod_tareas_personal.init({
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    dosis: {
      type: DataTypes.DECIMAL(8,3),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    item_nro: {
      type: DataTypes.DECIMAL(9,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mod_tareas_personal',
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
  return mod_tareas_personal;
  }
}
