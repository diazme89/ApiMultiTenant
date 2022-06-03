import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface config_ivaAttributes {
  id: number;
  valor: number;
}

export type config_ivaPk = "id";
export type config_ivaId = config_iva[config_ivaPk];
export type config_ivaCreationAttributes = Optional<config_ivaAttributes, config_ivaPk>;

export class config_iva extends Model<config_ivaAttributes, config_ivaCreationAttributes> implements config_ivaAttributes {
  id!: number;
  valor!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof config_iva {
    config_iva.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    valor: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'config_iva',
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
  return config_iva;
  }
}
