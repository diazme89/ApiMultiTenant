import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface bases_contablesAttributes {
  id: number;
  nombre_base?: string;
  cod_empresa?: number;
  cod_periodo_fiscal?: number;
  cod_periodo?: number;
}

export type bases_contablesPk = "id";
export type bases_contablesId = bases_contables[bases_contablesPk];
export type bases_contablesCreationAttributes = Optional<bases_contablesAttributes, bases_contablesPk>;

export class bases_contables extends Model<bases_contablesAttributes, bases_contablesCreationAttributes> implements bases_contablesAttributes {
  id!: number;
  nombre_base?: string;
  cod_empresa?: number;
  cod_periodo_fiscal?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof bases_contables {
    bases_contables.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nombre_base: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo_fiscal: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bases_contables',
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
  return bases_contables;
  }
}
