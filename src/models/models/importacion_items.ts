import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface importacion_itemsAttributes {
  id: number;
  id_comprobante: number;
  id_item: number;
  cod_articulo: number;
  cod_aduana: number;
  fecha_despacho?: string;
  anio_doc?: number;
  nro_despacho: string;
  nro_serie?: string;
  nro_cuim?: string;
  cod_tipo_declaracion?: number;
  cod_destinacion?: string;
}

export type importacion_itemsPk = "id";
export type importacion_itemsId = importacion_items[importacion_itemsPk];
export type importacion_itemsCreationAttributes = Optional<importacion_itemsAttributes, importacion_itemsPk>;

export class importacion_items extends Model<importacion_itemsAttributes, importacion_itemsCreationAttributes> implements importacion_itemsAttributes {
  id!: number;
  id_comprobante!: number;
  id_item!: number;
  cod_articulo!: number;
  cod_aduana!: number;
  fecha_despacho?: string;
  anio_doc?: number;
  nro_despacho!: string;
  nro_serie?: string;
  nro_cuim?: string;
  cod_tipo_declaracion?: number;
  cod_destinacion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof importacion_items {
    importacion_items.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_item: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_aduana: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    fecha_despacho: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    anio_doc: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    nro_despacho: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    nro_serie: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    nro_cuim: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    cod_tipo_declaracion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_destinacion: {
      type: DataTypes.CHAR(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'importacion_items',
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
        name: "idx_importacion_items",
        using: "BTREE",
        fields: [
          { name: "id_item" },
          { name: "id_comprobante" },
        ]
      },
    ]
  });
  return importacion_items;
  }
}
