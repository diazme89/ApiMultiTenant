import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventas_unidad_itemAttributes {
  id: number;
  id_item?: number;
  id_um_capacidad?: number;
  id_um_peso?: number;
}

export type ventas_unidad_itemPk = "id";
export type ventas_unidad_itemId = ventas_unidad_item[ventas_unidad_itemPk];
export type ventas_unidad_itemCreationAttributes = Optional<ventas_unidad_itemAttributes, ventas_unidad_itemPk>;

export class ventas_unidad_item extends Model<ventas_unidad_itemAttributes, ventas_unidad_itemCreationAttributes> implements ventas_unidad_itemAttributes {
  id!: number;
  id_item?: number;
  id_um_capacidad?: number;
  id_um_peso?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas_unidad_item {
    ventas_unidad_item.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_item: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_um_capacidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_um_peso: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ventas_unidad_item',
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
        name: "ventas_um_cap_idx",
        using: "BTREE",
        fields: [
          { name: "id_um_capacidad" },
        ]
      },
      {
        name: "ventas_um_peso_idx",
        using: "BTREE",
        fields: [
          { name: "id_um_peso" },
        ]
      },
    ]
  });
  return ventas_unidad_item;
  }
}
