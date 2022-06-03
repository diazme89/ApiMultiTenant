import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface orden_de_compra_itemsAttributes {
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
  neto?: number;
  cod_unidad_negocio?: number;
  precio_con_iva?: number;
  id_np_item?: number;
  cantidad_aprobado?: number;
  fecha_aprobado?: string;
  hora_aprobado?: string;
  estado?: string;
  fec_entrega_est?: string;
  id_articulos_unid_med?: number;
}

export type orden_de_compra_itemsPk = "id";
export type orden_de_compra_itemsId = orden_de_compra_items[orden_de_compra_itemsPk];
export type orden_de_compra_itemsCreationAttributes = Optional<orden_de_compra_itemsAttributes, orden_de_compra_itemsPk>;

export class orden_de_compra_items extends Model<orden_de_compra_itemsAttributes, orden_de_compra_itemsCreationAttributes> implements orden_de_compra_itemsAttributes {
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
  neto?: number;
  cod_unidad_negocio?: number;
  precio_con_iva?: number;
  id_np_item?: number;
  cantidad_aprobado?: number;
  fecha_aprobado?: string;
  hora_aprobado?: string;
  estado?: string;
  fec_entrega_est?: string;
  id_articulos_unid_med?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof orden_de_compra_items {
    orden_de_compra_items.init({
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
    id_np_item: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad_aprobado: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    fecha_aprobado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_aprobado: {
      type: DataTypes.TIME,
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fec_entrega_est: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_articulos_unid_med: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orden_de_compra_items',
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
        name: "orden_de_compra_items_cod_art",
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
        ]
      },
      {
        name: "orden_de_compra_items_cod_cuenta",
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
        ]
      },
      {
        name: "orden_de_compra_items_id_comp",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
    ]
  });
  return orden_de_compra_items;
  }
}
