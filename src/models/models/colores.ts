import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface coloresAttributes {
  id: number;
  cod_color: number;
  color: string;
}

export type coloresPk = "id";
export type coloresId = colores[coloresPk];
export type coloresCreationAttributes = Optional<coloresAttributes, coloresPk>;

export class colores extends Model<coloresAttributes, coloresCreationAttributes> implements coloresAttributes {
  id!: number;
  cod_color!: number;
  color!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof colores {
    colores.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    cod_color: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false
    },
    color: {
      type: DataTypes.CHAR(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'colores',
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
  return colores;
  }
}
