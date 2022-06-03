import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface datos_basicos4Attributes {
  id: number;
  id_basicos?: number;
  codigo?: number;
  descrip?: string;
  inicio_actualizado?: number;
  inicio_cierre?: number;
  cierre_planeamiento?: number;
  cierre_gestion?: number;
}

export type datos_basicos4Pk = "id";
export type datos_basicos4Id = datos_basicos4[datos_basicos4Pk];
export type datos_basicos4CreationAttributes = Optional<datos_basicos4Attributes, datos_basicos4Pk>;

export class datos_basicos4 extends Model<datos_basicos4Attributes, datos_basicos4CreationAttributes> implements datos_basicos4Attributes {
  id!: number;
  id_basicos?: number;
  codigo?: number;
  descrip?: string;
  inicio_actualizado?: number;
  inicio_cierre?: number;
  cierre_planeamiento?: number;
  cierre_gestion?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof datos_basicos4 {
    datos_basicos4.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_basicos: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    codigo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    descrip: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    inicio_actualizado: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    inicio_cierre: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cierre_planeamiento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cierre_gestion: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'datos_basicos4',
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
  return datos_basicos4;
  }
}
