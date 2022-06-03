import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface asignar_rubrosAttributes {
  id: number;
  cod_rubro_default?: number;
  cod_subrubro_default?: number;
}

export type asignar_rubrosPk = "id";
export type asignar_rubrosId = asignar_rubros[asignar_rubrosPk];
export type asignar_rubrosCreationAttributes = Optional<asignar_rubrosAttributes, asignar_rubrosPk>;

export class asignar_rubros extends Model<asignar_rubrosAttributes, asignar_rubrosCreationAttributes> implements asignar_rubrosAttributes {
  id!: number;
  cod_rubro_default?: number;
  cod_subrubro_default?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof asignar_rubros {
    asignar_rubros.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cod_rubro_default: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_subrubro_default: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asignar_rubros',
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
  return asignar_rubros;
  }
}
