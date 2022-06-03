import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface articulosAttributes {
  id: number;
  cod_articulo?: number;
  descripcion?: string;
  uni_medida?: string;
  cuenta_ventas?: string;
  cuenta_compras?: string;
  cod_rubro?: number;
  cod_subrubro?: number;
  precio_compra?: number;
  stock_minimo?: number;
  stock_maximo?: number;
  cod_fabricante?: string;
  cod_proveedor?: number;
  porcentaje_precio?: number;
  precio_venta?: number;
  cod_barra?: string;
  tipo_cod_barra?: string;
  reposicion?: number;
  iva?: number;
  coeficiente?: number;
  unidad_venta?: string;
  venta_minima?: string;
  cod_cuenta?: number;
  moneda?: string;
  precio_compra_dolar?: number;
  precio_venta_dolar?: number;
  memo?: string;
  tipo_movimiento?: string;
  nombre_aux1?: string;
  cod_aux1?: number;
  desc_aux1?: string;
  nombre_aux2?: string;
  cod_aux2?: number;
  desc_aux2?: string;
  nombre_aux3?: string;
  cod_aux3?: number;
  desc_aux3?: string;
  nombre_aux4?: string;
  cod_aux4?: number;
  desc_aux4?: string;
  cod_cuenta_venta?: number;
  cruza_remitos?: number;
  afip_unimed?: number;
  ubicacion?: string;
  porcent_comision?: number;
  compra_stock?: number;
  consumo_labores?: number;
  consumo_plantacion?: number;
  consumo_maquinaria?: number;
  tag?: string;
  importe?: number;
  certificado?: string;
  carencia?: number;
  precio_gestion?: number;
  precio_planeamiento?: number;
  principio_activo?: string;
  concentracion?: string;
  cod_fabrica?: string;
  categoria?: number;
  existencia?: number;
  fecha_actprecio?: string;
  cod_afip_concepto?: number;
  habilitado?: number;
  descripcion_corta?: string;
  cod_compatibilidad?: string;
  equivalencia_um?: number;
  cod_afip_nomenclador?: string;
  cant_dias_entrega?: number;
  importacion?: string;
  exento?: string;
  fecha_origen?: string;
  seleccion?: string;
  cod_variacion?: string;
  compuesto?: string;
  tipo?: string;
  usa_seriado?: string;
}

export type articulosPk = "id";
export type articulosId = articulos[articulosPk];
export type articulosCreationAttributes = Optional<articulosAttributes, articulosPk>;

export class articulos extends Model<articulosAttributes, articulosCreationAttributes> implements articulosAttributes {
  id!: number;
  cod_articulo?: number;
  descripcion?: string;
  uni_medida?: string;
  cuenta_ventas?: string;
  cuenta_compras?: string;
  cod_rubro?: number;
  cod_subrubro?: number;
  precio_compra?: number;
  stock_minimo?: number;
  stock_maximo?: number;
  cod_fabricante?: string;
  cod_proveedor?: number;
  porcentaje_precio?: number;
  precio_venta?: number;
  cod_barra?: string;
  tipo_cod_barra?: string;
  reposicion?: number;
  iva?: number;
  coeficiente?: number;
  unidad_venta?: string;
  venta_minima?: string;
  cod_cuenta?: number;
  moneda?: string;
  precio_compra_dolar?: number;
  precio_venta_dolar?: number;
  memo?: string;
  tipo_movimiento?: string;
  nombre_aux1?: string;
  cod_aux1?: number;
  desc_aux1?: string;
  nombre_aux2?: string;
  cod_aux2?: number;
  desc_aux2?: string;
  nombre_aux3?: string;
  cod_aux3?: number;
  desc_aux3?: string;
  nombre_aux4?: string;
  cod_aux4?: number;
  desc_aux4?: string;
  cod_cuenta_venta?: number;
  cruza_remitos?: number;
  afip_unimed?: number;
  ubicacion?: string;
  porcent_comision?: number;
  compra_stock?: number;
  consumo_labores?: number;
  consumo_plantacion?: number;
  consumo_maquinaria?: number;
  tag?: string;
  importe?: number;
  certificado?: string;
  carencia?: number;
  precio_gestion?: number;
  precio_planeamiento?: number;
  principio_activo?: string;
  concentracion?: string;
  cod_fabrica?: string;
  categoria?: number;
  existencia?: number;
  fecha_actprecio?: string;
  cod_afip_concepto?: number;
  habilitado?: number;
  descripcion_corta?: string;
  cod_compatibilidad?: string;
  equivalencia_um?: number;
  cod_afip_nomenclador?: string;
  cant_dias_entrega?: number;
  importacion?: string;
  exento?: string;
  fecha_origen?: string;
  seleccion?: string;
  cod_variacion?: string;
  compuesto?: string;
  tipo?: string;
  usa_seriado?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof articulos {
    articulos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      unique: "articulos_cod_articulo"
    },
    descripcion: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    uni_medida: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cuenta_ventas: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    cuenta_compras: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    cod_rubro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_subrubro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    precio_compra: {
      type: DataTypes.DECIMAL(12,5),
      allowNull: true
    },
    stock_minimo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    stock_maximo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_fabricante: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    porcentaje_precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    precio_venta: {
      type: DataTypes.DECIMAL(12,5),
      allowNull: true
    },
    cod_barra: {
      type: DataTypes.CHAR(18),
      allowNull: true
    },
    tipo_cod_barra: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    reposicion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    iva: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    coeficiente: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    unidad_venta: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    venta_minima: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    moneda: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    precio_compra_dolar: {
      type: DataTypes.DECIMAL(12,5),
      allowNull: true
    },
    precio_venta_dolar: {
      type: DataTypes.DECIMAL(12,5),
      allowNull: true
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipo_movimiento: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nombre_aux1: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_aux1: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    desc_aux1: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    nombre_aux2: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_aux2: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    desc_aux2: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    nombre_aux3: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_aux3: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    desc_aux3: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    nombre_aux4: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_aux4: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    desc_aux4: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    cod_cuenta_venta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cruza_remitos: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    afip_unimed: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ubicacion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    porcent_comision: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    compra_stock: {
      type: DataTypes.DECIMAL(7,1),
      allowNull: true
    },
    consumo_labores: {
      type: DataTypes.DECIMAL(7,1),
      allowNull: true
    },
    consumo_plantacion: {
      type: DataTypes.DECIMAL(7,1),
      allowNull: true
    },
    consumo_maquinaria: {
      type: DataTypes.DECIMAL(7,1),
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    certificado: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    carencia: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    precio_gestion: {
      type: DataTypes.DECIMAL(13,4),
      allowNull: true
    },
    precio_planeamiento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    principio_activo: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    concentracion: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_fabrica: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    categoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    existencia: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    fecha_actprecio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_afip_concepto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    habilitado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true,
      defaultValue: 1
    },
    descripcion_corta: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    cod_compatibilidad: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    equivalencia_um: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    cod_afip_nomenclador: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cant_dias_entrega: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    importacion: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    exento: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    fecha_origen: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    seleccion: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    cod_variacion: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    compuesto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    usa_seriado: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'articulos',
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
        name: "articulos_cod_articulo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
        ]
      },
      {
        name: "articulos_cod_proveedor",
        using: "BTREE",
        fields: [
          { name: "cod_proveedor" },
        ]
      },
      {
        name: "articulos_cod_rubro",
        using: "BTREE",
        fields: [
          { name: "cod_rubro" },
        ]
      },
      {
        name: "articulos_cod_subrubro",
        using: "BTREE",
        fields: [
          { name: "cod_subrubro" },
        ]
      },
      {
        name: "articulos_xkey5",
        using: "BTREE",
        fields: [
          { name: "cod_fabricante" },
        ]
      },
      {
        name: "articulos_cod_barra",
        using: "BTREE",
        fields: [
          { name: "cod_barra" },
        ]
      },
    ]
  });
  return articulos;
  }
}
