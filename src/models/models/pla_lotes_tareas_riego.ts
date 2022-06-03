import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_lotes_tareas_riegoAttributes {
  id: number;
  id_pla_lote_tarea?: number;
  cantidad?: number;
  dosis?: number;
}

export type pla_lotes_tareas_riegoPk = "id";
export type pla_lotes_tareas_riegoId = pla_lotes_tareas_riego[pla_lotes_tareas_riegoPk];
export type pla_lotes_tareas_riegoCreationAttributes = Optional<pla_lotes_tareas_riegoAttributes, pla_lotes_tareas_riegoPk>;

export class pla_lotes_tareas_riego extends Model<pla_lotes_tareas_riegoAttributes, pla_lotes_tareas_riegoCreationAttributes> implements pla_lotes_tareas_riegoAttributes {
  id!: number;
  id_pla_lote_tarea?: number;
  cantidad?: number;
  dosis?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_lotes_tareas_riego {
    pla_lotes_tareas_riego.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pla_lote_tarea: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    dosis: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_lotes_tareas_riego',
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
  return pla_lotes_tareas_riego;
  }
}
