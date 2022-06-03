import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface stock_itemAttributes {
  id: number;
  id_stock: number;
  id_producto: number;
  cantidad: number;
  precio?: number;
}

export type stock_itemPk = "id";
export type stock_itemId = stock_item[stock_itemPk];
export type stock_itemCreationAttributes = Optional<stock_itemAttributes, stock_itemPk>;

export class stock_item extends Model<stock_itemAttributes, stock_itemCreationAttributes> implements stock_itemAttributes {
  id!: number;
  id_stock!: number;
  id_producto!: number;
  cantidad!: number;
  precio?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof stock_item {
    stock_item.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_stock: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_producto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: false
    },
    precio: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stock_item',
    timestamps: false
  });
  return stock_item;
  }
}
