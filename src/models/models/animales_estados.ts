import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface animales_estadosAttributes {
  id: number;
  nombre: string;
}

export type animales_estadosPk = "id";
export type animales_estadosId = animales_estados[animales_estadosPk];
export type animales_estadosCreationAttributes = Optional<animales_estadosAttributes, animales_estadosPk>;

export class animales_estados extends Model<animales_estadosAttributes, animales_estadosCreationAttributes> implements animales_estadosAttributes {
  id!: number;
  nombre!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof animales_estados {
    animales_estados.init({
    id: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.CHAR(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'animales_estados',
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
  return animales_estados;
  }
}
