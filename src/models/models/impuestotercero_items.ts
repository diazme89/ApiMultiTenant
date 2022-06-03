import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface impuestotercero_itemsAttributes {
  id: number;
  id_impuesto: number;
  montodesde?: number;
  montohasta?: number;
  base?: number;
  excedente?: number;
  tipocalculo?: number;
  porcentaje?: number;
  valor?: number;
}

export type impuestotercero_itemsPk = "id";
export type impuestotercero_itemsId = impuestotercero_items[impuestotercero_itemsPk];
export type impuestotercero_itemsCreationAttributes = Optional<impuestotercero_itemsAttributes, impuestotercero_itemsPk>;

export class impuestotercero_items extends Model<impuestotercero_itemsAttributes, impuestotercero_itemsCreationAttributes> implements impuestotercero_itemsAttributes {
  id!: number;
  id_impuesto!: number;
  montodesde?: number;
  montohasta?: number;
  base?: number;
  excedente?: number;
  tipocalculo?: number;
  porcentaje?: number;
  valor?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof impuestotercero_items {
    impuestotercero_items.init({
    id: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: false,
      primaryKey: true
    },
    id_impuesto: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: false
    },
    montodesde: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    montohasta: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    base: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    excedente: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    tipocalculo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    porcentaje: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'impuestotercero_items',
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
  return impuestotercero_items;
  }
}
