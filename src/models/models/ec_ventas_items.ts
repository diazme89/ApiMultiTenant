import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_ventas_itemsAttributes {
  id: number;
  id_mercadolibre: number;
  id_item_ml: string;
  cantidad?: number;
  detalle?: string;
  precio_con_iva?: number;
  fecha_entrega?: string;
  id_ecommerce?: number;
  cod_articulo?: number;
}

export type ec_ventas_itemsPk = "id";
export type ec_ventas_itemsId = ec_ventas_items[ec_ventas_itemsPk];
export type ec_ventas_itemsCreationAttributes = Optional<ec_ventas_itemsAttributes, ec_ventas_itemsPk>;

export class ec_ventas_items extends Model<ec_ventas_itemsAttributes, ec_ventas_itemsCreationAttributes> implements ec_ventas_itemsAttributes {
  id!: number;
  id_mercadolibre!: number;
  id_item_ml!: string;
  cantidad?: number;
  detalle?: string;
  precio_con_iva?: number;
  fecha_entrega?: string;
  id_ecommerce?: number;
  cod_articulo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_ventas_items {
    ec_ventas_items.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_mercadolibre: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    id_item_ml: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    detalle: {
      type: DataTypes.CHAR(250),
      allowNull: true
    },
    precio_con_iva: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    fecha_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_ecommerce: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ec_ventas_items',
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
  return ec_ventas_items;
  }
}
