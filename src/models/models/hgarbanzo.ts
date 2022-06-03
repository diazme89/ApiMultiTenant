import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hgarbanzoAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hgarbanzoPk = "id";
export type hgarbanzoId = hgarbanzo[hgarbanzoPk];
export type hgarbanzoCreationAttributes = Optional<hgarbanzoAttributes, hgarbanzoPk>;

export class hgarbanzo extends Model<hgarbanzoAttributes, hgarbanzoCreationAttributes> implements hgarbanzoAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hgarbanzo {
    hgarbanzo.init({
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
    tableName: 'hgarbanzo',
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
  return hgarbanzo;
  }
}
