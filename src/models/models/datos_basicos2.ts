import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface datos_basicos2Attributes {
  id: number;
  id_basicos?: number;
  codigo?: number;
  descrip?: string;
  inicio_actualizado?: number;
  inicio_cierre?: number;
  cierre_planeamiento?: number;
  cierre_gestion?: number;
}

export type datos_basicos2Pk = "id";
export type datos_basicos2Id = datos_basicos2[datos_basicos2Pk];
export type datos_basicos2CreationAttributes = Optional<datos_basicos2Attributes, datos_basicos2Pk>;

export class datos_basicos2 extends Model<datos_basicos2Attributes, datos_basicos2CreationAttributes> implements datos_basicos2Attributes {
  id!: number;
  id_basicos?: number;
  codigo?: number;
  descrip?: string;
  inicio_actualizado?: number;
  inicio_cierre?: number;
  cierre_planeamiento?: number;
  cierre_gestion?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof datos_basicos2 {
    datos_basicos2.init({
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
    tableName: 'datos_basicos2',
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
  return datos_basicos2;
  }
}
