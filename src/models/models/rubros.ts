import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface rubrosAttributes {
  id: number;
  cod_rubro?: number;
  descripcion?: string;
  tipo_rubro?: number;
  solo_campo?: number;
}

export type rubrosPk = "id";
export type rubrosId = rubros[rubrosPk];
export type rubrosCreationAttributes = Optional<rubrosAttributes, rubrosPk>;

export class rubros extends Model<rubrosAttributes, rubrosCreationAttributes> implements rubrosAttributes {
  id!: number;
  cod_rubro?: number;
  descripcion?: string;
  tipo_rubro?: number;
  solo_campo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof rubros {
    rubros.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_rubro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    tipo_rubro: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    solo_campo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rubros',
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
        name: "rubros_cod_rubro",
        using: "BTREE",
        fields: [
          { name: "cod_rubro" },
        ]
      },
    ]
  });
  return rubros;
  }
}
