import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface stock_campoAttributes {
  id: number;
  ajuste: string;
  motivo: string;
  id_proveedor: number;
  detalle?: string;
  fecha_ingreso: string;
  fecha_carga: string;
  hora_carga: string;
  numero: number;
  id_dep_origen?: number;
  id_dep_destino: number;
  usuario: string;
  remito_establecimiento?: number;
  remito_punto_de_venta?: number;
  remito_nro?: number;
  factura_establecimiento?: number;
  factura_punto_de_venta?: number;
  factura_nro?: number;
  id_certificacion?: number;
  id_stock_relac?: number;
  proveedor?: string;
  cod_periodo?: number;
}

export type stock_campoPk = "id";
export type stock_campoId = stock_campo[stock_campoPk];
export type stock_campoCreationAttributes = Optional<stock_campoAttributes, stock_campoPk>;

export class stock_campo extends Model<stock_campoAttributes, stock_campoCreationAttributes> implements stock_campoAttributes {
  id!: number;
  ajuste!: string;
  motivo!: string;
  id_proveedor!: number;
  detalle?: string;
  fecha_ingreso!: string;
  fecha_carga!: string;
  hora_carga!: string;
  numero!: number;
  id_dep_origen?: number;
  id_dep_destino!: number;
  usuario!: string;
  remito_establecimiento?: number;
  remito_punto_de_venta?: number;
  remito_nro?: number;
  factura_establecimiento?: number;
  factura_punto_de_venta?: number;
  factura_nro?: number;
  id_certificacion?: number;
  id_stock_relac?: number;
  proveedor?: string;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof stock_campo {
    stock_campo.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ajuste: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    motivo: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    id_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    detalle: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    fecha_ingreso: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hora_carga: {
      type: DataTypes.TIME,
      allowNull: false
    },
    numero: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    id_dep_origen: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_dep_destino: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    remito_establecimiento: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    remito_punto_de_venta: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    remito_nro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    factura_establecimiento: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    factura_punto_de_venta: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    factura_nro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_certificacion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_stock_relac: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    proveedor: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stock_campo',
    timestamps: false
  });
  return stock_campo;
  }
}
