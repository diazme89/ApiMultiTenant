import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface actividadAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  cod_cuenta?: number;
}

export type actividadPk = "id";
export type actividadId = actividad[actividadPk];
export type actividadCreationAttributes = Optional<actividadAttributes, actividadPk>;

export class actividad extends Model<actividadAttributes, actividadCreationAttributes> implements actividadAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  cod_cuenta?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof actividad {
    actividad.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'actividad',
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
  return actividad;
  }
}
