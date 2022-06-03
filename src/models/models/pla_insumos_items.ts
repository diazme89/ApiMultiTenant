import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_insumos_itemsAttributes {
  id: number;
  id_cabecera?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;
  mes?: number;
  anio?: number;
}

export type pla_insumos_itemsPk = "id";
export type pla_insumos_itemsId = pla_insumos_items[pla_insumos_itemsPk];
export type pla_insumos_itemsCreationAttributes = Optional<pla_insumos_itemsAttributes, pla_insumos_itemsPk>;

export class pla_insumos_items extends Model<pla_insumos_itemsAttributes, pla_insumos_itemsCreationAttributes> implements pla_insumos_itemsAttributes {
  id!: number;
  id_cabecera?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;
  mes?: number;
  anio?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_insumos_items {
    pla_insumos_items.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cabecera: {
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
    tableName: 'pla_insumos_items',
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
        name: "pla_insumos_itemsxkey1",
        using: "BTREE",
        fields: [
          { name: "id_cabecera" },
        ]
      },
    ]
  });
  return pla_insumos_items;
  }
}
