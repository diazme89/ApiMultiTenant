import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_config_parametrosAttributes {
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

export type ec_config_parametrosPk = "id";
export type ec_config_parametrosId = ec_config_parametros[ec_config_parametrosPk];
export type ec_config_parametrosCreationAttributes = Optional<ec_config_parametrosAttributes, ec_config_parametrosPk>;

export class ec_config_parametros extends Model<ec_config_parametrosAttributes, ec_config_parametrosCreationAttributes> implements ec_config_parametrosAttributes {
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


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_config_parametros {
    ec_config_parametros.init({
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
      type: DataTypes.STRING(300),
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
    tableName: 'ec_config_parametros',
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
  return ec_config_parametros;
  }
}
