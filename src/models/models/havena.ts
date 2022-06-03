import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface havenaAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type havenaPk = "id";
export type havenaId = havena[havenaPk];
export type havenaCreationAttributes = Optional<havenaAttributes, havenaPk>;

export class havena extends Model<havenaAttributes, havenaCreationAttributes> implements havenaAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof havena {
    havena.init({
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
    tableName: 'havena',
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
  return havena;
  }
}
