import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hoja_de_ruta_itemsAttributes {
  id: number;
  id_hoja_de_ruta: number;
  id_remito: number;
  cod_estado?: number;
}

export type hoja_de_ruta_itemsPk = "id";
export type hoja_de_ruta_itemsId = hoja_de_ruta_items[hoja_de_ruta_itemsPk];
export type hoja_de_ruta_itemsCreationAttributes = Optional<hoja_de_ruta_itemsAttributes, hoja_de_ruta_itemsPk>;

export class hoja_de_ruta_items extends Model<hoja_de_ruta_itemsAttributes, hoja_de_ruta_itemsCreationAttributes> implements hoja_de_ruta_itemsAttributes {
  id!: number;
  id_hoja_de_ruta!: number;
  id_remito!: number;
  cod_estado?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hoja_de_ruta_items {
    hoja_de_ruta_items.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_hoja_de_ruta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_remito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_estado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hoja_de_ruta_items',
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
  return hoja_de_ruta_items;
  }
}
