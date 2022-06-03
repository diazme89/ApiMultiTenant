import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hchiaAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hchiaPk = "id";
export type hchiaId = hchia[hchiaPk];
export type hchiaCreationAttributes = Optional<hchiaAttributes, hchiaPk>;

export class hchia extends Model<hchiaAttributes, hchiaCreationAttributes> implements hchiaAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hchia {
    hchia.init({
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
    tableName: 'hchia',
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
  return hchia;
  }
}
