import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usuarios_tareasAttributes {
  id: number;
  id_usuario?: number;
  cod_tarea?: number;
  valor?: number;
}

export type usuarios_tareasPk = "id";
export type usuarios_tareasId = usuarios_tareas[usuarios_tareasPk];
export type usuarios_tareasCreationAttributes = Optional<usuarios_tareasAttributes, usuarios_tareasPk>;

export class usuarios_tareas extends Model<usuarios_tareasAttributes, usuarios_tareasCreationAttributes> implements usuarios_tareasAttributes {
  id!: number;
  id_usuario?: number;
  cod_tarea?: number;
  valor?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof usuarios_tareas {
    usuarios_tareas.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_tarea: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true,
      defaultValue: 0.000000
    }
  }, {
    sequelize,
    tableName: 'usuarios_tareas',
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
  return usuarios_tareas;
  }
}
