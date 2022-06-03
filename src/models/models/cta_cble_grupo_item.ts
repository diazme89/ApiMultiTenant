import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cta_cble_grupo_itemAttributes {
  id: number;
  id_cta_cble_grupo: number;
  id_plan: number;
}

export type cta_cble_grupo_itemPk = "id";
export type cta_cble_grupo_itemId = cta_cble_grupo_item[cta_cble_grupo_itemPk];
export type cta_cble_grupo_itemCreationAttributes = Optional<cta_cble_grupo_itemAttributes, cta_cble_grupo_itemPk>;

export class cta_cble_grupo_item extends Model<cta_cble_grupo_itemAttributes, cta_cble_grupo_itemCreationAttributes> implements cta_cble_grupo_itemAttributes {
  id!: number;
  id_cta_cble_grupo!: number;
  id_plan!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof cta_cble_grupo_item {
    cta_cble_grupo_item.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_cta_cble_grupo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_plan: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cta_cble_grupo_item',
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
        name: "i_cta_cble_grupo_item_1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cta_cble_grupo" },
          { name: "id_plan" },
        ]
      },
    ]
  });
  return cta_cble_grupo_item;
  }
}
