import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface establecimientos_depositosAttributes {
  id: number;
  cod_establecimiento?: number;
  cod_deposito?: number;
}

export type establecimientos_depositosPk = "id";
export type establecimientos_depositosId = establecimientos_depositos[establecimientos_depositosPk];
export type establecimientos_depositosCreationAttributes = Optional<establecimientos_depositosAttributes, establecimientos_depositosPk>;

export class establecimientos_depositos extends Model<establecimientos_depositosAttributes, establecimientos_depositosCreationAttributes> implements establecimientos_depositosAttributes {
  id!: number;
  cod_establecimiento?: number;
  cod_deposito?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof establecimientos_depositos {
    establecimientos_depositos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'establecimientos_depositos',
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
  return establecimientos_depositos;
  }
}
