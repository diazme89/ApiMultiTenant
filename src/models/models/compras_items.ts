import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface compras_itemsAttributes {
  id: number;
  id_comprobante: number;
  cod_articulo?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;
  detalle?: string;
  editar_precio?: string;
  descuento?: number;
  cod_cuenta?: number;
  iva_por?: number;
  iva_importe?: number;
  cod_maquina?: number;
  id_factura_venta?: number;
  id_remito_compra?: number;
  neto?: number;
  cod_unidad_negocio?: number;
  precio_con_iva?: number;
  cod_cli_venta?: number;
  id_factura_items?: number;
  id_remito_items?: number;
  id_articulos_unid_med?: number;
}

export type compras_itemsPk = "id";
export type compras_itemsId = compras_items[compras_itemsPk];
export type compras_itemsCreationAttributes = Optional<compras_itemsAttributes, compras_itemsPk>;

export class compras_items extends Model<compras_itemsAttributes, compras_itemsCreationAttributes> implements compras_itemsAttributes {
  id!: number;
  id_comprobante!: number;
  cod_articulo?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;
  detalle?: string;
  editar_precio?: string;
  descuento?: number;
  cod_cuenta?: number;
  iva_por?: number;
  iva_importe?: number;
  cod_maquina?: number;
  id_factura_venta?: number;
  id_remito_compra?: number;
  neto?: number;
  cod_unidad_negocio?: number;
  precio_con_iva?: number;
  cod_cli_venta?: number;
  id_factura_items?: number;
  id_remito_items?: number;
  id_articulos_unid_med?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras_items {
    compras_items.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    detalle: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    editar_precio: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    descuento: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    iva_por: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    iva_importe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cod_maquina: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    id_factura_venta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_remito_compra: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    neto: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    precio_con_iva: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cod_cli_venta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_factura_items: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_remito_items: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_articulos_unid_med: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compras_items',
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
        name: "compras_items_cod_art",
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
        ]
      },
      {
        name: "compras_items_cod_cuenta",
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
        ]
      },
      {
        name: "compras_items_id_comp",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
      {
        name: "compras_items_id_remito_compra",
        using: "BTREE",
        fields: [
          { name: "id_remito_compra" },
        ]
      },
      {
        name: "compras_items_id_remito_items",
        using: "BTREE",
        fields: [
          { name: "id_remito_items" },
        ]
      },
    ]
  });
  return compras_items;
  }
}
