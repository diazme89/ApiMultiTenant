import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface compras_stock_itemsAttributes {
  id: number;
  id_compras: number;
  id_stock_item: number;
  monto?: number;
}

export type compras_stock_itemsPk = "id";
export type compras_stock_itemsId = compras_stock_items[compras_stock_itemsPk];
export type compras_stock_itemsCreationAttributes = Optional<compras_stock_itemsAttributes, compras_stock_itemsPk>;

export class compras_stock_items extends Model<compras_stock_itemsAttributes, compras_stock_itemsCreationAttributes> implements compras_stock_itemsAttributes {
  id!: number;
  id_compras!: number;
  id_stock_item!: number;
  monto?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras_stock_items {
    compras_stock_items.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_compras: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_stock_item: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compras_stock_items',
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
      {
        name: "compras_stock_items_idx1",
        using: "BTREE",
        fields: [
          { name: "id_compras" },
        ]
      },
      {
        name: "compras_stock_items_idx2",
        using: "BTREE",
        fields: [
          { name: "id_stock_item" },
        ]
      },
    ]
  });
  return compras_stock_items;
  }
}
