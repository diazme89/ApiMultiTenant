import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_proveedor_clienteAttributes {
  id: number;
  idproc: number;
  codigo?: number;
  nombre?: string;
  cod_cuenta?: number;
  nombre_cuenta?: string;
  saldo_inicial1?: number;
  saldo_inicial2?: number;
  anti1?: number;
  anti2?: number;
  nc1?: number;
  nc2?: number;
  nd1?: number;
  nd2?: number;
  fact1?: number;
  fact2?: number;
  nv1?: number;
  nv2?: number;
  op1?: number;
  op2?: number;
  pm1?: number;
  pm2?: number;
  rec1?: number;
  rec2?: number;
  asiento_debe?: number;
  asiento_haber?: number;
  entrada1?: number;
  entrada2?: number;
  salida1?: number;
  salida2?: number;
  saldo1?: number;
  saldo2?: number;
  plan_descripcion?: string;
  cod_cliente?: number;
  origen?: number;
  fecha_alta?: Date;
}

export type tt_proveedor_clientePk = "id";
export type tt_proveedor_clienteId = tt_proveedor_cliente[tt_proveedor_clientePk];
export type tt_proveedor_clienteCreationAttributes = Optional<tt_proveedor_clienteAttributes, tt_proveedor_clientePk>;

export class tt_proveedor_cliente extends Model<tt_proveedor_clienteAttributes, tt_proveedor_clienteCreationAttributes> implements tt_proveedor_clienteAttributes {
  id!: number;
  idproc!: number;
  codigo?: number;
  nombre?: string;
  cod_cuenta?: number;
  nombre_cuenta?: string;
  saldo_inicial1?: number;
  saldo_inicial2?: number;
  anti1?: number;
  anti2?: number;
  nc1?: number;
  nc2?: number;
  nd1?: number;
  nd2?: number;
  fact1?: number;
  fact2?: number;
  nv1?: number;
  nv2?: number;
  op1?: number;
  op2?: number;
  pm1?: number;
  pm2?: number;
  rec1?: number;
  rec2?: number;
  asiento_debe?: number;
  asiento_haber?: number;
  entrada1?: number;
  entrada2?: number;
  salida1?: number;
  salida2?: number;
  saldo1?: number;
  saldo2?: number;
  plan_descripcion?: string;
  cod_cliente?: number;
  origen?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_proveedor_cliente {
    tt_proveedor_cliente.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre_cuenta: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    saldo_inicial1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    saldo_inicial2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    anti1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    anti2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nc1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nc2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nd1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nd2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    fact1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    fact2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nv1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nv2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    op1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    op2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    pm1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    pm2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    rec1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    rec2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    asiento_debe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    asiento_haber: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    entrada1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    entrada2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    salida1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    salida2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    saldo1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    saldo2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    plan_descripcion: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_proveedor_cliente',
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
        name: "tt_proveedor_cliente_2",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_proveedor_cliente;
  }
}
