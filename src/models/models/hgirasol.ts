import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hgirasolAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hgirasolPk = "id";
export type hgirasolId = hgirasol[hgirasolPk];
export type hgirasolCreationAttributes = Optional<hgirasolAttributes, hgirasolPk>;

export class hgirasol extends Model<hgirasolAttributes, hgirasolCreationAttributes> implements hgirasolAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hgirasol {
    hgirasol.init({
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
    tableName: 'hgirasol',
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
  return hgirasol;
  }
}
