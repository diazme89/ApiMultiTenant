import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hcolzaAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hcolzaPk = "id";
export type hcolzaId = hcolza[hcolzaPk];
export type hcolzaCreationAttributes = Optional<hcolzaAttributes, hcolzaPk>;

export class hcolza extends Model<hcolzaAttributes, hcolzaCreationAttributes> implements hcolzaAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hcolza {
    hcolza.init({
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
    tableName: 'hcolza',
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
  return hcolza;
  }
}
