import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface datos_basicos3Attributes {
  id: number;
  id_basicos?: number;
  codigo?: number;
  descrip?: string;
  inicio_actualizado?: number;
  inicio_cierre?: number;
  cierre_planeamiento?: number;
  cantidad1?: number;
  cantidad2?: number;
  cantidad3?: number;
  cantidad4?: number;
  cantidad5?: number;
  cantidad6?: number;
  cantidad7?: number;
  cantidad8?: number;
  cantidad9?: number;
  cantidad10?: number;
  cantidad11?: number;
  cantidad12?: number;
  cierre_gestion?: number;
}

export type datos_basicos3Pk = "id";
export type datos_basicos3Id = datos_basicos3[datos_basicos3Pk];
export type datos_basicos3CreationAttributes = Optional<datos_basicos3Attributes, datos_basicos3Pk>;

export class datos_basicos3 extends Model<datos_basicos3Attributes, datos_basicos3CreationAttributes> implements datos_basicos3Attributes {
  id!: number;
  id_basicos?: number;
  codigo?: number;
  descrip?: string;
  inicio_actualizado?: number;
  inicio_cierre?: number;
  cierre_planeamiento?: number;
  cantidad1?: number;
  cantidad2?: number;
  cantidad3?: number;
  cantidad4?: number;
  cantidad5?: number;
  cantidad6?: number;
  cantidad7?: number;
  cantidad8?: number;
  cantidad9?: number;
  cantidad10?: number;
  cantidad11?: number;
  cantidad12?: number;
  cierre_gestion?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof datos_basicos3 {
    datos_basicos3.init({
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
    cantidad1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad5: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad6: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad7: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad8: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad9: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad10: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad11: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad12: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cierre_gestion: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'datos_basicos3',
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
  return datos_basicos3;
  }
}
