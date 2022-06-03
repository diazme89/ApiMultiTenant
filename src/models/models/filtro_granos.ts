import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface filtro_granosAttributes {
  fecha1?: string;
  fecha2?: string;
  lote?: number;
  transporte?: number;
  destino?: number;
  id: number;
  usuario?: string;
  area?: number;
  tipo?: string;
  variedad?: string;
  remito?: number;
  nrocp?: number;
  id_contrato?: number;
}

export type filtro_granosPk = "id";
export type filtro_granosId = filtro_granos[filtro_granosPk];
export type filtro_granosCreationAttributes = Optional<filtro_granosAttributes, filtro_granosPk>;

export class filtro_granos extends Model<filtro_granosAttributes, filtro_granosCreationAttributes> implements filtro_granosAttributes {
  fecha1?: string;
  fecha2?: string;
  lote?: number;
  transporte?: number;
  destino?: number;
  id!: number;
  usuario?: string;
  area?: number;
  tipo?: string;
  variedad?: string;
  remito?: number;
  nrocp?: number;
  id_contrato?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof filtro_granos {
    filtro_granos.init({
    fecha1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lote: {
      type: DataTypes.DECIMAL(8,0),
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
    remito: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    },
    nrocp: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true
    },
    id_contrato: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'filtro_granos',
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
  return filtro_granos;
  }
}
