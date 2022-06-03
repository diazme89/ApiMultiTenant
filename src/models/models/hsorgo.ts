import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hsorgoAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hsorgoPk = "id";
export type hsorgoId = hsorgo[hsorgoPk];
export type hsorgoCreationAttributes = Optional<hsorgoAttributes, hsorgoPk>;

export class hsorgo extends Model<hsorgoAttributes, hsorgoCreationAttributes> implements hsorgoAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hsorgo {
    hsorgo.init({
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
    tableName: 'hsorgo',
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
  return hsorgo;
  }
}
