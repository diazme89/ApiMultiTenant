import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hcebadaAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hcebadaPk = "id";
export type hcebadaId = hcebada[hcebadaPk];
export type hcebadaCreationAttributes = Optional<hcebadaAttributes, hcebadaPk>;

export class hcebada extends Model<hcebadaAttributes, hcebadaCreationAttributes> implements hcebadaAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hcebada {
    hcebada.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    humedad: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: true
    },
    merma: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hcebada',
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
  return hcebada;
  }
}
