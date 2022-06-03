import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface rendicion_itemsAttributes {
  id: number;
  id_rendicion?: number;
  cod_tipo_dinero?: number;
  cantidad?: number;
  importe?: number;
}

export type rendicion_itemsPk = "id";
export type rendicion_itemsId = rendicion_items[rendicion_itemsPk];
export type rendicion_itemsCreationAttributes = Optional<rendicion_itemsAttributes, rendicion_itemsPk>;

export class rendicion_items extends Model<rendicion_itemsAttributes, rendicion_itemsCreationAttributes> implements rendicion_itemsAttributes {
  id!: number;
  id_rendicion?: number;
  cod_tipo_dinero?: number;
  cantidad?: number;
  importe?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof rendicion_items {
    rendicion_items.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_rendicion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_tipo_dinero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rendicion_items',
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
  return rendicion_items;
  }
}
