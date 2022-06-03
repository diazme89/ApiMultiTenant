import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tareas_seguridadAttributes {
  id: number;
  cod_tarea?: number;
  tarea?: string;
  uso?: string;
  cod_concepto?: number;
  relacion?: number;
  usa_valor?: string;
}

export type tareas_seguridadPk = "id";
export type tareas_seguridadId = tareas_seguridad[tareas_seguridadPk];
export type tareas_seguridadCreationAttributes = Optional<tareas_seguridadAttributes, tareas_seguridadPk>;

export class tareas_seguridad extends Model<tareas_seguridadAttributes, tareas_seguridadCreationAttributes> implements tareas_seguridadAttributes {
  id!: number;
  cod_tarea?: number;
  tarea?: string;
  uso?: string;
  cod_concepto?: number;
  relacion?: number;
  usa_valor?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tareas_seguridad {
    tareas_seguridad.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_tarea: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tarea: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    uso: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cod_concepto: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    relacion: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    usa_valor: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'tareas_seguridad',
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
  return tareas_seguridad;
  }
}
