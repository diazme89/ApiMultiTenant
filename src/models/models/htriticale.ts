import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface htriticaleAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type htriticalePk = "id";
export type htriticaleId = htriticale[htriticalePk];
export type htriticaleCreationAttributes = Optional<htriticaleAttributes, htriticalePk>;

export class htriticale extends Model<htriticaleAttributes, htriticaleCreationAttributes> implements htriticaleAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof htriticale {
    htriticale.init({
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
    tableName: 'htriticale',
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
  return htriticale;
  }
}
