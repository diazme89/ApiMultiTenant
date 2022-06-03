import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_subrubrosAttributes {
  id: number;
  cod_rubro: number;
  cod_subrubro?: number;
  orden?: number;
  habilitado?: string;
}

export type ec_subrubrosPk = "id";
export type ec_subrubrosId = ec_subrubros[ec_subrubrosPk];
export type ec_subrubrosCreationAttributes = Optional<ec_subrubrosAttributes, ec_subrubrosPk>;

export class ec_subrubros extends Model<ec_subrubrosAttributes, ec_subrubrosCreationAttributes> implements ec_subrubrosAttributes {
  id!: number;
  cod_rubro!: number;
  cod_subrubro?: number;
  orden?: number;
  habilitado?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_subrubros {
    ec_subrubros.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_rubro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    cod_subrubro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    orden: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    habilitado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ec_subrubros',
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
        name: "cod_subrubros",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_rubro" },
          { name: "cod_subrubro" },
        ]
      },
    ]
  });
  return ec_subrubros;
  }
}
