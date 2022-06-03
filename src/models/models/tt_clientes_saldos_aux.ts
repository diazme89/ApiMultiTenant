import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_clientes_saldos_auxAttributes {
  id: number;
  cod_cliente?: number;
  nombre?: string;
  cod_cuenta?: number;
  nombre_cuenta?: string;
  plan_descripcion?: string;
  cod_proveedor?: number;
  proveedor_cod_cliente?: number;
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
  fecha_alta?: Date;
  idproc?: number;
  pago_previsto?: number;
  rm1?: number;
  rm2?: number;
  rm3?: number;
  rm4?: number;
  cod_empresa?: number;
}

export type tt_clientes_saldos_auxPk = "id";
export type tt_clientes_saldos_auxId = tt_clientes_saldos_aux[tt_clientes_saldos_auxPk];
export type tt_clientes_saldos_auxCreationAttributes = Optional<tt_clientes_saldos_auxAttributes, tt_clientes_saldos_auxPk>;

export class tt_clientes_saldos_aux extends Model<tt_clientes_saldos_auxAttributes, tt_clientes_saldos_auxCreationAttributes> implements tt_clientes_saldos_auxAttributes {
  id!: number;
  cod_cliente?: number;
  nombre?: string;
  cod_cuenta?: number;
  nombre_cuenta?: string;
  plan_descripcion?: string;
  cod_proveedor?: number;
  proveedor_cod_cliente?: number;
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
  fecha_alta?: Date;
  idproc?: number;
  pago_previsto?: number;
  rm1?: number;
  rm2?: number;
  rm3?: number;
  rm4?: number;
  cod_empresa?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_clientes_saldos_aux {
    tt_clientes_saldos_aux.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre_cuenta: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    plan_descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    proveedor_cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    saldo_inicial1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    saldo_inicial2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    anti1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    anti2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    nc1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    nc2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    nd1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    nd2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    fact1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    fact2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    nv1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    nv2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    rec1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    rec2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    asiento_debe: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    asiento_haber: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    entrada1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    entrada2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    salida1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    salida2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    saldo1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    saldo2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    pago_previsto: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    rm1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    rm2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    rm3: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    rm4: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_clientes_saldos_aux',
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
        name: "tt_clientes_saldos_aux_xidproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
      {
        name: "tt_clientes_saldos_aux_xcli",
        using: "BTREE",
        fields: [
          { name: "cod_cliente" },
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_clientes_saldos_aux;
  }
}
