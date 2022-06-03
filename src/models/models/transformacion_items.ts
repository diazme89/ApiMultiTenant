import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface transformacion_itemsAttributes {
  id: number;
  id_transformacion?: number;
  cod_articulo?: number;
  cantidad?: number;
  cantidad_total?: number;
  id_um?: number;
  id_stock?: number;
  tipo?: string;
}

export type transformacion_itemsPk = "id";
export type transformacion_itemsId = transformacion_items[transformacion_itemsPk];
export type transformacion_itemsCreationAttributes = Optional<transformacion_itemsAttributes, transformacion_itemsPk>;

export class transformacion_items extends Model<transformacion_itemsAttributes, transformacion_itemsCreationAttributes> implements transformacion_itemsAttributes {
  id!: number;
  id_transformacion?: number;
  cod_articulo?: number;
  cantidad?: number;
  cantidad_total?: number;
  id_um?: number;
  id_stock?: number;
  tipo?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof transformacion_items {
    transformacion_items.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_transformacion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cantidad_total: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    id_um: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_stock: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transformacion_items',
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
  return transformacion_items;
  }
}
