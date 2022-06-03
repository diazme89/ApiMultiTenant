import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface filtro_citrusAttributes {
  fecha1?: string;
  fecha2?: string;
  lote?: number;
  transporte?: number;
  destino?: number;
  id: number;
  grupo?: number;
  cosechero?: number;
  usuario?: string;
  area?: number;
  tipo?: string;
  variedad?: string;
  volcada?: number;
}

export type filtro_citrusPk = "id";
export type filtro_citrusId = filtro_citrus[filtro_citrusPk];
export type filtro_citrusCreationAttributes = Optional<filtro_citrusAttributes, filtro_citrusPk>;

export class filtro_citrus extends Model<filtro_citrusAttributes, filtro_citrusCreationAttributes> implements filtro_citrusAttributes {
  fecha1?: string;
  fecha2?: string;
  lote?: number;
  transporte?: number;
  destino?: number;
  id!: number;
  grupo?: number;
  cosechero?: number;
  usuario?: string;
  area?: number;
  tipo?: string;
  variedad?: string;
  volcada?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof filtro_citrus {
    filtro_citrus.init({
    fecha1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lote: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    transporte: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    destino: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    grupo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cosechero: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    area: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    variedad: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    volcada: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'filtro_citrus',
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
  return filtro_citrus;
  }
}
