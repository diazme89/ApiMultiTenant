import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface datos_climaticosAttributes {
  id: number;
  finca?: string;
  anio?: string;
  numero?: number;
  orden?: string;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;
}

export type datos_climaticosPk = "id";
export type datos_climaticosId = datos_climaticos[datos_climaticosPk];
export type datos_climaticosCreationAttributes = Optional<datos_climaticosAttributes, datos_climaticosPk>;

export class datos_climaticos extends Model<datos_climaticosAttributes, datos_climaticosCreationAttributes> implements datos_climaticosAttributes {
  id!: number;
  finca?: string;
  anio?: string;
  numero?: number;
  orden?: string;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof datos_climaticos {
    datos_climaticos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    finca: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    anio: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    orden: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_carga: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_pc: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'datos_climaticos',
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
  return datos_climaticos;
  }
}
