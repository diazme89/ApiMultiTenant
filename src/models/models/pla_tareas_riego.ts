import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_tareas_riegoAttributes {
  numero?: number;
  cantidad?: number;
  dosis?: number;
  id: number;
  item_nro?: number;
}

export type pla_tareas_riegoPk = "id";
export type pla_tareas_riegoId = pla_tareas_riego[pla_tareas_riegoPk];
export type pla_tareas_riegoCreationAttributes = Optional<pla_tareas_riegoAttributes, pla_tareas_riegoPk>;

export class pla_tareas_riego extends Model<pla_tareas_riegoAttributes, pla_tareas_riegoCreationAttributes> implements pla_tareas_riegoAttributes {
  numero?: number;
  cantidad?: number;
  dosis?: number;
  id!: number;
  item_nro?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_tareas_riego {
    pla_tareas_riego.init({
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
    tableName: 'pla_tareas_riego',
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
  return pla_tareas_riego;
  }
}
