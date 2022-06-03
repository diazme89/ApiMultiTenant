import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface subrubrosAttributes {
  id: number;
  cod_rubro?: number;
  cod_subrubro?: number;
  descripcion?: string;
}

export type subrubrosPk = "id";
export type subrubrosId = subrubros[subrubrosPk];
export type subrubrosCreationAttributes = Optional<subrubrosAttributes, subrubrosPk>;

export class subrubros extends Model<subrubrosAttributes, subrubrosCreationAttributes> implements subrubrosAttributes {
  id!: number;
  cod_rubro?: number;
  cod_subrubro?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof subrubros {
    subrubros.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_rubro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_subrubro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subrubros',
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
        name: "subrubros_cod_rubro",
        using: "BTREE",
        fields: [
          { name: "cod_rubro" },
        ]
      },
      {
        name: "subrubros_xkey1",
        using: "BTREE",
        fields: [
          { name: "cod_rubro" },
          { name: "cod_subrubro" },
        ]
      },
    ]
  });
  return subrubros;
  }
}
