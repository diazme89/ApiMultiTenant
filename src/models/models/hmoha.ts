import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hmohaAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hmohaPk = "id";
export type hmohaId = hmoha[hmohaPk];
export type hmohaCreationAttributes = Optional<hmohaAttributes, hmohaPk>;

export class hmoha extends Model<hmohaAttributes, hmohaCreationAttributes> implements hmohaAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hmoha {
    hmoha.init({
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
    tableName: 'hmoha',
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
  return hmoha;
  }
}
