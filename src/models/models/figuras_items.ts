import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface figuras_itemsAttributes {
  id: number;
  id_figura?: number;
  numero?: number;
  lat?: number;
  lng?: number;
  punto?: string;
  marcador?: number;
  imagen?: string;
  color?: string;
}

export type figuras_itemsPk = "id";
export type figuras_itemsId = figuras_items[figuras_itemsPk];
export type figuras_itemsCreationAttributes = Optional<figuras_itemsAttributes, figuras_itemsPk>;

export class figuras_items extends Model<figuras_itemsAttributes, figuras_itemsCreationAttributes> implements figuras_itemsAttributes {
  id!: number;
  id_figura?: number;
  numero?: number;
  lat?: number;
  lng?: number;
  punto?: string;
  marcador?: number;
  imagen?: string;
  color?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof figuras_items {
    figuras_items.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_figura: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    punto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    marcador: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    imagen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'figuras_items',
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
  return figuras_items;
  }
}
