import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface config_parametrosAttributes {
  id: number;
  codigo: number;
  parametro?: string;
  detalle?: string;
  cod_circuito?: number;
  tipo?: string;
  valor?: string;
  valor_numeric?: number;
  valor_decimal?: number;
  valor_date?: string;
}

export type config_parametrosPk = "id";
export type config_parametrosId = config_parametros[config_parametrosPk];
export type config_parametrosCreationAttributes = Optional<config_parametrosAttributes, config_parametrosPk>;

export class config_parametros extends Model<config_parametrosAttributes, config_parametrosCreationAttributes> implements config_parametrosAttributes {
  id!: number;
  codigo!: number;
  parametro?: string;
  detalle?: string;
  cod_circuito?: number;
  tipo?: string;
  valor?: string;
  valor_numeric?: number;
  valor_decimal?: number;
  valor_date?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof config_parametros {
    config_parametros.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    parametro: {
      type: DataTypes.CHAR(80),
      allowNull: true
    },
    detalle: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    cod_circuito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(16),
      allowNull: true
    },
    valor: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    valor_numeric: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    valor_decimal: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    valor_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'config_parametros',
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
  return config_parametros;
  }
}
