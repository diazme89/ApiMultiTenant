import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_insuAttributes {
  numero?: number;
  item_nro: number;
  cantidad?: number;
  dosis?: number;
  id: number;
  cod_insumo?: number;
}

export type pla_insuPk = "id";
export type pla_insuId = pla_insu[pla_insuPk];
export type pla_insuCreationAttributes = Optional<pla_insuAttributes, pla_insuPk>;

export class pla_insu extends Model<pla_insuAttributes, pla_insuCreationAttributes> implements pla_insuAttributes {
  numero?: number;
  item_nro!: number;
  cantidad?: number;
  dosis?: number;
  id!: number;
  cod_insumo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_insu {
    pla_insu.init({
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
    tableName: 'pla_insu',
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
  return pla_insu;
  }
}
