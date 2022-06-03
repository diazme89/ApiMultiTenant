import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mod_insuAttributes {
  numero?: number;
  item_nro: number;
  cantidad?: number;
  dosis?: number;
  id: number;
  cod_insumo?: number;
}

export type mod_insuPk = "id";
export type mod_insuId = mod_insu[mod_insuPk];
export type mod_insuCreationAttributes = Optional<mod_insuAttributes, mod_insuPk>;

export class mod_insu extends Model<mod_insuAttributes, mod_insuCreationAttributes> implements mod_insuAttributes {
  numero?: number;
  item_nro!: number;
  cantidad?: number;
  dosis?: number;
  id!: number;
  cod_insumo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof mod_insu {
    mod_insu.init({
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    item_nro: {
      type: DataTypes.DECIMAL(9,0),
      allowNull: false
    },
    cantidad: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    dosis: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_insumo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mod_insu',
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
  return mod_insu;
  }
}
