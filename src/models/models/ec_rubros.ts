import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_rubrosAttributes {
  id: number;
  cod_rubro: number;
  orden?: number;
  menu?: string;
  habilitado?: string;
}

export type ec_rubrosPk = "id";
export type ec_rubrosId = ec_rubros[ec_rubrosPk];
export type ec_rubrosCreationAttributes = Optional<ec_rubrosAttributes, ec_rubrosPk>;

export class ec_rubros extends Model<ec_rubrosAttributes, ec_rubrosCreationAttributes> implements ec_rubrosAttributes {
  id!: number;
  cod_rubro!: number;
  orden?: number;
  menu?: string;
  habilitado?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_rubros {
    ec_rubros.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_rubro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      unique: "cod_rubro"
    },
    orden: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    menu: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    habilitado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ec_rubros',
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
      {
        name: "cod_rubro",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_rubro" },
        ]
      },
    ]
  });
  return ec_rubros;
  }
}
