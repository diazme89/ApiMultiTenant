import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hsojaAttributes {
  humedad?: number;
  merma?: number;
  id: number;
}

export type hsojaPk = "id";
export type hsojaId = hsoja[hsojaPk];
export type hsojaCreationAttributes = Optional<hsojaAttributes, hsojaPk>;

export class hsoja extends Model<hsojaAttributes, hsojaCreationAttributes> implements hsojaAttributes {
  humedad?: number;
  merma?: number;
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hsoja {
    hsoja.init({
    humedad: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: true
    },
    merma: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'hsoja',
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
  return hsoja;
  }
}
