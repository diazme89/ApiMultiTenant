import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface asientosAttributes {
  id: number;
  numero?: number;
  fecha?: string;
  descripcion?: string;
  tipo?: string;
  numero_comprobante?: string;
  tag?: string;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  genera_op?: string;
  nro_op?: number;
  cod_solicita?: number;
  cod_controla?: number;
  cod_autoriza?: number;
  cod_empresa?: number;
  saldo_inicial?: number;
  cotizacion?: number;
  moneda?: string;
  diferencia_cotizacion?: number;
  cod_periodo?: number;
  cod_jurisdiccion?: number;
  estado?: string;
  transferencia_tipo?: string;
  movimiento?: string;
  cod_empresa_destino?: number;
  nro_envio?: number;
}

export type asientosPk = "id";
export type asientosId = asientos[asientosPk];
export type asientosCreationAttributes = Optional<asientosAttributes, asientosPk>;

export class asientos extends Model<asientosAttributes, asientosCreationAttributes> implements asientosAttributes {
  id!: number;
  numero?: number;
  fecha?: string;
  descripcion?: string;
  tipo?: string;
  numero_comprobante?: string;
  tag?: string;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  genera_op?: string;
  nro_op?: number;
  cod_solicita?: number;
  cod_controla?: number;
  cod_autoriza?: number;
  cod_empresa?: number;
  saldo_inicial?: number;
  cotizacion?: number;
  moneda?: string;
  diferencia_cotizacion?: number;
  cod_periodo?: number;
  cod_jurisdiccion?: number;
  estado?: string;
  transferencia_tipo?: string;
  movimiento?: string;
  cod_empresa_destino?: number;
  nro_envio?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof asientos {
    asientos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    numero: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(150),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    numero_comprobante: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    usuario_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usuario_hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    genera_op: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nro_op: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_solicita: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_controla: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_autoriza: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    saldo_inicial: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cotizacion: {
      type: DataTypes.DECIMAL(8,3),
      allowNull: true
    },
    moneda: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    diferencia_cotizacion: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_jurisdiccion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    transferencia_tipo: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    movimiento: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_empresa_destino: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nro_envio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asientos',
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
        name: "asientos_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha" },
        ]
      },
      {
        name: "asientos_cod_empresa_fecha",
        using: "BTREE",
        fields: [
          { name: "cod_empresa" },
          { name: "fecha" },
        ]
      },
    ]
  });
  return asientos;
  }
}
