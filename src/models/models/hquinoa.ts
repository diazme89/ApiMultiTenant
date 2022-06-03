import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hquinoaAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hquinoaPk = "id";
export type hquinoaId = hquinoa[hquinoaPk];
export type hquinoaCreationAttributes = Optional<hquinoaAttributes, hquinoaPk>;

export class hquinoa extends Model<hquinoaAttributes, hquinoaCreationAttributes> implements hquinoaAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hquinoa {
    hquinoa.init({
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
    tableName: 'hquinoa',
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
  return hquinoa;
  }
}
