import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface items_crucesAttributes {
  id: number;
  id_item?: number;
  tipo_cpo?: string;
  id_cpo?: number;
  id_item_origen?: number;
  tipo_cpo_origen?: string;
  id_cpo_origen?: number;
  cantidad?: number;
  circuito: string;
}

export type items_crucesPk = "id";
export type items_crucesId = items_cruces[items_crucesPk];
export type items_crucesCreationAttributes = Optional<items_crucesAttributes, items_crucesPk>;

export class items_cruces extends Model<items_crucesAttributes, items_crucesCreationAttributes> implements items_crucesAttributes {
  id!: number;
  id_item?: number;
  tipo_cpo?: string;
  id_cpo?: number;
  id_item_origen?: number;
  tipo_cpo_origen?: string;
  id_cpo_origen?: number;
  cantidad?: number;
  circuito!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof items_cruces {
    items_cruces.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_item: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_cpo: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    id_cpo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_item_origen: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_cpo_origen: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    id_cpo_origen: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    circuito: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'items_cruces',
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
        name: "items_cruces_xkey3",
        using: "BTREE",
        fields: [
          { name: "id_cpo_origen" },
          { name: "id_item_origen" },
        ]
      },
      {
        name: "idx_ITEMSCRUCES_iditem_tipocpo",
        using: "BTREE",
        fields: [
          { name: "id_item" },
          { name: "tipo_cpo_origen" },
        ]
      },
      {
        name: "items_cruces_xkey1",
        using: "BTREE",
        fields: [
          { name: "id_item" },
          { name: "tipo_cpo" },
        ]
      },
      {
        name: "items_cruces_xkey2",
        using: "BTREE",
        fields: [
          { name: "id_item_origen" },
          { name: "tipo_cpo_origen" },
        ]
      },
    ]
  });
  return items_cruces;
  }
}
