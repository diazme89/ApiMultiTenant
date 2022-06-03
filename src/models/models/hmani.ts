import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hmaniAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hmaniPk = "id";
export type hmaniId = hmani[hmaniPk];
export type hmaniCreationAttributes = Optional<hmaniAttributes, hmaniPk>;

export class hmani extends Model<hmaniAttributes, hmaniCreationAttributes> implements hmaniAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hmani {
    hmani.init({
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
    tableName: 'hmani',
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
  return hmani;
  }
}
