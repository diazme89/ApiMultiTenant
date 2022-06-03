import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface harrozAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type harrozPk = "id";
export type harrozId = harroz[harrozPk];
export type harrozCreationAttributes = Optional<harrozAttributes, harrozPk>;

export class harroz extends Model<harrozAttributes, harrozCreationAttributes> implements harrozAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof harroz {
    harroz.init({
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
    tableName: 'harroz',
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
  return harroz;
  }
}
