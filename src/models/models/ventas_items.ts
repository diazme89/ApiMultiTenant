import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventas_itemsAttributes {
  id: number;
  id_comprobante: number;
  cod_articulo?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;
  detalle?: string;
  editar_precio?: string;
  descuento?: number;
  iva_por?: number;
  iva_importe?: number;
  cod_cuenta?: number;
  id_remito_compra?: number;
  id_remito_venta?: number;
  precio_compra_actual?: number;
  id_articulos_unid_med?: number;
  cod_unidad_negocio?: number;
  descuento_porc?: number;
  precio_orig?: number;
  fe_permiso?: string;
  fe_pais_dest?: number;
  precio_con_iva?: number;
  cod_actividad?: number;
  cod_lista_precios?: number;
  orden?: number;
  item_tipo_interes?: number;
  remanente?: number;
  fecha_entrega?: string;
  equivalencia_um?: number;
  afip_unidad_de_medida?: number;
  estado_item?: string;
  cod_vendedor?: number;
  detalle_aux?: string;
}

export type ventas_itemsPk = "id";
export type ventas_itemsId = ventas_items[ventas_itemsPk];
export type ventas_itemsCreationAttributes = Optional<ventas_itemsAttributes, ventas_itemsPk>;

export class ventas_items extends Model<ventas_itemsAttributes, ventas_itemsCreationAttributes> implements ventas_itemsAttributes {
  id!: number;
  id_comprobante!: number;
  cod_articulo?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;
  detalle?: string;
  editar_precio?: string;
  descuento?: number;
  iva_por?: number;
  iva_importe?: number;
  cod_cuenta?: number;
  id_remito_compra?: number;
  id_remito_venta?: number;
  precio_compra_actual?: number;
  id_articulos_unid_med?: number;
  cod_unidad_negocio?: number;
  descuento_porc?: number;
  precio_orig?: number;
  fe_permiso?: string;
  fe_pais_dest?: number;
  precio_con_iva?: number;
  cod_actividad?: number;
  cod_lista_precios?: number;
  orden?: number;
  item_tipo_interes?: number;
  remanente?: number;
  fecha_entrega?: string;
  equivalencia_um?: number;
  afip_unidad_de_medida?: number;
  estado_item?: string;
  cod_vendedor?: number;
  detalle_aux?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas_items {
    ventas_items.init({
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
      type: DataTypes.DECIMAL(16,6),
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
      type: DataTypes.DECIMAL(18,6),
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
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_remito_compra: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_remito_venta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    precio_compra_actual: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    id_articulos_unid_med: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    descuento_porc: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    precio_orig: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    fe_permiso: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fe_pais_dest: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    precio_con_iva: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cod_lista_precios: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    orden: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    item_tipo_interes: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true,
      defaultValue: 0
    },
    remanente: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    fecha_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    equivalencia_um: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    afip_unidad_de_medida: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    estado_item: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: "OK"
    },
    cod_vendedor: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    detalle_aux: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ventas_items',
    hasTrigger: true,
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
        name: "ventas_items_cod_articulo",
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
        ]
      },
      {
        name: "ventas_items_cod_cuenta",
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
        ]
      },
      {
        name: "ventas_items_id_comp",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
      {
        name: "ventas_items_articulo_comprobante",
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
          { name: "id_comprobante" },
        ]
      },
    ]
  });
  return ventas_items;
  }
}
