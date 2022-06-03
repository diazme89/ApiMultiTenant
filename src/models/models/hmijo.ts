import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hmijoAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hmijoPk = "id";
export type hmijoId = hmijo[hmijoPk];
export type hmijoCreationAttributes = Optional<hmijoAttributes, hmijoPk>;

export class hmijo extends Model<hmijoAttributes, hmijoCreationAttributes> implements hmijoAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hmijo {
    hmijo.init({
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
    tableName: 'hmijo',
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
  return hmijo;
  }
}
