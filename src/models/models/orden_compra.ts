import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface orden_compraAttributes {
  id: number;
  fecha?: string;
  cod_proveedor?: number;
  plazo_entrega?: number;
  lugar_entrega?: string;
  forma_pago?: string;
  observaciones?: string;
  cod_emisor?: number;
  cod_autoriza?: number;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  iva?: number;
  impuestos?: number;
  numero?: string;
  factura?: string;
  pagado?: string;
  entregado?: string;
  datos_empresa?: string;
  nro?: number;
  cod_periodo?: number;
}

export type orden_compraPk = "id";
export type orden_compraId = orden_compra[orden_compraPk];
export type orden_compraCreationAttributes = Optional<orden_compraAttributes, orden_compraPk>;

export class orden_compra extends Model<orden_compraAttributes, orden_compraCreationAttributes> implements orden_compraAttributes {
  id!: number;
  fecha?: string;
  cod_proveedor?: number;
  plazo_entrega?: number;
  lugar_entrega?: string;
  forma_pago?: string;
  observaciones?: string;
  cod_emisor?: number;
  cod_autoriza?: number;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  iva?: number;
  impuestos?: number;
  numero?: string;
  factura?: string;
  pagado?: string;
  entregado?: string;
  datos_empresa?: string;
  nro?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof orden_compra {
    orden_compra.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    plazo_entrega: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    lugar_entrega: {
      type: DataTypes.CHAR(80),
      allowNull: true
    },
    forma_pago: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cod_emisor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_autoriza: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_carga: {
      type: DataTypes.TIME,
      allowNull: true
    },
    iva: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    impuestos: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    numero: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    factura: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    pagado: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    entregado: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    datos_empresa: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    nro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orden_compra',
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
  return orden_compra;
  }
}
