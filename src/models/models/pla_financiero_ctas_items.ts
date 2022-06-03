import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_financiero_ctas_itemsAttributes {
  id: number;
  id_pla_financiero_cta?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;
  mes?: number;
  anio?: number;
}

export type pla_financiero_ctas_itemsPk = "id";
export type pla_financiero_ctas_itemsId = pla_financiero_ctas_items[pla_financiero_ctas_itemsPk];
export type pla_financiero_ctas_itemsCreationAttributes = Optional<pla_financiero_ctas_itemsAttributes, pla_financiero_ctas_itemsPk>;

export class pla_financiero_ctas_items extends Model<pla_financiero_ctas_itemsAttributes, pla_financiero_ctas_itemsCreationAttributes> implements pla_financiero_ctas_itemsAttributes {
  id!: number;
  id_pla_financiero_cta?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;
  mes?: number;
  anio?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_financiero_ctas_items {
    pla_financiero_ctas_items.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pla_financiero_cta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    mes: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    anio: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_financiero_ctas_items',
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
        name: "pla_financiero_ctas_itemsxkey1",
        using: "BTREE",
        fields: [
          { name: "id_pla_financiero_cta" },
        ]
      },
    ]
  });
  return pla_financiero_ctas_items;
  }
}
