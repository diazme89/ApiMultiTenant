import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hmaizAttributes {
  humedad?: number;
  merma?: number;
  id: number;
}

export type hmaizPk = "id";
export type hmaizId = hmaiz[hmaizPk];
export type hmaizCreationAttributes = Optional<hmaizAttributes, hmaizPk>;

export class hmaiz extends Model<hmaizAttributes, hmaizCreationAttributes> implements hmaizAttributes {
  humedad?: number;
  merma?: number;
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hmaiz {
    hmaiz.init({
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
    tableName: 'hmaiz',
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
  return hmaiz;
  }
}
