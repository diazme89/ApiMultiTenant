import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface items_facturas_cposAttributes {
  id: number;
  id_item_factura?: number;
  id_factura?: number;
  id_item_cpo_asociado?: number;
  id_cpo_asociado?: number;
  tipo_cpo_asociado?: string;
  cantidad_item_asociado?: number;
}

export type items_facturas_cposPk = "id";
export type items_facturas_cposId = items_facturas_cpos[items_facturas_cposPk];
export type items_facturas_cposCreationAttributes = Optional<items_facturas_cposAttributes, items_facturas_cposPk>;

export class items_facturas_cpos extends Model<items_facturas_cposAttributes, items_facturas_cposCreationAttributes> implements items_facturas_cposAttributes {
  id!: number;
  id_item_factura?: number;
  id_factura?: number;
  id_item_cpo_asociado?: number;
  id_cpo_asociado?: number;
  tipo_cpo_asociado?: string;
  cantidad_item_asociado?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof items_facturas_cpos {
    items_facturas_cpos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_item_factura: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_factura: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_item_cpo_asociado: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_cpo_asociado: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_cpo_asociado: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cantidad_item_asociado: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'items_facturas_cpos',
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
        name: "items_facturas_cpos_xkey1",
        using: "BTREE",
        fields: [
          { name: "tipo_cpo_asociado" },
          { name: "id_cpo_asociado" },
          { name: "id_item_cpo_asociado" },
        ]
      },
    ]
  });
  return items_facturas_cpos;
  }
}
