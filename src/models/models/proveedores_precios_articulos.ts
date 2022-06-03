import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface proveedores_precios_articulosAttributes {
  id: number;
  cod_proveedor?: number;
  nombre?: string;
  fila_desde?: number;
  fila_hasta?: number;
  hoja_nro?: number;
  cod_fabricante?: number;
  articulo_descripcion?: number;
  precio_base?: number;
  porc_1?: number;
  porc_2?: number;
  porc_3?: number;
  porc_4?: number;
  porc_5?: number;
  utilidad?: number;
  precio_costo?: number;
  precio_venta?: number;
  cod_cuenta_compra?: number;
  cod_cuenta_venta?: number;
  iva?: number;
  cod_rubro?: number;
  cod_subrubro?: number;
  tipo_movimiento?: string;
  cod_afip_concepto?: number;
}

export type proveedores_precios_articulosPk = "id";
export type proveedores_precios_articulosId = proveedores_precios_articulos[proveedores_precios_articulosPk];
export type proveedores_precios_articulosCreationAttributes = Optional<proveedores_precios_articulosAttributes, proveedores_precios_articulosPk>;

export class proveedores_precios_articulos extends Model<proveedores_precios_articulosAttributes, proveedores_precios_articulosCreationAttributes> implements proveedores_precios_articulosAttributes {
  id!: number;
  cod_proveedor?: number;
  nombre?: string;
  fila_desde?: number;
  fila_hasta?: number;
  hoja_nro?: number;
  cod_fabricante?: number;
  articulo_descripcion?: number;
  precio_base?: number;
  porc_1?: number;
  porc_2?: number;
  porc_3?: number;
  porc_4?: number;
  porc_5?: number;
  utilidad?: number;
  precio_costo?: number;
  precio_venta?: number;
  cod_cuenta_compra?: number;
  cod_cuenta_venta?: number;
  iva?: number;
  cod_rubro?: number;
  cod_subrubro?: number;
  tipo_movimiento?: string;
  cod_afip_concepto?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof proveedores_precios_articulos {
    proveedores_precios_articulos.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    fila_desde: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fila_hasta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    hoja_nro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_fabricante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    articulo_descripcion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    precio_base: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    porc_1: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    porc_2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    porc_3: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    porc_4: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    porc_5: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    utilidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    precio_costo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    precio_venta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cuenta_compra: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cuenta_venta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    iva: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    cod_rubro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_subrubro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_movimiento: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_afip_concepto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'proveedores_precios_articulos',
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
  return proveedores_precios_articulos;
  }
}
