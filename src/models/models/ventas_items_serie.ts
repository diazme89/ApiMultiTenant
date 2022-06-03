import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventas_items_serieAttributes {
  id: number;
  id_comprobante: number;
  id_serie: number;
  id_item?: number;
}

export type ventas_items_seriePk = "id";
export type ventas_items_serieId = ventas_items_serie[ventas_items_seriePk];
export type ventas_items_serieCreationAttributes = Optional<ventas_items_serieAttributes, ventas_items_seriePk>;

export class ventas_items_serie extends Model<ventas_items_serieAttributes, ventas_items_serieCreationAttributes> implements ventas_items_serieAttributes {
  id!: number;
  id_comprobante!: number;
  id_serie!: number;
  id_item?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas_items_serie {
    ventas_items_serie.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_serie: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_item: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ventas_items_serie',
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
        name: "idx_vis_item",
        using: "BTREE",
        fields: [
          { name: "id_item" },
        ]
      },
      {
        name: "idx_vis_serie",
        using: "BTREE",
        fields: [
          { name: "id_serie" },
        ]
      },
    ]
  });
  return ventas_items_serie;
  }
}
