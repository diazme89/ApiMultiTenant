import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface figurasAttributes {
  id: number;
  nombre?: string;
  color?: string;
  intensidad_color?: string;
  tipo?: string;
  cod_lote?: number;
  ptoinicial?: string;
  nivelzoom?: number;
  codigo?: number;
}

export type figurasPk = "id";
export type figurasId = figuras[figurasPk];
export type figurasCreationAttributes = Optional<figurasAttributes, figurasPk>;

export class figuras extends Model<figurasAttributes, figurasCreationAttributes> implements figurasAttributes {
  id!: number;
  nombre?: string;
  color?: string;
  intensidad_color?: string;
  tipo?: string;
  cod_lote?: number;
  ptoinicial?: string;
  nivelzoom?: number;
  codigo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof figuras {
    figuras.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    intensidad_color: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    cod_lote: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ptoinicial: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nivelzoom: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'figuras',
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
  return figuras;
  }
}
