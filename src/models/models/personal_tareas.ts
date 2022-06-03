import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface personal_tareasAttributes {
  id: number;
  cod_personal?: number;
  cod_tarea?: number;
}

export type personal_tareasPk = "id";
export type personal_tareasId = personal_tareas[personal_tareasPk];
export type personal_tareasCreationAttributes = Optional<personal_tareasAttributes, personal_tareasPk>;

export class personal_tareas extends Model<personal_tareasAttributes, personal_tareasCreationAttributes> implements personal_tareasAttributes {
  id!: number;
  cod_personal?: number;
  cod_tarea?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof personal_tareas {
    personal_tareas.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_personal: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cod_tarea: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'personal_tareas',
    timestamps: false
  });
  return personal_tareas;
  }
}
