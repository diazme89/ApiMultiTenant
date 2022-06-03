import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface presupuestoAttributes {
  id: number;
  cod_empresa?: number;
  tipo?: string;
  nro_operacion?: number;
  detalle_general?: string;
  tipo_movimiento?: string;
  cod_proveedor?: number;
  cod_cliente?: number;
  fecha?: string;
  detalle_item?: string;
  importe?: number;
  color?: string;
  activo?: string;
  cod_articulo?: number;
  tag?: string;
  cod_personal?: number;
  cuota_nro?: number;
  id_presupuestos?: number;
  moneda?: string;
  monto?: number;
  cotizacion?: number;
}

export type presupuestoPk = "id";
export type presupuestoId = presupuesto[presupuestoPk];
export type presupuestoCreationAttributes = Optional<presupuestoAttributes, presupuestoPk>;

export class presupuesto extends Model<presupuestoAttributes, presupuestoCreationAttributes> implements presupuestoAttributes {
  id!: number;
  cod_empresa?: number;
  tipo?: string;
  nro_operacion?: number;
  detalle_general?: string;
  tipo_movimiento?: string;
  cod_proveedor?: number;
  cod_cliente?: number;
  fecha?: string;
  detalle_item?: string;
  importe?: number;
  color?: string;
  activo?: string;
  cod_articulo?: number;
  tag?: string;
  cod_personal?: number;
  cuota_nro?: number;
  id_presupuestos?: number;
  moneda?: string;
  monto?: number;
  cotizacion?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof presupuesto {
    presupuesto.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nro_operacion: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    detalle_general: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    tipo_movimiento: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    detalle_item: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    color: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    activo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_personal: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cuota_nro: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    id_presupuestos: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    moneda: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    monto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cotizacion: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'presupuesto',
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
  return presupuesto;
  }
}
