import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_tareasAttributes {
  id: number;
  cod_tarea?: number;
  cod_periodo?: number;
}

export type pla_tareasPk = "id";
export type pla_tareasId = pla_tareas[pla_tareasPk];
export type pla_tareasCreationAttributes = Optional<pla_tareasAttributes, pla_tareasPk>;

export class pla_tareas extends Model<pla_tareasAttributes, pla_tareasCreationAttributes> implements pla_tareasAttributes {
  id!: number;
  cod_tarea?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_tareas {
    pla_tareas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_tarea: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_tareas',
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
  return pla_tareas;
  }
}
