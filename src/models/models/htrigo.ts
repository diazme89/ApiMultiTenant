import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface htrigoAttributes {
  humedad?: number;
  merma?: number;
  id: number;
}

export type htrigoPk = "id";
export type htrigoId = htrigo[htrigoPk];
export type htrigoCreationAttributes = Optional<htrigoAttributes, htrigoPk>;

export class htrigo extends Model<htrigoAttributes, htrigoCreationAttributes> implements htrigoAttributes {
  humedad?: number;
  merma?: number;
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof htrigo {
    htrigo.init({
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
    tableName: 'htrigo',
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
  return htrigo;
  }
}
