import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tareas_preciosAttributes {
  id: number;
  cod_tarea?: number;
  precio?: number;
  descrip?: string;
}

export type tareas_preciosPk = "id";
export type tareas_preciosId = tareas_precios[tareas_preciosPk];
export type tareas_preciosCreationAttributes = Optional<tareas_preciosAttributes, tareas_preciosPk>;

export class tareas_precios extends Model<tareas_preciosAttributes, tareas_preciosCreationAttributes> implements tareas_preciosAttributes {
  id!: number;
  cod_tarea?: number;
  precio?: number;
  descrip?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tareas_precios {
    tareas_precios.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_tarea: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true
    },
    descrip: {
      type: DataTypes.CHAR(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tareas_precios',
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
  return tareas_precios;
  }
}
